# Todo App with Next.js and TypeScript

A simple Todo app built with **Next.js** and **TypeScript**, featuring JWT authentication, cookie-based session management, and CRUD operations for todos.

## Features
- User authentication with JWT tokens.
- Todos are stored in a database, and each user can only access their own todos.
- CRUD operations (Create, Read, Update, Delete) for managing todos.

## Getting Started

### Prerequisites
Before you begin, ensure that you have the following installed:
- **Node.js** (LTS version recommended): [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): This should be installed automatically with Node.js
- **Database** (MongoDB, PostgreSQL, or SQLite for testing purposes)

### Installation
1. **Clone the repository**:
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
``` Install dependencies: Once you're inside the project directory, run the following command to install all the necessary ``` dependencies:

``` npm install ```
``` Create a .env file: Create a file named .env in the root directory of the project. Add the following environment variables: ```

``` DATABASE_URL=your-database-connection-string ```
``` JWT_SECRET=your-jwt-secret-key ```
Replace your-database-connection-string with your database URL (for example, MongoDB or PostgreSQL).
Replace your-jwt-secret-key with a secret string used to sign your JWT tokens.
``` Run the development server: Now, you can start the development server using the following command: ```

``` npm run dev ```
This will start the application on http://localhost:3000.

Open the app: Open your browser and navigate to http://localhost:3000 to view the app in action.

Usage
The app provides a login page where users can log in and view their personal todo list.
Authenticated users can add, edit, and delete todos.
Todos are stored securely in a database, and the application uses JWT tokens for authentication and authorization.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
Distributed under the MIT License. See LICENSE for more information.

Contact
Your Name - your.email@example.com
Project Link: https://github.com/your-username/todo-app