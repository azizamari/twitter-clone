import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import aziz from './aziz.jpg'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verfied, text, image, avatar}) {
    return (
        <div className="post">  
            <div className="post__avatar"> 
            <Avatar src={aziz} />
            </div>
            <div className="post__body">
                <div className="post__header"> 
                    <div className="post__headerText">
                        <h3>
                            Aziz Amari {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @aziz._.amari
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Over the past 6 months, we've been working with the Google #Flutter<br></br> team to bring you the 22 hour long, Complete Flutter Development<br></br>  Bootcamp with Dart! For a limited time, you can get it for just $10.<br></br>  https://appbrewery.co/p/flutter-development-bootcamp-with-dart</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="samll" />
                </div>
            </div>
        </div>
    )
}

export default Post
