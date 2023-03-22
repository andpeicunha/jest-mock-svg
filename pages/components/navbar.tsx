import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  value: string;
  onClick?: () => void;
  ref?: string;
}

function MyButton(props: ButtonProps) {
  return (
    <a href={props.href} onClick={props.onClick} ref={props.ref}>
      {props.value}
    </a>
  );
}

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <MyButton href="/" value="Home" />
        </li>
        <li>
          <MyButton href="/components/contador" value="Contador" />
        </li>
        <li>
          <MyButton href="/components/cronometro" value="Cronometro" />
        </li>
        <li>
          <MyButton href="/components/lista" value="Lista" />
        </li>
      </ul>
    </div>
  );
}
