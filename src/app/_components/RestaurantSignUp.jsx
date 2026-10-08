const RestaurantSignUp = () => {
  return (
    <>
      <h2>SignUp</h2>

       <div>
        <div className="input-wrapper">
          <input className="input-field" type="email" placeholder="Enter email" />
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Enter password" />
        </div>

        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  )
}

export default RestaurantSignUp;
