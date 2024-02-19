import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function WebSocket() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Replace 'ws://localhost:3000' with the URL of your WebSocket server
        const socket = io('ws://localhost:3000');

        socket.on('message', data => {
            setMessage(data);
        });

        // Cleanup function to close the socket connection
        return () => {
            socket.disconnect();
        };
    }, []); // Empty dependency means this effect will run once

    return (
        <div>
            <p>Message from WebSocket server: {message}</p>
        </div>
    );
}

export default WebSocket;

//

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const ExampleComponent = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const socket = io('https://api.example.com');

//     socket.on('message', data => {
//       setMessage(data);
//     });

//     // Cleanup function to close the socket connection
//     return () => {
//       socket.disconnect();
//     };
//   }, []); // Empty dependency array means this effect will only run once

//   return <div>{message}</div>;
// };

// export default ExampleComponent;
