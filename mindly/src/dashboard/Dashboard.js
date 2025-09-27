import React, { useState, useEffect } from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    const [username, setUsername] = useState("User");
    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch("https://quotes-api-self.vercel.app/quote")
            .then(response => response.json())
            .then(data => {
                if (data && data.quote) {
                    setQuote(data.quote);
                }
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
            });
    }, []);

    return (
        <div className="dashboard">
            <h1 className="greeting">Welcome back, {username}!</h1>
            <p className="quote">"{quote}"</p>
        </div>
    );
};

export default Dashboard;
