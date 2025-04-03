import React from "react";
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      label: "Projects",
      icon: <FaFolderOpen size={24} />,
      type: "internal",
      route: "/projects",
    },
    {
      label: "GitHub",
      icon: <FaGithub size={24} />,
      type: "external",
      url: "https://github.com/tonyruizo",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      type: "external",
      url: "https://linkedin.com/in/tonyruizo",
    },
  ];
  return (
    <>
      <div className="py-6">
        <p>
          Student at Western Governors University{" "}
          <a
            className="text-green-200"
            href="https://www.wgu.edu"
            target="_blank"
          >
            (WGU)
          </a>
          , pursuing a degree in{" "}
          <span className="text-green-100">Software Engineering</span>.
          Passionate about building modern web applications and continuously
          learning new technologies.
        </p>
        <p className="py-3">
          Proficient in using tools and frameworks such as{" "}
          <span className="text-blue-100">React</span>,
          <span className="text-blue-100"> Python</span>,{" "}
          <span span className="text-blue-100">
            .NET
          </span>
          ,{" "}
          <span span className="text-blue-100">
            Java,
          </span>{" "}
          as well as cloud platforms like Microsoft{" "}
          <span span className="text-blue-100">
            Azure
          </span>{" "}
          and{" "}
          <span span className="text-blue-100">
            AWS
          </span>
          .
        </p>
      </div>
      <div className="space-y-5">
        {links.map((link) =>
          link.type === "internal" ? (
            <Link
              key={link.label}
              to={link.route}
              className="w-full flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 transition rounded-xl py-3 px-4 font-semibold shadow"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 transition rounded-xl py-3 px-4 font-semibold shadow"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          )
        )}
      </div>
    </>
  );
};

export default Home;
