const Listing = require("../models/listing.js");
const geocodeLocation = require("../utils/geocode.js");

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let filter = {};
    if (category) {
        filter.category = category;
    }

    const allListings = await Listing.find(filter);

    // Pass category to the template to optionally show a message or style the active filter
    res.render("./listings/index.ejs", { allListings, category });
};

module.exports.renderNewForm =(req,res)=>{
    res.render("./listings/new.ejs");
};
module.exports.renderBookNowForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}})
    .populate("owner");
    res.render("./listings/booknow.ejs", { listing });
};
module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}})
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested Does not exist");
        return res.redirect("/listings");
    }
    const fullAddress = `${listing.location}, ${listing.country}`;
    const coordinates = await geocodeLocation(fullAddress);
    res.render("./listings/show.ejs",{listing,lat: coordinates?.lat,
    lng: coordinates?.lng});
};

module.exports.createListing =async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.path;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image={url,filename};
   
   
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
    };


module.exports.renderEditForm= async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested Does not exist");
        return res.redirect("/listings");
    }

    let oringinalImageUrl = listing.image.url;
    oringinalImageUrl=oringinalImageUrl.replace("/upload","/upload/w_200,h_200");
    res.render("./listings/edit.ejs",{listing,oringinalImageUrl}); 
};


module.exports.updateListing =async(req,res)=>{
    let {id} =req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    
    if(typeof req.file!=="undefined"){
    let url = req.file.path;
    let filename = req.file.path;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async(req,res)=>{
    let {id} =req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}; 