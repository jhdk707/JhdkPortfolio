import React from "react";
import { useState } from "react";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    return name === "email"
      ? setEmail(value)
      : alert(`Please enter valid email`);
  };

  const handleMessageChange = (e) => {
    e.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    return name === "message"
      ? setMessage(value)
      : alert(`Please enter a message`);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    console.log(firstName, lastName, email, message);

    var input = [];
    input.push(firstName);
    input.push(lastName);
    input.push(email);
    input.push(message);

    console.log("input", input);
    localStorage.setItem("contact", input);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    alert(`Thanks for your message ${firstName}! I'll be in touch!`);
  };

  return (
    <div className="container py-4">
      <h2 className="h2 text-center" id="Contact-Me">
        Contact Me
      </h2>
      <p class="h3 text-center">
        Lets connect and talk about code, music, food, movies, cool ocean
        creatures or whatever you like!{" "}
      </p>

      <form>
        <div className="row">
          <div className="col">
            <label for="firstName"></label>
            <input
              value={firstName}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <label for="lastName"></label>
            <input
              value={lastName}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col">
            <label for="email"></label>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group form-block">
            <label for="message"></label>

            <input
              value={message}
              onChange={handleMessageChange}
              type="text"
              className="form-control"
              name="message"
              id="message"
              placeholder="Enter a message!"
            />
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-dark btn-outline-light btn-sm col-2 btn-center mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
