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


### Institute APIs

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
### `http://localhost:5000/api/users/:userId/profile`
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
### `http://localhost:5000/api/users/:userId/profile`

#### Get All User
### `http://localhost:5000/api/users/allprofile`

#### Logout a user
### `http://localhost:5000/api/users/logout`

#### Delete a user
### `http://localhost:5000/api/users/:userId/deleteUser`


### Student APIs

#### Register a new student
### `http://localhost:5000/api/institute/:instituteId/createStudent`
Sample Request Body
```
{
    "name":"Kajanan",
    "age":"kajanan202s000@gmail.com",
    "password":"1234567",
    "role":2,
    "phoneNumber":"0762925096",
    "address":"Vavuniya",
    "profilePic":"img-url"
    "gender":"img-url"
    "parentName":"img-url"
    "instituteId":"img-url"
    "nicNo":"img-url"
    "location":"img-url"
}
```

#### Update a student
### `http://localhost:5000/api/institute/:instituteId/student/:id`
Sample Request Body (Update only send updated fields)
```
{
    "name":"Kajanan",
    "age":"kajanan202s000@gmail.com",
    "phoneNumber":"0762925096",
    "address":"Vavuniya",
    "profilePic":"img-url"
    "gender":"img-url"
    "parentName":"img-url"
    "instituteId":"img-url"
    "nicNo":"img-url"
    "location":"img-url"
}
```

####  Get A Student
### `http://localhost:5000/api/institute/:instituteId/student/:id`

#### Get All Students
### `http://localhost:5000/api/institute/:instituteI/getAllStudents`

#### Delete Student
### `http://localhost:5000/api/institute/:instituteId/student/:id`



