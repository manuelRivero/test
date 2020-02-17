import React from "react";
import styles from "./reward.module.css";


export default function Reward(props) {
  let color = styles[props.name.toUpperCase()];

  const clickHandler = e => {
    if (!props.available) {
      return null;
    }
    return props.click(props.name);
  };
  return (
    <>
      <div
        className={[styles.Reward, props.selected ? styles.Selected : " "].join(
          " "
        )}
        onClick={clickHandler}
      >
        <div
          className={[
            styles.Circle,
            props.available ? color : styles.Disabled
          ].join(" ")}
        ></div>
        <p style={{textTransform:props.name === "bd" ? "lowercase" : "uppercase"}}><strong>{props.name === "bd" ? "Cumpleaños" : props.name}</strong></p>
      </div>
    </>
  );
}
