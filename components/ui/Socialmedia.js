import styles from "@/components/ui/Footer.module.css";
import React from "react";

const SocialLink = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank">
        <img
          src={icon}
          alt={`${title} icon`}
          style={{ width: "20px", marginRight: "8px" }}
        />
        {title}
      </a>
    </li>
  );
};

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      url: "https://twitter.com",
      title: "Twitter",
      icon: "../socialmedia/twitter.png",
    },
    {
      url: "https://facebook.com",
      title: "Facebook",
      icon: "../socialmedia/facebook.png",
    },
    {
      url: "https://linkedin.com",
      title: "LinkedIn",
      icon: "../socialmedia/linkedin.png",
    },
    {
      url: "https://instagram.com",
      title: "Instagram",
      icon: "../socialmedia/instagram.png",
    },
  ];
  return (
    <div className={styles.footerLinks}>
      <h3>Follow us</h3>
      <ul className={styles.footerList}>
        {socialMediaLinks.map((link, index) => (
          <SocialLinks
            key={index}
            url={link.url}
            title={link.title}
            icon={link.icon}
          />
        ))}
        {/* TASK - React 1 week 2 */}
        {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
        {/* it should accept the following props */}
        {/* url, title, icon */}
        {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
      </ul>
    </div>
  );
};

export default SocialMedia;
