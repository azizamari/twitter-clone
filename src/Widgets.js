import React from 'react'
import "./Widgets.css"
import SearchIcon from "@material-ui/icons/Search"
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets_searchIcons" />
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happenng</h2>
                <TwitterTweetEmbed tweetId={"1319706795934420993"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="KylieJenner" options={{height:400}}/>
            </div>
        </div>
    )
}

export default Widgets
