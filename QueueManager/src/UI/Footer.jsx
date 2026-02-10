import "../Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                © {new Date().getFullYear()} Your Queue — Making clinic visits calmer.
            </p>
        </footer>
    );
};

export default Footer;