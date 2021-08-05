import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknkqpvg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1>Have a question?</h1>
      <h1>Contact us below!</h1>
      <div className="email">
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="message-box">
        <textarea
          id="message"
          name="message"
          placeholder="Type message here!"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
