const RestaurantLogin = () => {
  return (
    <>
      <h2>Login</h2>

      <div>
        <div className="input-wrapper">
          <input className="input-field" type="email" placeholder="Enter email" />
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Enter password" />
        </div>

         <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Confirm password" />
        </div>

         <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter Restaurant Name" />
        </div>

         <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter City" />
        </div>

         <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter Full Address" />
        </div>

         <div className="input-wrapper">
          <input className="input-field" type="tel" placeholder="Enter Contact No." />
        </div>

        <div className="input-wrapper">
          <button className="button">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
