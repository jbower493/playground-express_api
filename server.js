const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
    return res.json({
        posts: [
            {
                id: 1,
                title: "The first post",
                body: "This is the main body text of the first post.",
            },
            {
                id: 2,
                title: "The second post",
                body: "This is what the second post is all about.",
            },
        ],
    });
});

// app.post("/post", (req, res) => {
//     return res.json({ success: true });
// });

app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(4000, () => console.log("server started on port 4000"));
