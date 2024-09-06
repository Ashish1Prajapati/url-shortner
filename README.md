# URL Shortener

Welcome to the URL Shortener project! This is a simple and efficient URL shortening service built using Node.js and MongoDB. It allows users to shorten long URLs and provides analytics on the number of clicks and the timestamps of each click for each shortened URL.

## Features

- **Shorten URLs**: Convert long URLs into short, manageable links.
- **Redirect to Original URL**: Shortened URLs will redirect users to the original long URL.
- **Click Analytics**: Track the number of clicks and the timestamps of each click.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Ashish1Prajapati/url-shortner.git
    cd url-shortner
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Application**

    ```bash
    npm start
    ```

    The application will start on `http://localhost:4000`.

## API Endpoints

### Shorten URL

- **Endpoint**: `POST /url`
- **Request Body**:

    ```json
    {
        "url": "https://example.com"
    }
    ```

- **Response**:

    ```json
    {
        "id": "abc123"
    }
    ```

### Redirect to Original URL

- **Endpoint**: `GET url/:id`
- **Response**: Redirects to the original URL.

### Get Analytics

- **Endpoint**: `GET url/analytics/:id`
- **Response**:

    ```json
    {
        "totalClicks": 10,
        "analytics": [
            {
                "timestamp": "2024-09-06T12:00:00Z",
                "_id":"asdkjfhjkwed"
            },
            {
                "timestamp": "2024-09-06T12:05:00Z",
                 "_id":"asdkjfhjkwed"
            }
        ]
    }
    ```

## Project Structure

- `index.js`: Main application file.
- `routes/`: Contains route definitions.
- `models/`: Contains Mongoose models.
- `controllers/`: Contains business logic.

## Contributing

Contributions are welcome! Please submit issues and pull requests to help improve the project.


## Acknowledgments

- [Express.js](https://expressjs.com/) for the web framework.
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling.
