import React from "react";

console.log("Hello from Elysia.tsx");
const Elysia = (props: { name: string }) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  )
}

export default Elysia;