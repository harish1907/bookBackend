# bookBackend

## Setup

First, create a `.env` file and paste the following environment variables:
```
DB_CONNECT="Your mongoose database URL"
ACCESS_TOKEN_SECRET="Your access secret key for jwt login"
ACCESS_TOKEN_LIFE="180d"
REFRESH_TOKEN_SECRET="Your refresh secret key for jwt login"
REFRESH_TOKEN_LIFE="365d"
```


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


### Login user api

- **Endpoint**: `/auth/login/user`
- **Method**: `POST`
- **Request Body**:
  ```json
  {"body": {
    "email": "example@gmail.com",
    "password": "example@123"
  }}
- **NOTE**: `In this api response you can get accessToken and refreshToken save that in you frontend cache for use secure API`
  

### Create new book object

- **Endpoint**: `/book/create`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title" : "example title",
    "author": "example author",
    "publication_year": 2022,
    "price": 120
  }
- **Request Header**:
  ```json
  {
    "Authorization" : "Bearer {your_accessToken_after_login}"
  }
- **NOTE**: `Price key is optional`


### Get single book by there id

- **Endpoint**: `/book/get/{your_book_id}`
- **Method**: `GET`
- **Request Header**:
  ```json
  {
    "Authorization" : "Bearer {your_accessToken_after_login}"
  }
- **NOTE**: `your_book_id is a default mongoose object id which is called _id.`


### Delete single book by there id

- **Endpoint**: `/book/delete/{your_book_id}`
- **Method**: `DELETE`
- **Request Header**:
  ```json
  {
    "Authorization" : "Bearer {your_accessToken_after_login}"
  }
- **NOTE**: `your_book_id is a default mongoose object id which is called _id.`


### Update single book by there id

- **Endpoint**: `/book/update/{your_book_id}`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title" : "example title",
    "author": "example author",
    "publication_year": 2022,
    "price": 120
  }
- **Request Header**:
  ```json
  {
    "Authorization" : "Bearer {your_accessToken_after_login}"
  }
- **NOTE**: `your_book_id is a default mongoose object id which is called _id.`



### Get all books with there search by author or publication year.

- **Endpoint**: `/getall`
- **Method**: `GET`
- **Request Query**:
  ```json
  {
    "publication_year" : 2023,
    "author": "example"
  }
- **Request Header**:
  ```json
  {
    "Authorization" : "Bearer {your_accessToken_after_login}"
  }




- **NOTE**: `Thank you for your interest in viewing my profile and using my code. If you want to connect with me, you can do so through https://evolu-dev.vercel.app. `
