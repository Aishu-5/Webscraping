import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ChatbotPage from './components/ChatbotPage';
import logo from './assets/logo.jpg'; 
import './App.css'; 


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Function to render the correct page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegistrationPage />;
        case 'chatbot': // Add new case for Chatbot
        return <ChatbotPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
       <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
        <div className="nav-buttons">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('login')}>Login</button>
          <button onClick={() => setCurrentPage('register')}>Register</button>
          <button onClick={() => setCurrentPage('chatbot')}>Chat</button>
        </div>
      </nav>
      <div>
        {renderPage()}  {/* Render the current page */}
      </div>
    </div>
  );
}

export default App;