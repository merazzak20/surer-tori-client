import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const HomeLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <div className="min-h-[calc(100vh-170px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
