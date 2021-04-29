import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search " type="text" />
            </div> 
            <div className="widgets__widgetContainer">
                <h2> Whats happening</h2>
                {/*<TwitterTweetEmbed tweetId={"858551177860055040"} />*/}
            </div>
        </div>
    )
}

export default Widgets
