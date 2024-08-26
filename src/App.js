import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });

  const updateNameField = (e) => setName(e.target.value);
  const updateEmailField = (e) => setEmail(e.target.value);
  const updateInterestField = (e) => {
    setInterests({ ...interests, [e.target.id]: e.target.checked });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const displayForm = (
    <form title="signup" onSubmit={submitForm}>
      <h3>Newsletter Sign Up</h3>
      <div>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="name"
          onChange={updateNameField}  
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email address</label>
        <input
          type="text"
          value={email}
          id="email"
          placeholder="email address"
          onChange={updateEmailField}
        />
      </div>
      <div>
        <p>Select areas of interest:</p>
        {["interest1", "interest2", "interest3"].map((interest) => (
          <div key={interest}>
            <input
              type="checkbox"
              id={interest}
              checked={interests[interest]}
              onChange={updateInterestField}
            />
            <label htmlFor={interest}>{`Interest ${interest.slice(-1)}`}</label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const displayMessage = (
    <div>
      <p>Thanks {name}! You are signed up for these newsletters:</p>
      <ul>
        {Object.entries(interests).map(([key, value]) => 
          value ? <li key={key}>{`Interest ${key.slice(-1)}`}</li> : null
        )}
      </ul>
    </div>
  );

  return (
    <main>
      <h1>Hi, I'm Too Complicated</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {showMessage ? displayMessage : displayForm}
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;