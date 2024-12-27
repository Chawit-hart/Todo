---
title: Authentication Flow
sidebar_position: 4
---

# Authentication Flow

1. **Login**: The user enters their username and password on the `/login` page.
2. **JWT Token Generation**: If the credentials are correct, the server generates a JWT token with the user’s `userId` and sends it in a cookie (`token=<JWT>`).
3. **Protected Routes**: When accessing `/todos`, the server checks if a valid JWT token is present in the cookies.
4. **Token Validation**: If the token is valid, the server decodes it to extract the `userId` and returns the todos associated with that user.
5. **Logout**: When logging out, the token is removed from the cookies.
