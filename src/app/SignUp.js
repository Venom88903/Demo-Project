"use client"
import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., using API calls).
  };

  return (
    <form onSubmit={handleSignUp} >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="name"
        placeholder="Fast Name"
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type="name"
        placeholder="Last Name"
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;