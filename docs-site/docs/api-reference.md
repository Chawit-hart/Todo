---
title: API Reference
sidebar_position: 5
---

# API Reference

## POST /api/auth
- **Request Body**:
```json
{
  "username": "string",
  "password": "string"
}

```

- **Response**:
```json
    {
    "status": 200,
    "message": "OK",
    "token": "<JWT>"
    }
```

- **Error Response**:
```json
    {
    "status": 401,
    "message": "Unauthorized",
    "error": "Invalid credentials"
    }
```

## GET /api/todos
- **Headers**: Must include Authorization: Bearer `<JWT>`
- **Response**: List of todos belonging to the authenticated user.

```json
    {
        "todos": [
        { "id": 1, "title": "Buy groceries" },
        { "id": 2, "title": "Finish homework" }
        ]
    }
```

## POST /api/todos
- **Request Body**:

```json
    {
        "title": "string"
    }
```

- **Response**: Newly created todo with an ID.

```json
    {
    "id": 3,
    "title": "New todo"
    }
```

## DELETE /api/todos/[id]
- **Request**: Delete the todo with the specified id.
- **Response**: 200 OK (if todo was deleted) or 404 Not Found (if todo does not exist).

