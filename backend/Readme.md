# Backend API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a minimum length of 5 characters and a valid email format (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
 **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the generated authentication token and the user object.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Missing Fields
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "error": "All fields are required"
}
```

## /users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `email`: A string with a valid email format (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
 **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the generated authentication token and the user object.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

## /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Method
`GET`

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
 **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user profile.

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

## /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Method
`GET`

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
 **Status Code**: `200 OK`
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Logged out successfully"
}
```

#### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
