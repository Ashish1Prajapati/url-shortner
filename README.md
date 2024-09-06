URL Shortener
Welcome to the URL Shortener project! This is a simple and efficient URL shortening service built using Node.js and MongoDB. It allows users to shorten long URLs and provides analytics on the number of clicks and the time of clicks for each shortened URL.

Features
Shorten URLs: Convert long URLs into short, manageable links.
Redirect to Original URL: Shortened URLs will redirect users to the original long URL.
Click Analytics: Track the number of clicks and the timestamps of each click.
Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB (Local or Atlas)
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Ashish1Prajapati/url-shortner.git
cd url-shortener
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables

Create a .env file in the root of the project and add the following variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=4000
Replace mongodb://localhost:27017/urlshortener with your MongoDB connection string if you're using MongoDB Atlas.

Run the Application

bash
Copy code
npm start
The application will start on http://localhost:4000.

API Endpoints
Shorten URL
Endpoint:  /url

Request Body:

json
Copy code
{
    "url": "https://example.com"
}
Response:
json
Copy code
{
    "id": "abc123"
}
Redirect to Original URL
Endpoint: GET url/:id
Response: Redirects to the original URL.
Get Analytics
Endpoint: GET url/analytics/:id

Response:

json
Copy code
{
    "totalClicks": 10,
    "analitics": [
        {
            "timestamp": "2024-09-06T12:00:00Z",
             "_id": "rgfergerg"
        },
        {
            "timestamp": "2024-09-06T12:05:00Z",
             "_id": "erthrtrt"
        }
    ]
}
Project Structure
index.js: Main application file.
routes/: Contains route definitions.
models/: Contains Mongoose models.
controllers/: Contains business logic.
public/: Contains static files..
Contributing
Contributions are welcome! Please submit issues and pull requests to help improve the project.

Acknowledgments
Express.js for the web framework.
Mongoose for MongoDB object modeling.