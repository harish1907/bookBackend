# bookBackend

## First you have to create .env file then paste all thing as i given
DB_CONNECT="You mongoose database URL"
ACCESS_TOKEN_SECRET="Your access secret key for jwt login"
ACCESS_TOKEN_LIFE="180d"
REFRESH_TOKEN_SECRET="Your refresh secret key for jwt login"
REFRESH_TOKEN_LIFE="365d"

## BASEURL :- http://localhost:5000/api

## Register user api 
Endpoint: /auth/register
Method: POST
body: {
  "name": "example",
  "email" : "example@gmail.com",
  "password": "example@123"
}

## Login user api
Endpoint: /auth/login/user
Method: POST
body: {
  "email" : "example@gmail.com",
  "password": "example@123"
}
NOTE: In this api response you can get accessToken and refreshToken save that in you frontend cache for use secure API.

## Create new book object
Endpoint: /book/create
Method: POST
headers: {
  "Authorization": $`Bearer {your_login_api_accessToken}`
}
body: {
  "title" : "example title",
  "author": "example author",
  "publication_year": 2022,
  "price": 120                 <Optional>
}

## Get single book by there id
Endpoint: /book/get/{your_book_id}        your_book_id is a default mongoose object id which is called _id.
Method: GET
headers: {
  "Authorization": $`Bearer {your_login_api_accessToken}`
}

## Delete single book by there id
Endpoint: /book/delete/{your_book_id}        your_book_id is a default mongoose object id which is called _id.
Method: DELETE
headers: {
  "Authorization": $`Bearer {your_login_api_accessToken}`
}

## Update single book by there id
Endpoint: /book/update/{your_book_id}        your_book_id is a default mongoose object id which is called _id.
Method: PUT
headers: {
  "Authorization": $`Bearer {your_login_api_accessToken}`
}
body: {
  "title" : "example title",
  "author": "example author",
  "publication_year": 2022,
  "price": 120
}

## Get all books with there search by author or publication year.
Endpoint: /getall
Method: GET
headers: {
  "Authorization": $`Bearer {your_login_api_accessToken}`
}
query: {
  "publication_year": 2023,
  "author": "example"
}

NOTE: Basically that authon and publication_year both key are optional and they can search with include cases.
