---
title: Architecture Overview
sidebar_position: 3
---

# Architecture Overview

The architecture of the Todo App is based on the following components:

## Frontend

The frontend is built with **Next.js** and provides the user interface, including:
- **Login Page**: Users can log in with their username and password.
- **Todo List Page**: After logging in, users can view and manage their todos.
- **Protected Routes**: Only authenticated users (with a valid JWT) can access the Todo List page.

## Backend

The backend is implemented using **Next.js API Routes**:
- **Authentication**: When the user logs in, a JWT token is generated and stored in cookies.
- **Todo Management**: The API allows users to create, read, and delete their todos. Each user can only access their own todos.

## Architecture Diagram

`[Browser] <--(HTTP Request)-- [Next.js Frontend] |--- (JWT Cookie) ---|
[Next.js API] <--(CRUD Todo API)-- [Database]`


- **JWT Tokens**: Used for authentication, stored in HttpOnly cookies.
- **Prisma ORM**: Used for managing the database and querying todo data.

The frontend communicates with the backend through API routes (`/api/auth`, `/api/todos`).


This diagram shows how the **Frontend**, **API**, and **Database** interact. The **JWT Cookie** is used for authentication, allowing secure communication between the browser and the backend.

