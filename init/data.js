const formattedListings = [
  {
    "title": "Clifftop Luxury Villa",
    "description": "A stunning modern villa perched on a cliff with ocean views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1589271243979-3153ef0dcbd7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "photo-1589271243979-3153ef0dcbd7"
    },
    "price": 4500,
    "location": "Gokarna, Karnataka",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Trending"
  },
  {
    "title": "Palm-Lined Beach Cottage",
    "description": "Cozy cottage under coconut palms right by the shore.",
    "image": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0",
      "filename": "photo-1507525428034-b723cf961d3e"
    },
    "price": 1700,
    "location": "Varkala, Kerala",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Trending"
  },
  {
    "title": "Hillside Retreat Cabin",
    "description": "Wooden cabin nestled in lush green hills.",
    "image": {
      "url": "https://images.unsplash.com/photo-1748050868829-74a5a43f79c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1748050868829-74a5a43f79c6"
    },
    "price": 1900,
    "location": "Shimla, Himachal Pradesh",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Mountains"
  },
  {
    "title": "Lakefront Bungalow",
    "description": "Serene bungalow facing a tranquil lake, ideal for relaxation.",
    "image": {
      "url": "https://images.unsplash.com/photo-1749497707813-0704f0d15109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1749497707813-0704f0d15109"
    },
    "price": 2100,
    "location": "Alappuzha, Kerala",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Boats"
  },
  {
    "title": "Treehouse Hideaway",
    "description": "Rustic treehouse offering panoramic forest views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0",
      "filename": "photo-1522708323590-d24dbb6b0267"
    },
    "price": 2300,
    "location": "Nagaland",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Domes"
  },
  {
    "title": "Poolside Udaipur Villa",
    "description": "Upscale villa with private pool overlooking Udaipur lake.",
    "image": {
      "url": "https://images.unsplash.com/photo-1748679767437-00b5c0327b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1748679767437-00b5c0327b1a"
    },
    "price": 4800,
    "location": "Udaipur, Rajasthan",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Amazing Pools"
  },
  {
    "title": "Tropical Infinity Resort",
    "description": "Infinity pool resort nestled in tropical greenery.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932196782-0b6dea5f831b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932196782-0b6dea5f831b"
    },
    "price": 3900,
    "location": "Goa Coast",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Amazing Pools"
  },
  {
    "title": "Desert Fort Camp",
    "description": "Luxury tent stay inside a desert fortress.",
    "image": {
      "url": "https://images.unsplash.com/photo-1748679979638-e02b2df71540?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1748679979638-e02b2df71540"
    },
    "price": 2200,
    "location": "Jaisalmer, Rajasthan",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Camping"
  },
  {
    "title": "Backwater Houseboat",
    "description": "Traditional houseboat with modern comforts.",
    "image": {
      "url": "https://images.unsplash.com/photo-1748679767437-00b5c0327b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1748679767437-00b5c0327b1a"
    },
    "price": 2800,
    "location": "Kumarakom, Kerala",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Boats"
  },
  {
    "title": "Snowy Mountain Lodge",
    "description": "Cozy lodge in snow-covered Himalayan woods.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1684506397791-ae0f73b01d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1684506397791-ae0f73b01d9b"
    },
    "price": 2600,
    "location": "Gulmarg, Jammu & Kashmir",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Arctic"
  },
  {
    "title": "Island Villa Paradise",
    "description": "Private island villa with direct beach access.",
    "image": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0",
      "filename": "photo-1507525428034-b723cf961d3e"
    },
    "price": 5000,
    "location": "Havelock Island, Andaman & Nicobar",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Trending"
  },
  {
    "title": "Riverbank Eco Retreat",
    "description": "Eco-friendly cabins by a slow-flowing river.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1684506397791-ae0f73b01d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1684506397791-ae0f73b01d9b"
    },
    "price": 1800,
    "location": "Kabini, Karnataka",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Camping"
  },
  {
    "title": "Himalayan Spa Resort",
    "description": "Luxury spa resort with mountain views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1750639258774-9a714379a093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1750639258774-9a714379a093"
    },
    "price": 4300,
    "location": "Shimla, Himachal Pradesh",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Mountains"
  },
  {
    "title": "Tea Estate Villa",
    "description": "Charming villa set in lush tea gardens.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198012-8760c66b38b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198012-8760c66b38b6"
    },
    "price": 2000,
    "location": "Darjeeling, West Bengal",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Farms"
  },
  {
    "title": "City Skyline Penthouse",
    "description": "Modern penthouse apartment with skyline views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0",
      "filename": "photo-1560448204-e02f11c3d0e2"
    },
    "price": 3200,
    "location": "Bandra, Mumbai",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Iconic cities"
  },
  {
    "title": "Colonial Beach Mansion",
    "description": "Heritage mansion on the windward coast.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198124-f1f91b89b2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198124-f1f91b89b2f5"
    },
    "price": 3500,
    "location": "Pondicherry",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Iconic cities"
  },
  {
    "title": "Mountain View Lodge Leh",
    "description": "Rustic lodge with spectacular views.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198124-f1f91b89b2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198124-f1f91b89b2f5"
    },
    "price": 2100,
    "location": "Leh, Ladakh",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Mountains"
  },
  {
    "title": "Farmhouse in Nashik",
    "description": "Quiet farmhouse surrounded by vineyards.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198124-f1f91b89b2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198124-f1f91b89b2f5"
    },
    "price": 1300,
    "location": "Nashik, Maharashtra",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Farms"
  },
  {
    "title": "Cliffside Pool Retreat",
    "description": "Resort villa with cliffside infinity pool.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198124-f1f91b89b2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198124-f1f91b89b2f5"
    },
    "price": 4200,
    "location": "Goa, India",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Amazing Pools"
  },
  {
    "title": "Wilderness Jungle Lodge",
    "description": "Eco-lodge in the heart of a wildlife reserve.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1747932198124-f1f91b89b2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      "filename": "photo-1747932198124-f1f91b89b2f5"
    },
    "price": 1900,
    "location": "Kanha National Park, Madhya Pradesh",
    "country": "India",
    "reviews": [],
    "owner": "64ac92b832f4df0012345678",
    "category": "Camping"
  }
];

module.exports = formattedListings;