# bookBackend

## Setup

First, create a `.env` file and paste the following environment variables:

DB_CONNECT="Your mongoose database URL"
ACCESS_TOKEN_SECRET="Your access secret key for jwt login"
ACCESS_TOKEN_LIFE="180d"
REFRESH_TOKEN_SECRET="Your refresh secret key for jwt login"
REFRESH_TOKEN_LIFE="365d"

bash
Copy code

## BASEURL

BASEURL: http://localhost:5000/api

## API Endpoints

### Register User

- **Endpoint**: `/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "example",
    "email": "example@gmail.com",
    "password": "example@123"
  }
Login User
Endpoint: /auth/login/user
Method: POST
Request Body:
json
Copy code
{
  "email": "example@gmail.com",
  "password": "example@123"
}
Note: In the response, you will receive accessToken and refreshToken. Save them in your frontend cache for secure API usage.
Create New Book
Endpoint: /book/create
Method: POST
Headers:
css
Copy code
Authorization: Bearer {your_login_api_accessToken}
Request Body:
json
Copy code
{
  "title": "example title",
  "author": "example author",
  "publication_year": 2022,
  "price": 120
}
Optional: price field
Get Single Book
Endpoint: /book/get/{your_book_id}
Method: GET
Headers:
css
Copy code
Authorization: Bearer {your_login_api_accessToken}
Note: Replace {your_book_id} with the MongoDB object ID of the book.
Delete Single Book
Endpoint: /book/delete/{your_book_id}
Method: DELETE
Headers:
css
Copy code
Authorization: Bearer {your_login_api_accessToken}
Note: Replace {your_book_id} with the MongoDB object ID of the book.
Update Single Book
Endpoint: /book/update/{your_book_id}
Method: PUT
Headers:
css
Copy code
Authorization: Bearer {your_login_api_accessToken}
Request Body:
json
Copy code
{
  "title": "example title",
  "author": "example author",
  "publication_year": 2022,
  "price": 120
}
Note: Replace {your_book_id} with the MongoDB object ID of the book.
Get All Books
Endpoint: /getall
Method: GET
Headers:
css
Copy code
Authorization: Bearer {your_login_api_accessToken}
Query Parameters:
publication_year: Filter books by publication year (optional)
author: Filter books by author (optional)
Note: Both publication_year and author parameters are optional and can be used for searching with case insensitivity.
