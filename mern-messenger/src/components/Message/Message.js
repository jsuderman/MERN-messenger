import React from 'react';
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function Message({ username, message}) {

    const isUser = username === message.username;
    return (

        <div className={`message ${isUser && 'message__user'}`}>

            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="White"
                        variant="h5"
                        component="h2"
                    >
                        {message.username}: {message.text}
                    </Typography>
                </CardContent>
            </Card>
    

        </div>
    )
}

export default Message
