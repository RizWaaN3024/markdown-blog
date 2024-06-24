const express = require("express");
const mongoose = require("mongoose")
const Article = require("./modals/article")
const articleRouter = require("./routes/articles")
const app = express();

app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost/blog", {})


app.set("view engine", "ejs")



app.get("/", async (req, res) => {
    const articles = await Article.find().sort({ createdAt: "desc" })
    res.render("articles/index", { articles: articles})
})


app.use("/articles", articleRouter)
app.listen(3000);