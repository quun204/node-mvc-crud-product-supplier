require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("🌱 Seeding data...");

    await Supplier.deleteMany({});
    await Product.deleteMany({});

    const suppliers = await Supplier.insertMany([
      { name: "Apple Inc", address: "California, USA", phone: "123456789" },
      { name: "Samsung", address: "Seoul, Korea", phone: "987654321" }
    ]);

    await Product.insertMany([
      { name: "iPhone 15", price: 1200, quantity: 50, supplierId: suppliers[0]._id },
      { name: "Galaxy S24", price: 1000, quantity: 40, supplierId: suppliers[1]._id }
    ]);

    console.log("✅ Done seeding!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
