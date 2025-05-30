// queries.js - Script to perform various MongoDB queries

// ✅ Step 1: Set Up the File
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "plp_bookstore";
const collectionName = "books";

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // ✅ Step 2: Add Queries
    // 🔍 1. Find all books
    console.log("\nAll books:");
    const allBooks = await collection.find({}).toArray();
    console.log(allBooks);

    // 🔍 2. Find books by a specific author "George Orwell"
    const author = "George Orwell";
    console.log(`\nBooks by ${author}:`);
    const booksByAuthor = await collection.find({ author }).toArray();
    console.log(booksByAuthor);

    // 🔍 3. Find books published after 1950
    console.log("\nBooks published after 1950:");
    const booksAfter1950 = await collection
      .find({ published_year: { $gt: 1950 } })
      .toArray();
    console.log(booksAfter1950);

    // 🔍 4. Find books in a specific genre "Fiction"
    const genre = "Fiction";
    console.log(`\nBooks in the genre "${genre}":`);
    const booksInGenre = await collection.find({ genre }).toArray();
    console.log(booksInGenre);

    // 🔍 5. Sort by Price (Descending)
    console.log("\nBooks sorted by price (high to low):");
    const sortedByPrice = await collection
      .find({})
      .sort({ price: -1 })
      .toArray();
    console.log(sortedByPrice);

    // 🔍 6. Only Titles and Authors (Projection)
    console.log("\n Only titles and Authors of all books:");
    const titlesAndAuthors = await collection
      .find({}, { projection: { title: 1, author: 1, _id: 0 } })
      .toArray();
    console.log(titlesAndAuthors);
    // 🔍 7. Find in-stock books
    console.log("\nIn-stock books:");

    const inStockBooks = await collection.find({ in_stock: true }).toArray();
    console.log(inStockBooks);

    // 🔍 8. Find books with price less than $20
    console.log("\nBooks with price less than $20:");
    const affordableBooks = await collection
      .find({ price: { $lt: 20 } })
      .toArray();
    console.log(affordableBooks);

    // 🔍 9. Find books with more than 300 pages
    console.log("\nBooks with more than 300 pages:");
    const longBooks = await collection.find({ pages: { $gt: 300 } }).toArray();
    console.log(longBooks);

    // ✅ Step 3: Add Aggregation Example
    // Aggregation: Count books by genre
    console.log("\nCount of books by genre:");
    const genreCount = await collection
      .aggregate([
        { $group: { _id: "$genre", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();
    console.log(genreCount);

    console.log("\nAverage book price per genre:");
    const avgPrice = await collection
      .aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }])
      .toArray();
    console.log(avgPrice);
  } catch (err) {
    console.error("Error occurred while running queries:", err);
  } finally {
    // Close the connection
    await client.close();
    console.log("Connection closed");
  }
}

runQueries().catch(console.error);
