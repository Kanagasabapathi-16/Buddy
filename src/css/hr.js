import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2
    }}
  />
);
export default function App() {
  return (
    <div>
      <ColoredLine color="white" />
    </div>
  );
}