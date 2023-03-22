import React, { useReducer } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "./navbar";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "changeColor":
      const currentColor = state.color;
      const newColor = !currentColor;
      return { ...state, color: newColor };
    default:
      return state;
  }
}

export default function contador() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: false });

  return (
    <>
      <Navbar />
      <main className={`${styles.main} ${state.color ? styles.bg : ""}`}>
        <span>useReducer</span>
        <div className={styles.container}>
          <button onClick={() => dispatch({ type: "increment" })}>Aumentar</button>
          <button onClick={() => dispatch({ type: "decrement" })}>Diminuir</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
          <button onClick={() => dispatch({ type: "changeColor" })}>Color</button>
        </div>
        <span>{state.count}</span>
      </main>
    </>
  );
}
