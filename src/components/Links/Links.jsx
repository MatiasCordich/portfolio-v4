import React from "react";
import { FileTextIcon, LinkedinIcon, GithubIcon, MailIcon } from "raster-react";
import "./links.css";
const Links = () => {
  return (
    <ul className="links">
      <li className="link-box">
        <a href="#">
          <FileTextIcon size={70} color="#000" strokeWidth={0.25} radius={1} />
          <p className="link-box_label">Curriculum</p>
        </a>
      </li>
      <li className="link-box">
        <a href="https://www.linkedin.com/in/matiassiocordich/" target="_blank">
          <LinkedinIcon size={70} color="#000" strokeWidth={0.25} radius={1} />
          <p className="link-box_label">LikedIn</p>
        </a>
      </li>
      <li className="link-box">
        <a href="https://github.com/MatiasCordich" target="_blank">
          <GithubIcon size={70} color="#000"  strokeWidth={0.25} radius={1} />
          <p className="link-box_label">Github</p>
        </a>
      </li>
      <li className="link-box">
        <a href="mailto:m.scordich@gmail.com">
          <MailIcon size={70} color="#000"  strokeWidth={0.25} radius={1} />
          <p className="link-box_label">Email</p>
        </a>
      </li>
    </ul>
  );
};

export default Links;
