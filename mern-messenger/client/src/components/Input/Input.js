import React, { useState, useEffect } from 'react';
import Message from "../Message/Message";
import "./Input.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import axios from '../../axios';
import Pusher from "pusher-js";
import FlipMove from "react-flip-move";

const pusher = new Pusher('57cd75778200c86ff161', {
    cluster: 'us3'
});


function InputField() {
    const [username, setUserName] = useState("");
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    console.log(input);
    console.log(messages);

    useEffect(() => {
        axios.get('/retrieve/conversation')
        .then((res) => {
            setMessages(res.data)
        })
    }, [])


    useEffect(() => {
        const channel = pusher.subscribe('messages');
        channel.bind('newMessage', function (data) {
            sync()
        });
    }, [username])
    

    const sync = async () => {
        await axios.get('/retrieve/conversation')
            .then((res) => {
                console.log(res.data);
                setMessages(res.data)
            })
    }

    useEffect(() => {
        setUserName(prompt("Please enter your name"));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();

        axios.post('save/messages', {
            username: username,
            message: input,
            timestamp: Date.now()
        })
        // setMessages([...messages, { username: username, message: input }
        // ]);
        setInput('');
    }


    return (
        <div className="input">
            <h2>welcome {username}</h2>
            <form>

                <FormControl>
                    <InputLabel>Enter Your Message</InputLabel>
                    <Input
                        className="input__input"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        type="text"
                    />
                    <Button disabled={!input} variant='contained' type='submit' onClick={sendMessage} className="input__button">Send Message</Button>
                </FormControl>


            </form>

            <FlipMove>
                {
                    messages.map(message => (
                        <Message key={message.id} username={username} message={message} />

                    ))
                }


            </FlipMove>

            

        </div>
    )
}

export default InputField
