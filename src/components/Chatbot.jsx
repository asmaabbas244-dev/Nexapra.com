import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 I am the NexAppra AI Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMsg = { sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev, 
        { sender: 'bot', text: "That sounds like a great project! Our team specializes in building scalable solutions just like that. Feel free to check out our Services page or submit a formal request via the Contact page." }
      ]);
    }, 1500);
  };

  return (
    <div className="chatbot-wrapper">
      
      {/* Floating Toggle Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </div>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <Bot size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="chatbot-title">NexAppra AI</div>
            <div className="chatbot-status">Online</div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ color: '#fff', opacity: 0.6, cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-msg bot">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            className="chatbot-input" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chatbot-send-btn" disabled={!inputValue.trim()}>
            <Send size={18} strokeWidth={2.5} />
          </button>
        </form>

      </div>
    </div>
  );
}
