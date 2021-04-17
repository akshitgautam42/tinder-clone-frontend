import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css" ;

function ChatScreen(props) {

        const [input,setInput]=useState('');
    
        const [messages, setMessages]=useState([
            {
                name: "Ellen",
                image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters:format(jpg)/https://specials-images.forbesimg.com/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg%3Fbackground=000000&cropX1=422&cropX2=1300&cropY1=0&cropY2=879",
                message: "Whats Up!",
            },
            {
                name: "Ellen",
                image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters:format(jpg)/https://specials-images.forbesimg.com/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg%3Fbackground=000000&cropX1=422&cropX2=1300&cropY1=0&cropY2=879",
                message: "How you doin",
            },
            {
                message: "Hey cutie",
            }

        ]);

        const handleSend= e =>{
            e.preventDefault();

            setMessages([...messages,{message: input}]);
            setInput("");
        };

        return(
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message=>
                message.name?(
                <div className="chatScreen_message">
                <Avatar 
                className="chatScreen_image" alt={message.name} src={message.image} />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
            ):
            (
                <div className="chatScreen_message">
                
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>
            ))}
        

        
    <form className="chatScreen_input">
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chatScreen_inputField"
        placeholder="Type a message"
        type="text" />
        <button 
        onClick={handleSend}
        className="chatScreen_inputButton"
        type="submit">SEND</button>
    </form>

</div>
    );
}



export default ChatScreen;