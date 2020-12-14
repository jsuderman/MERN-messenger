import React, { useState } from 'react';
import "./Input.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";


function InputField() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    console.log(input);
    console.log(messages);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }
    const onChange = () => {

    }

    return (
        <div className="input">
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
                <p>{message}</p>
            ))
            }

        </div>
    )
}

export default InputField
