import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
/* import HeaderTest from '../components/HeaderTest/HeaderTest' */

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
