import React, { useState } from 'react';
import axios from 'axios';

const Chatbox = () => {
    const [query, setQuery] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSend = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/chatbot?query=${query}`);
        setResponses([...responses, { query, response: res.data.message }]);
        setQuery('');
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Ask the chatbot..."
            />
            <button onClick={handleSend}>Send</button>
            <div>
                {responses.map((item, index) => (
                    <p key={index}>
                        <strong>Query:</strong> {item.query} <br />
                        <strong>Response:</strong> {item.response}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Chatbox;
