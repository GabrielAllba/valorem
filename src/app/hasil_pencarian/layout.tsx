import Footer from "../components/user/footer";
import NavigationBar from "../components/user/navigation_bar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
