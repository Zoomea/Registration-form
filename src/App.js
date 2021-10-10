import './App.css';
import React, { useState } from 'react';
import './index.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  // the state of the register button and show success message if submitted successfully
  const [submitted, setSubmitted] = useState(false);

  // the state of whether all fields are filled
  const [valid, setValid] = useState(false);

  // check whether the values are valid when submitted
  const handleSubmit = (e) => {
    // the next line is to stop the refresh from happening when we don't click
    e.preventDefault();
    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }else{
      setValid(false)
    }
    setSubmitted(true);
  }

  // the function to update the first name value from user's input 
  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  return (
    <div class="container">
      <form class="registration-form clearfix" onSubmit={handleSubmit}>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && <span id="email-error">Please enter an email</span>}

        <button class="form-field">Register</button>

        {submitted && valid && <div id='success-message'>Success! Thank you for registering</div>}
      </form>
    </div>
  )
}

export default App;



