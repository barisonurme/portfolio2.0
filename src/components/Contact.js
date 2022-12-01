import React, { useEffect } from "react";
import { sendForm } from "../config/firebase";
import useInput from "../hooks/use-input";

import Toast from "./Toaster/Toaster";

const Contact = () => {
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    focusHandler: emailOnFocusHandler,
    isFocused: emailIsFocused,
    isEmpty: isEmailInputEmpty,
    clearInput: clearEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: messageInputIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    focusHandler: messageOnFocusHandler,
    isFocused: messageIsFocused,
    isEmpty: isMessageInputEmpty,
    clearInput: clearMessageInput,
  } = useInput((value) => value.trim() !== "");

  let contactFormIsValid = false;
  if (messageInputIsValid && emailInputIsValid) {
    contactFormIsValid = true;
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    clearEmailInput();
    clearMessageInput();
    if (!contactFormIsValid) {
      new Toast({ text: "Form is empty!" });
      return;
    }
    const response = await sendForm(enteredEmail, enteredMessage);
    if (response) {
      console.log("sended!");
      new Toast({ text: "Message Sended." });
    } else {
      console.log("failed!");
      new Toast({ text: "Failed." });
    }
  };

  return (
    <div
      name="contact"
      className="w-full max-w-5xl   m-auto flex flex-col items-center p-4 md:p-24 text-white"
    >
      <div className="flex text-white  md:text-4xl text-xl flex-wrap justify-center items-center">
        Contact Form
      </div>
      <form onSubmit={formSubmitHandler} className="w-full flex flex-col">
        {/*  */}
        <label
          className={`duration-500 pointer-events-none p-2 pl-8 text-slate-600 
          ${isEmailInputEmpty ? "translate-y-12" : "translate-y-0"} 
          ${!emailIsFocused ? "translate-y-12" : "translate-y-0"} 
          `}
        >
          E-mail
        </label>
        <input
          id="emailInput"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          onFocus={emailOnFocusHandler}
          className="w-full p-4 pl-8 pr-8 border-slate-800 border-2 bg-slate-900/50 rounded-md"
        />

        {/*  */}
        <label
          className={`duration-500 pointer-events-none p-2 pl-8 text-slate-600 
          ${isMessageInputEmpty ? "translate-y-12" : "translate-y-0"} 
          ${!messageIsFocused ? "translate-y-12" : "translate-y-0"} 
          `}
        >
          Message
        </label>
        <textarea
          id="messageArea"
          onChange={messageChangeHandler}
          onBlur={messageInputBlurHandler}
          value={enteredMessage}
          onFocus={messageOnFocusHandler}
          className="w-full p-4 pl-8 pr-8 border-slate-800 border-2 bg-slate-900/50 rounded-md"
        />
        <div className="h-24 w-full flex justify-center items-center p-4">
          <button
            type="submit"
            className={`bg-rose-500 duration-500 p-4 pl-6 pr-6 rounded-md opacity-0 ${
              contactFormIsValid && "opacity-100"
            }`}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
