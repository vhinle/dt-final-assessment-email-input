import "./style.css";

const EmailSuggestions = ({ suggestions, onSelect }) => {
  //console.log("suggestions", suggestions);
  if (suggestions.length === 0) return null;
  //const emails = ["aaaa@mail.com", "bbbb@mail.com", "ccc@mail.com"];

  return (
    <div>
      <ul className="dropdown">
        {suggestions.map((email, i) => (
          <li className="item" key={i} onClick={() => onSelect(email)}>
            {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailSuggestions;
