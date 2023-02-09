import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Profile from "/public/images/profile.jpg";

const index = () => {
  return (
    <Container className=" flex items-center justify-center flex-col space-y-6 max-w-4xl w-full h-full bg-white border border-gray-100 px-14 rounded-2xl py-14">
      <Image
        src={Profile}
        alt="Ken Mwangi"
        className="rounded-full grayscale"
        width={100}
        placeholder="blur"
        priority
      />
      <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-relaxed tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
        Ken Mwangi
      </h3>
      <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
        Full stack software developer, open-source contributor and technical
        writer
      </p>
    </Container>
  );
};

export default index;

// ☝️ Thats me, handsome right?! 😋️.
