import React from "react";

const SubmissionHeader = () => {
  return (
    <div>
      <div className="relative mb-10 h-100 w-full overflow-hidden  md:h-100">
        <img
          src="https://res.cloudinary.com/dqlqxcwqr/image/upload/v1767590972/idea21_r4dpdm.jpg"
          alt="Submit Idea"
          className="absolute inset-0 h-full  w-full object-cover"
        />
        {/* <div className="absolute left-0 top-0 h-full md:w-15 w-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="absolute right-0 top-0 h-full md:w-15 w-10 bg-gradient-to-l from-[var(--bg)] to-transparent" /> */}
        <div className="absolute top-0 md:h-20 h-15 w-full bg-gradient-to-b from-[var(--bg)] to-transparent" />
        <div className="absolute bottom-0  h-20 w-full bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-start justify-center pl-10 md:pl-20 ">
          <h1 className="text-3xl font-bold text-white text-start sm:text-4xl oswald md:text-5xl">
            Submit your <br /> Idea
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SubmissionHeader;
