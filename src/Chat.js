import React from "react";
import "./Chat.css";
import { SearchOutlined, AttachFile } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Chat() {
  return (
    <div className="chat">
      {/* <h1>I am the Chat Bar</h1> */}
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen At...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Yashika</span>
          Hey. Message here
          <span className="chat__timestamp">
              {new Date().toUTCString()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Chat;
