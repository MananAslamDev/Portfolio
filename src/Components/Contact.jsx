import React from "react";
import Button from "./Button";
import HeaderLogo from "../assets/HeaderLogo.png";

const Link = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-md border outline-none transition duration-200 ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-md border outline-none transition duration-200 ${className}`}
      {...props}
    />
  );
};

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-gradient-to-b from-[#0f172a] to-[#0a0f5c] rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl text-[#ffffff] font-bold mb-8">CONTACT</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-[#ffffff] font-bold mb-4">
              Drop Me a Message
            </h3>
            <p className="text-gray-300 mb-6">
              If you have any questions or want to work together, feel free to
              contact me. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-2-[#fff]">
                  <span className="text-sm">📞</span>
                </div>
                <span>+92 323 4594767</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-2-[#fff]">
                  <span className="text-sm">✉️</span>
                </div>
                <span>mananaslamdev@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-2-[#fff]">
                  <span className="text-sm">📍</span>
                </div>
                <span>Lahore, Pakistan.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#ffffff] p-6 rounded-lg">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa]"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa]"
              />
              <Textarea
                placeholder="Message"
                className="bg-[#ffffff] border-[#3b82f6] focus:border-[#60a5fa] min-h-[120px]"
              />
              <Button
                text={"Send"}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white"
              />
            </form>
          </div>
        </div>
      </div>
      <footer className="container mx-auto py-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={HeaderLogo}
              alt="MA LOGO"
              className="mr-[15px] w-[60px] h-auto"
            />
            <span className="ml-2 text-sm text-gray-400">
              © {year} Portfolio. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#00bcd4] transition-colors"
            >
              <span className="text-sm">f</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#00bcd4] transition-colors"
            >
              <span className="text-sm">t</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#00bcd4] transition-colors"
            >
              <span className="text-sm">in</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#00bcd4] transition-colors"
            >
              <span className="text-sm">ig</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
