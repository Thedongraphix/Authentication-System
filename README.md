# Authentication System

This project is an authentication system built using Node.js, Express.js, dotenv, bcrypt, MongoDB, and deployed on Heroku.

## Features

- User registration and login
- Password hashing with bcrypt
- Environment variable management with dotenv
- MongoDB for data storage
- Deployment on Heroku

## Technologies Used

- Node.js
- Express.js
- dotenv
- bcrypt
- MongoDB
- Heroku

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed or a MongoDB Atlas account
- Heroku account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/authentication-system.git
    cd authentication-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    ```

### Running the Application

1. Start the MongoDB server:
    ```bash
    mongod
    ```

2. Start the application:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

### Deployment

1. Log in to Heroku:
    ```bash
    heroku login
    ```

2. Create a new Heroku app:
    ```bash
    heroku create your-app-name
    ```

3. Add the Heroku remote:
    ```bash
    git remote add heroku https://git.heroku.com/your-app-name.git
    ```

4. Deploy the application:
    ```bash
    git push heroku master
    ```

5. Set the environment variables on Heroku:
    ```bash
    heroku config:set MONGODB_URI=your_mongodb_uri
    heroku config:set SECRET_KEY=your_secret_key
    ```

6. Open your deployed app:
    ```bash
    heroku open
    ```

## License

This project is licensed under the MIT License.

## Acknowledgements

- Node.js
- Express.js
- dotenv
- bcrypt
- MongoDB
- Heroku
