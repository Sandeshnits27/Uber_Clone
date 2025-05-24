# User Registration API

## Endpoints

### 1. Register User

- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** Register a new user and receive a JWT token.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Success Response

- **Status:** 201 Created

```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Example Full Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY2NjY2NjY2NjY2NjY2NjY2NiIsImlhdCI6MTY4ODg4ODg4OH0.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567",
  "user": {
    "_id": "666666666666666666666666",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Error Responses

- **400 Bad Request:** Missing or invalid fields.
- **409 Conflict:** Email already in use.

```json
{
  "error": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### 2. User Login

- **Endpoint:** `/users/login`
- **Method:** `POST`
- **Description:** Authenticate user and receive a JWT token.

#### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Success Response

- **Status:** 200 OK

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY2NjY2NjY2NjY2NjY2NjY2NiIsImlhdCI6MTY4ODg4ODg4OH0.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567",
  "user": {
    "_id": "666666666666666666666666",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Error Responses

- **400 Bad Request:** Missing or invalid fields.
- **401 Unauthorized:** Invalid email or password.

```json
{
  "error": "Invalid email or password"
}
```

---

### 3. Get User Profile

- **Endpoint:** `/users/profile`
- **Method:** `GET`
- **Description:** Retrieve the authenticated user's profile.
- **Authentication:** Requires JWT in `Authorization` header.

#### Success Response

- **Status:** 200 OK

```json
{
  "id": "12345",
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Error Responses

- **401 Unauthorized:** User is not authenticated.

---

### 4. User Logout

- **Endpoint:** `/users/logout`
- **Method:** `POST`
- **Description:** Logout the authenticated user.
- **Authentication:** Requires JWT in `Authorization` header.

#### Success Response

- **Status:** 200 OK

```json
{
  "message": "Successfully logged out."
}
```

#### Error Responses

- **401 Unauthorized:** User is not authenticated.
