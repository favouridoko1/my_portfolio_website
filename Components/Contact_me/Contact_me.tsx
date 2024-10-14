import React from "react";

const Contact_me = () => {
  return (
    <section className="flex">
      <form action="" className="gap-4 flex flex-col w-[40%] p-4">
        <input
          type="text"
          placeholder="Your name"
          className="text-md p-2 rounded outline-none text-[#858585]"
        />
        <input
          type="text"
          placeholder="Email"
          className="text-md p-2 rounded outline-none text-[#858585]"
        />
        <textarea
          rows="4"
          cols="50"
          name="comment"
          form="usrform"
          className="text-[#9e9e9e] p-1"
        >
          Enter your message please...
        </textarea>
        <button className="hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-[#fff]">Get in touch</button>
      </form>
      <article className="text-[#fff] p-4">
        <h1 className="-tracking-2 text-2xl">Let's talk for Something special</h1>
      </article>
    </section>
  );
};

export default Contact_me;
