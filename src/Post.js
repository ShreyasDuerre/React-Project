import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="#" />
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Shreyas
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" />@shreyas
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>React js is awesome.</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/GSotmi2t5hEA/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />    
                </div>
            </div>
        </div>
    )
}

export default Post