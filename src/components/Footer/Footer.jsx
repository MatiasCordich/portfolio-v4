import "./footer.css";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Portfolio, Version 4.0 (26 Ene 25)</p>
      <p>{actualYear}</p>
    </footer>
  );
};

export default Footer;
