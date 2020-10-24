import { Button, Avatar } from '@material-ui/core'
import React from 'react'
import "./TweetBox.css"
import aziz from "./aziz.jpg"

function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src={aziz} />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text" />
                <Button className="tweetbox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
