import React from "react";

const Contact_me = () => {
  return (
    <section className="sm:flex justify-center ">
      <form action="" className="gap-4 flex flex-col sm:w-[40%] p-4">
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
          rows={4}
          cols={50}
          name="comment"
          form="usrform"
          className="text-[#9e9e9e] p-1"
        >
          Enter your message please...
        </textarea>
        <button className="hover:bg-[#f8d95e] bg-[#FACC15] p-2 w-fit rounded active:bg-[#e9c537] text-[#fff]">
          Get in touch
        </button>
      </form>
      <article className="text-[#fff] p-4 flex flex-col gap-3">
        <h1 className="-tracking-2 text-2xl tracking-widest">
          Let's <span>talk</span> for Something special
        </h1>
        <p className="text-sm">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and <br />
          memorable interactive experiences
        </p>
        <ul className="flex flex-col gap-1">
          <li className="text-[#FACC15]">ojodomofavour2004@gmail.com</li>
          {/* <br /> */}
          <li>
            <span className="text-[#FACC15]">( +234 )</span> 9059852978
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contact_me;
