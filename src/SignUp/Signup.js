
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Signup.css';

import React, { useState } from 'react';

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here
    handleSignup(email, password);
  };

  return (
    <div>
      <Navbar />
      <div class="SignupContainer">
        <div class="firstpart">
          <p class="heading">Register</p>
          <hr></hr><br></br>
          <form onSubmit={handleSubmit}>
            Name:<br></br>
            <input type="text" id="input" placeholder='Name'></input>
            <br></br><br></br>
            Email:<br></br>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="input" /><br></br><br></br>
            Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required id="input"
            /><br></br><br></br>
            Confirm Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required id="input"
            /><br></br><br></br>
            Role:
            <div class="domain">
              <div className="radio">
                <label>
                  <input type="radio" value="Broker" />
                  Broker
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="client" />
                  client
                </label>
              </div>
            </div><br></br>
            <button type="submit" id="submitbutton">Register</button>
            <p class="account">Already have an account? <Link class="clickhere" to="/Login">Click here</Link></p>
          </form>
          </div>
        <div>
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="side iamge" id="secondpartimage"></img>
        </div>

      </div>
    </div>
  );
};

export default Signup;
