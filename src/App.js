import "./styles.css";
import { useState } from "react";

const items = [
  {
    title: "Multa",
    date: "25-06-2022"
  },
  {
    title: "Afiliación Catalina",
    date: "30-06-2022"
  },
  {
    title: "Reembolso Isapre",
    date: "30-06-2022"
  }
];

export default function App() {
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div class="main">
      <div class="randar-box">
        <input
          type="checkbox"
          class="randar-checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <div class="randar-top"></div>
        <div class="randar-top-body"></div>
        <div class="randar-content">
          {items.map((item) => (
            <div class="rander-ball">{item.title}</div>
          ))}
          <div class="rander-pos"></div>
        </div>
      </div>
    </div>
  );
}
