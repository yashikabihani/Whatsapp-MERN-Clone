import React, {useEffect, useState} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  //Responsible for fetching all the initial information
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      })
    }, []);

  useEffect(() => {
    const pusher = new Pusher('24e06084f487cabc54fa', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages,data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      {/* <h1>Let's Build a MERN Whatsapp Clone</h1> */}
      <div className="app__body">
        {/* SiderBar */}
        <Sidebar />
        {/* Chat Component */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
