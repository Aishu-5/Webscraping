import React, { useState } from 'react';
import '../styles/ChatbotPage.css'; // Optional: Style for the chatbot page

function ChatbotPage() {
    const [messages, setMessages] = useState([]); // Store chat messages
    const [userInput, setUserInput] = useState(''); // Store user input

    // Handle user input submission
    const handleSendMessage = () => {
        if (userInput.trim()) {
            // Add user's message to chat
            const newMessages = [...messages, { sender: 'user', text: userInput }];
            setMessages(newMessages);
            // Clear input
            setUserInput('');

            // Generate a bot response after a slight delay (imitating processing)
            setTimeout(() => {
                const botResponse = getBotResponse(userInput); // Get bot response
                setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
            }, 1000);
        }
    };

    // Simulated bot response (this can be replaced by an actual AI model or API)
    const getBotResponse = (query) => {
        if (query.toLowerCase().includes('hello')) {
            return 'Hello! How can I assist you today?';
        } else if (query.toLowerCase().includes('scrape')) {
            return 'You can scrape data using various techniques like HTML parsing or API calls. How would you like to proceed?';
        } else {
            return 'Sorry, I am not sure how to answer that. Could you try asking differently?';
        }
    };

    return (
        <div className="chatbot-page">
            <h1>Chat with Us</h1>
            <div className="chat-window">
                {/* Chat messages */}
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>

                {/* Input section */}
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatbotPage;
