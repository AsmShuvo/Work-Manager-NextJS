import React from "react";

const takeTime = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

const page = async () => {
  await takeTime();
  throw new Error("this is an error");
  return <div>this is about page</div>;
};

export default page;
