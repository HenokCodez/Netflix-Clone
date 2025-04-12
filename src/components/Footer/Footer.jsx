import React from "react";
import FooterStyles from "../Footer/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className={FooterStyles.footerContainer}>
      <ul>
        <ul className={FooterStyles.social}>
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <YouTubeIcon />
            </a>
          </li>
        </ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notice</li>
        <li>Service Code</li>
        <div> &copy; 1997 -2025 Netflix, Inc.</div>
      </ul>
      <ul>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preference</li>
      </ul>
      <ul>
        <li>Gift Card</li>
        <li>Term Of Use</li>
        <li>Corporate Information</li>
      </ul>
      <ul>
        <li> Media Center</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}
export default Footer;
