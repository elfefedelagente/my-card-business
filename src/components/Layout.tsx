import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>Header Section</header>
      <main>{children}</main>
      <footer>Footer Section</footer>
    </div>
  );
};

export default Layout;
