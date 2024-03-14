const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
         lowercase: true,
    },
    createdAt : {
        type : Date,
        default: Date.now
    },
    address: String,
});

const mongo = mongoose.model('mongo', userSchema);

async function create() {
    try {
        const user = new mongo({
            name: "yassine",
            age: 16,
            email: "ddd",
            address: "soumaya"
        });

        const savedUser = await user.save();
        console.log("Created user:", savedUser);
    } catch (error) {
        console.log(error.message);
    }
}

async function go() {
    try {
        const user1 = await mongo.create({
            name: "aya",
            age: 21,
            email: "bbb",
            address: "blanca"
        });

        const user2 = await mongo.create({
            name: "abd",
            age: 20,
            email: "ccc",
            address: "mdina"
        });
        await user1.save();
         await user2.save();
        console.log("Users created:", user1, user2);
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchByName() {
    try {
        const users = await mongo.find({ name: "youssef" });
        console.log("Users found:", users);
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchById(id) {
    try {
        const user = await mongo.findById(id);
        console.log("User found:", user);
    } catch (error) {
        console.log(error.message);
    }
}

async function update(id, newName) {
    try {
        const user = await mongo.findByIdAndUpdate(id, { name: newName }, { new: true });
        await user.save();
        console.log("User updated:", user);
    } catch (error) {
        console.log(error.message);
    }
}

async function supprimer(id) {
    try {
        const result = await mongo.findByIdAndDelete(id);
        console.log("User deleted:", result);
        await result.save();
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteUsersBeforeDate(date) {
    try {
      const result = await mongo.deleteMany({ createdAt: { $lt: date } });
      console.log("Number of deleted users:", result.deletedCount);
    } catch (error) {
      console.error("Error deleting users:", error.message);
    }
  }
 
