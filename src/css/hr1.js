import React from "react";

const ColoredLine1 = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5
    }}
  />
);
export default function App() {
  return (
    <div>
      <ColoredLine1 color="white" />
    </div>
  );
}