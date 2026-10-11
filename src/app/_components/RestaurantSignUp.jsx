import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [c_password, setC_password] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    if (password !== c_password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }

    if (
      !email ||
      !password ||
      !c_password ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    console.log(email, password, c_password, name, city, address, contact);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });

    response = await response.json();
    console.log(response);
    if (response.success) {
      console.log(response);

      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));

      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h2>SignUp</h2>

      <div>
        {/* email */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {error && !email && (
            <span className="input-error">Please enter valid email</span>
          )}
        </div>

        {/* password */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && password && c_password && (
            <span className="input-error">
              Password and Confirm password not match
            </span>
          )}

          {error && !password && (
            <span className="input-error">Please enter valid password</span>
          )}
        </div>

        {/* confirm password */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm password"
            value={c_password}
            onChange={(event) => setC_password(event.target.value)}
          />
          {passwordError && password && c_password && (
            <span className="input-error">
              Password and Confirm password not match
            </span>
          )}

          {error && !c_password && (
            <span className="input-error">
              Please enter valid confirm password
            </span>
          )}
        </div>

        {/* Restaurant name */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {error && !name && (
            <span className="input-error">Please enter valid name</span>
          )}
        </div>

        {/* City */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          {error && !city && (
            <span className="input-error">Please enter valid city</span>
          )}
        </div>

        {/* location */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Full Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {error && !address && (
            <span className="input-error">Please enter valid address</span>
          )}
        </div>

        {/* contact No. */}
        <div className="input-wrapper">
          <input
            className="input-field"
            type="tel"
            placeholder="Enter Contact No."
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
          {error && !contact && (
            <span className="input-error">Please enter valid contact</span>
          )}
        </div>

        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
