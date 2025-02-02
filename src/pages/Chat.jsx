import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResponse = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        { inputs: message },
        {
          headers: { Authorization: `Bearer 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` },
        }
      );
      return response.data[0]?.generated_text || "No response";
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Error fetching response.";
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    
    const botResponse = await fetchResponse(input);
    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>
            <strong>{msg.role === "user" ? "You:" : "Bot:"}</strong> {msg.text}
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
