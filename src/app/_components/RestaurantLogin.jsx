const RestaurantLogin = () => {
  return (
    <>
      <h2>Login</h2>

      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="Enter email"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
