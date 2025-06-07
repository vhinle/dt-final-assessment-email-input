// React Imports
import React, { useEffect, useState } from "react";

// Data and Service
import { fetchData } from "../services/fetchData";
import { emails } from "../data/emails";
import EmailSuggestions from "./EmailSuggestions";

// Page Style
import "./style.css";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allEmails, setAllEmails] = useState([]);
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    fetchData(emails).then((data) => setAllEmails(data));
  }, []);

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input change
  const handleChange = (event) => {
    const input = event.target.value;
    setEmail(input);

    // get suggestions based on input
    if (input.trim().length > 0) {
      const filteredEmails = allEmails.filter((emails) =>
        emails.toLowerCase().startsWith(input.toLowerCase())
      );

      setSuggestions(filteredEmails);
    } else {
      // Clear for next input
      setSuggestions([]);
    }
  };

  const handleSelect = (selectedEmail) => {
    setEmail(selectedEmail);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (email.trim() === "") return;
      // Add email to the list
      if (!emailList.includes(email)) {
        setEmailList([...emailList, email]);
      }
     
      setEmail(""); // Clear input field
      setSuggestions([]); // Clear suggestions
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>Recipients:</label>
        <div className="email-list">
          {emailList.map((email, index) => (
            <span key={index} className="email-item">
              {email}
              <button
                className="remove-btn"
                onClick={() => {
                  setEmailList(emailList.filter((e) => e !== email));
                }}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter recipients..."
        />
        <EmailSuggestions suggestions={suggestions} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default EmailInput;
