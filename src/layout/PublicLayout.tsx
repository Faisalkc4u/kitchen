import { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <div>layout</div>
      {children}
    </div>
  );
};
