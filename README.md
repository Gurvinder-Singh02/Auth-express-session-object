# Auth-express-session-object
Simplified Express app with sessions 


### 1. Root Route: `GET /`
- **Output**: Returns the number of views for the user different user based on cookie they send after first request.
  - Example Response:  
    ```
    Your Number of views: 1
    ```

### 2. Login Route: `POST /login`

- **Required**: 
  - **Body**: JSON with `username` and `password`
    ```json
    {
      "username": "guri",
      "password": "pass"
    }
    ```
- **Output**: 
    ```
    Logged in! adn the cookie is send to the client 
    ```
  

### 3. Protected Route: `GET /me`
- **Note**: The client will automatically get the session cookie (`connect.sid`)
  
- **Output**: 
    ```
    Welcome, guri!
    ```
