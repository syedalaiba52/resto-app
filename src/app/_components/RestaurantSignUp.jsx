import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
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
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm password"
            value={c_password}
            onChange={(event) => setC_password(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Full Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="tel"
            placeholder="Enter Contact No."
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
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
