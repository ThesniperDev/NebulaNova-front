import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const UserLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="user-layout">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserLayout;