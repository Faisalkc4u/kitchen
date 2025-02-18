"use client";

import { ReactNode, MouseEventHandler } from "react";
import "./radius-button.css";
interface RadiusButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function RadiusButton({
  children,
  className,
  onClick,
}: RadiusButtonProps) {
  return (
    <button onClick={onClick} className={`radius-button ${className}`}>
      {children}
    </button>
  );
}
