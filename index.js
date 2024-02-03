import express from "express";
import axios from "axios";
import cors from "cors";
import imageType from "image-type"

const app = express();
const port = 5000;

app.use(cors());

app.get("/",async (req,res) => {
    const response = await axios.get("https://lahelu.com/api/post/get-shuffle");
    const media = response.data.postInfo.media;
    const meme =  await axios.get("https://cache.lahelu.com/" + media, { responseType: 'arraybuffer'});
    media.includes("video") ? res.header('Content-Type', 'video/mp4') : res.header('Content-Type',"image/jpeg");
    return res.send(meme.data);
})    


app.listen(port,() => console.log("Server on"))
