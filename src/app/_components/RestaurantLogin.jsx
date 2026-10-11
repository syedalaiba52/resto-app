import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handleLogin = () => {
    console.log(email, password);

    if (!email || !password) {
      setError(true);
      // return false;
    } else {
      setError(false);
    }
  };
  return (
    <>
      <h2>Login</h2>

      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {error && !email && (
            <span className="input-error">Please enter valid email</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {error && !password && (
            <span className="input-error">Please enter valid password</span>
          )}
        </div>

        <div className="input-wrapper">
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
