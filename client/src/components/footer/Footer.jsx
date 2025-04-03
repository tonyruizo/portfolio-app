import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="text-center py-4 text-sm text-gray-400">
        Copyright &copy; {currentYear} - Tonyruizo{" "}
      </div>
    </footer>
  );
};

export default Footer;
