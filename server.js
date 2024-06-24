const express = require("express");
const articleRouter = require("./routes/articles")
const app = express();


app.set("view engine", "ejs")
app.use("/articles", articleRouter)


app.get("/", (req, res) => {
    const articles = [{
        title: "Test Title",
        createdAt: new Date(),
        description: "Test Description"
    }]
    res.render("articles/index", { articles: articles})
})
app.listen(3000);