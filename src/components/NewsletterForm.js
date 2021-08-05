import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const NewsletterForm = () => {
  const [state, handleSubmit] = useForm("moqykpng");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input type="text" id="name" name="name" placeholder="Name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email"></label>
      <input id="email" type="email" name="email" placeholder="Your Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default NewsletterForm;
