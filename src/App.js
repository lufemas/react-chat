// import './App.css';

import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Card, Container, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import socket from './socket/socket';


const useStyles = makeStyles((theme) => (
  {
    h100 :{
      height : '100%',
    },

    chatLog: {
      display: 'flex',
      flexDirection: 'Column',
      height : '75%',
    }
  }
))

export default function App() {

  const classes = useStyles()

  socket.emit('login', { username: 'lufemas', id: socket.id });
  const [msg, setMsg] = useState({ text: '', date: '', user: 'lufemas', id: socket.id })



  return (
    <div className="App">
      <h1>CyberChat</h1>

      <div>

        {/* Left Block */}
        <div>
          <div>
            
          </div>
          <div>


          <TextField
                id="message-box"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
            />
          <Button
              variant="outlined"
              color='primary'
              onClick={() => socket.emit('message', { text: 'message text' })}
            >
              Click Me
            </Button>
          </div>
        </div>

        {/* Right Block */}
        <div>

        </div>

      </div>

    </div>
  );
}
