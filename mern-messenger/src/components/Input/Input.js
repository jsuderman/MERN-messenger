import React, { useState, useEffect } from 'react';
import Message from "../Message/Message";
import "./Input.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";


function InputField() {
    const [username, setUserName] = useState("");
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {username: 'justin', text: 'hello'},
        {username: 'jake', text: 'hi'}
    ]);
    console.log(input);
    console.log(messages);

    

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, { username: username, text: input }
        ]);
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
            {messages.map(message => (
                <Message username={username} message={message} />
                
            ))
            }

        </div>
    )
}

export default InputField
