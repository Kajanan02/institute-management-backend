# This project representing the institute management system BackEnd

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.


## Available Roles

### 1. Admin => role: 1
### 2. Institute => role: 2
### 3. Student => role: 3
### 4. Parent => role: 4



## Available APIs

#### Register a new user
### `http://localhost:5000/api/users/register`
Sample Request Body
```
{
    "name":"Kajanan",
    "email":"kajanan202s000@gmail.com",
    "password":"1234567",
    "role":2,
    "phoneNumber":"0762925096",
    "address":"Vavuniya",
    "profilePic":"img-url"
}
```

#### Auth a user
### `http://localhost:5000/api/users/register`
Sample Request Body
```
{
    "email":"kajanan202s000@gmail.com",
    "password":"1234567",
}
```

#### Update a user
### `http://localhost:5000/users/:userId/profile`
Sample Request Body (Update only send updated fields) 
```
{
    "name":"Kajanan",
    "email":"kajanan202s000@gmail.com",
    "password":"1234567",
    "phoneNumber":"0762925096",
    "address":"Vavuniya",
    "profilePic":"img-url"
}
```

####  Get A user
### `http://localhost:5000/api//users/:userId/profile`

#### Get All User
### `http://localhost:5000/api//users/:userId/profile`
