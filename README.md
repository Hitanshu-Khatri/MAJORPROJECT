

# MAJORPROJECT 🏡

A robust web application built with Node.js, Express, and MongoDB. This project provides a platform for users to browse, create, and review listings. It features a complete user authentication system, data validation, and a structured error-handling mechanism.

-----

## ✨ Features

  * **User Authentication**: Secure user registration and login using Passport.js.
  * **Listing Management**: Users can create, view, update, and delete listings.
  * **Review System**: Authenticated users can post and delete reviews on listings.
  * **Data Validation**: Server-side schema validation using Joi to ensure data integrity.
  * **Protected Routes**: Middleware to protect specific routes, ensuring only authenticated users can access them.
  * **Relational Data**: Implements a one-to-many relationship between listings and reviews.
  * **Cascade Deletes**: Automatically deletes all associated reviews when a listing is deleted.

-----

## 🛠️ Tech Stack & Packages

  * **Backend**: Node.js, Express.js
  * **Database**: MongoDB with Mongoose (ODM)
  * **Templating Engine**: EJS (with ejs-mate for layouts)
  * **Authentication**: Passport.js (`passport`, `passport-local`, `passport-local-mongoose`)
  * **Session Management**: `express-session`, `connect-flash`
  * **Validation**: Joi
  * **Middleware**: `method-override` (for PUT/DELETE requests from forms)

-----

## 🚀 Getting Started

### Prerequisites

  * Node.js installed
  * MongoDB installed and running

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/MAJORPROJECT.git
    cd MAJORPROJECT
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env` file in the root directory and add your MongoDB connection string:

    ```
    MONGO_URL="your_mongodb_connection_string"
    ```

4.  **Run the application:**

    ```bash
    node app.js
    ```

    The server should now be running on the configured port.

-----

## ⚙️ Core Concepts

### Authentication & Sessions

User authentication is handled by **Passport.js** using the local strategy. The `passport-local-mongoose` plugin simplifies the User model by adding methods for password hashing and user registration.

Sessions are managed with `express-session`, allowing user state to persist across requests. The `connect-flash` middleware is used to display temporary messages to the user (e.g., "Login successful" or "You must be logged in to do that"). The `isLoggedIn` middleware function protects routes by verifying `req.isAuthenticated()`.

### Validation

To ensure data integrity, all incoming request bodies for new listings and reviews are validated against pre-defined schemas using **Joi**. If validation fails, an error is thrown and handled gracefully.

### Database Schema

  * **User Model**: Stores user credentials (`username`, hashed `password`) and `email`. Handled largely by `passport-local-mongoose`.
  * **Listing Model**: Contains core listing information like `title`, `description`, `price`, `location`, etc. It also includes an array of `ObjectID`s, referencing the **Review** documents associated with it.
  * **Relationship**: When a listing is deleted, a Mongoose `post` middleware hook is triggered to perform a cascade delete, removing all of its associated reviews from the database.

### Error Handling

The application uses a centralized error handling strategy:

1.  **`ExpressError`**: A custom error class that extends the native `Error` object to include an HTTP `statusCode`.
2.  **`wrapAsync` Utility**: A higher-order function that wraps asynchronous route handlers. It catches any promise rejections and passes them to Express's `next()` function, eliminating the need for repetitive `try...catch` blocks.
3.  **Error Handling Middleware**: A final middleware in `app.js` catches all errors passed to `next()`, and renders a dedicated error page with the error's message and status code.
