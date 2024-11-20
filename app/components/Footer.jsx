const Footer = () => {
  return (
    <footer className="py-12 bg-accent">
      <div className="container text-xl lg:text-2xl">
        &copy; {new Date().getFullYear()} NmaiTech | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
