# Quora Post

Quora-like web application built with **Node.js, Express, and EJS**, allowing users to create, read and update (CRUD) posts.

## 🚀 Features

- View all posts
- Add new posts
- Edit existing posts
- View individual posts
- Uses RESTful routes
- UUID for unique post IDs
- Static assets served from `public/`

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Middleware:** Method-Override, UUID

## 📂 Project Structure

```
├── views/         # EJS templates (index, show, new, edit)
├── public/        # Static assets (CSS, JS, images)
├── app.js         # Main server file
├── package.json   # Dependencies
├── README.md      # Documentation
```

## 🛠 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/eabhishek24/Quora-Post.git
   cd quora-clone
   ```
2. **Install dependencies**
   ```sh
   npm install express ejs uuid method-override path
   ```
3. **Run the server**
   ```sh
   node app.js
   ```
4. **Open in browser**
   - Visit `http://localhost:8080/posts`

## 🔄 API Routes

| Method | Route             | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/posts`          | View all posts      |
| GET    | `/posts/new`      | Form to create post |
| POST   | `/posts`          | Add new post        |
| GET    | `/posts/:id`      | View a single post  |
| GET    | `/posts/:id/edit` | Form to edit a post |
| PATCH  | `/posts/:id`      | Update a post       |

## 📜 Dependencies

- **Express** - Web framework
- **EJS** - Templating engine
- **UUID** - Generate unique post IDs
- **Method-Override** - Enable `PATCH` in HTML forms
- **Path** - Handle file paths

## 🎯 Future Improvements

- Add **delete** functionality
- Add a **database** (MongoDB)
- Implement **user authentication**

## 📌 Use Case Diagram (PlantUML)
![use case diagram](https://github.com/user-attachments/assets/d4ac6d68-f658-4f02-ba52-0afda409be17)


## 📸 Screenshots

### **Homepage**
![quora post ](https://github.com/user-attachments/assets/3238a0ad-029a-4c01-b31b-2d98fe170963)


### **Create a Post Page**

![create post ](https://github.com/user-attachments/assets/2f637590-4773-437e-b285-e43a0e382e14)


### **Edit Post Page**
![edit post](https://github.com/user-attachments/assets/628b7908-d136-41a5-8a61-4b1e65bfd81d)



## 🤝 Contributing

Feel free to fork the repo and submit pull requests! 😃

## 📜 License

This project is licensed under the **MIT License**.

