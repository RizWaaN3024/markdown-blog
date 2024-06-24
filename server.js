const express = require("express");
const mongoose = require("mongoose")
const articleRouter = require("./routes/articles")
const app = express();

app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost/blog", {})


app.set("view engine", "ejs")



app.get("/", (req, res) => {
    const articles = [{
        title: "Test Title",
        createdAt: new Date(),
        description: "Test Description"
    }]
    res.render("articles/index", { articles: articles})
})


app.use("/articles", articleRouter)
app.listen(3000);