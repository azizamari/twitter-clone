import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
const [tweetMessage, setTweetMessage] = useState("");
const [tweetImage, setTweetImage] = useState("");

const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
    displayName: "Aziz Amari",
    username: "@aziz._.amari",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar:
        "https://p16-sg.tiktokcdn.com/img/musically-maliva-obj/1663336038010885~c5_720x720.jpeg",
});

    setTweetMessage("");
    setTweetImage("");
};

return (
    <div className="tweetBox">
    <form>
        <div className="tweetBox__input">
        <Avatar src="https://p16-sg.tiktokcdn.com/img/musically-maliva-obj/1663336038010885~c5_720x720.jpeg" />
        <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
        />
        </div>
        <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput"
        placeholder="Optional: Enter image URL"
        type="text"
        />

        <Button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton"
        >
        Tweet
        </Button>
    </form>
    </div>
);
}

export default TweetBox;