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
  return (
    <div className="container">
      <div className="form-group">
        <label>Recipients:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter recipients..."
        />
        <EmailSuggestions suggestions={suggestions} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default EmailInput;
