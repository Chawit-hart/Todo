### **6. `todo-operations.md`**
```markdown
---
title: Todo Operations
sidebar_position: 6
---

# Todo Operations

- **Add Todo**: The user can add a new todo by sending a `POST` request to `/api/todos`.
- **Delete Todo**: The user can delete a todo by sending a `DELETE` request to `/api/todos/[id]`.
- Each user can only view and manage their own todos. The `userId` is derived from the JWT token stored in the cookies.
