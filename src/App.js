import './App.css';

import Chat from './component/chat/Chat';
import Login from'./component/room/Login'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io('http://localhost:4000');

socket.on("connect", () => {
  console.log('server is connected with client ',socket.id); 

});

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login connect={socket}/>}/>
        <Route path='/chat/:name/:room' element={<Chat connect={socket}/>}/>
        </Routes>
    </Router>
   
  );
}

export default App;
