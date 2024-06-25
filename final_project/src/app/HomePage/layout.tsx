import React, { ReactNode } from "react";
import DefaultLayout from "@/components/DefautLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <DefaultLayout />
      {children}
    </>
  );
};

export default Layout;
