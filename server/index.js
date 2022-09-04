const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users")
const cors = require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://suwesh:prawesh1@cluster0.4e6tlf9.mongodb.net/tradie-application?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
            console.log(result)
            

        }
    })
})

// app.post("/createUsers", async (req, res) => {
//     const user = req.body
//     const newUser = new UserModel(user)
//     await newUser.save()

//     res.json(user)
// })

const port = 3001
app.listen(port, () => {
    console.log("Server runs perfectly")
})