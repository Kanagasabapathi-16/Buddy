import React from "react";

const ColoredLine2 = ({ color }) => (
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
      <ColoredLine2 color="white" />
    </div>
  );
}