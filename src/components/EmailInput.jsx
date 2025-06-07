import "./style.css";

const EmailInput = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
    </div>
  );
};

export default EmailInput;
