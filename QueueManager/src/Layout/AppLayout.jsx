import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import "../Styles/AppLayout.css";
import Footer from "../UI/Footer";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Navbar />

            <main className="page-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AppLayout;