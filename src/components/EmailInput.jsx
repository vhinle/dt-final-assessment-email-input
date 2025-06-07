// Services
import { fetchData } from "../services/fetchData";
import emails from "../data/emails";
// Page Style
import "./style.css";

const EmailInput = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label>Recipients:</label>
        <input type="email" name="email" placeholder="Enter recipients..." />
      </div>
    </div>
  );
};

export default EmailInput;
