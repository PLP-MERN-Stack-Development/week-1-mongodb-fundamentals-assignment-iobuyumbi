# Week 1 - MongoDB Fundamentals Assignment

## 📚 Project: PLP Bookstore

This project demonstrates MongoDB CRUD operations, advanced queries, aggregation pipelines, and indexing. It is part of the **Power Learn Project (PLP) - MERN Stack Development Program**.

---

## 📂 Files Included

- `insert_books.js` – Script to insert sample books into the MongoDB collection.
- `queries.js` – Script to run various MongoDB queries and aggregation operations.
- Screenshots:
  - `insert_books.png`  
    ![Insert Books Screenshot](./insert_books.png)
  - `books.png`  
    ![Books in Compass](./books.png)
  - `query1.png`  
    ![Query 1 Output](./query1.png)
  - `query2.png`  
    ![Query 2 Output](./query2.png)
  - `query3.png`  
    ![Query 3 Output](./query3.png)
  - `aggregation.png`  
    ![Aggregation Output](./aggregation.png)

---

## 🏗️ Database Setup

- **Database Name**: `plp_bookstore`
- **Collection Name**: `books`
- **Total Books Inserted**: 12

---

## 🚀 How to Run

### Step 1: Insert Books into the Database

1. **Ensure MongoDB is running locally** on `mongodb://localhost:27017`.
2. Open your terminal in the project directory and run:

   ```bash
   node insert_books.js

   ```

### Step 2: Execute MongoDB Queries

After inserting the books, run the queries to test **CRUD and aggregation operations**:

```bash
node queries.js

```

---

# This below is the original instructions:

---

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19665026&assignment_repo_type=AssignmentRepo)

# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:

1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
