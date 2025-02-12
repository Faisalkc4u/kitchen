import { ReactNode } from "react";
import "./BodyContent.css";
interface BodyContentProps {
  children: ReactNode;
  className?: string;
}

export const BodyContent = ({ children, className }: BodyContentProps) => {
  return <div className={`app-body ${className}`}>{children}</div>;
};
