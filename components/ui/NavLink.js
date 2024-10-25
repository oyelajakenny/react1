
const NavLink = ({ title, link, isActive, onClick }) => {
  return (
    <li>
      <a
        href={link}
        onClick={onClick}
        style={{
          color: isActive ? "grey" : "white",
          textDecoration: isActive ? "underline" : "none",
          padding: "10px",
        }}
      >
        {title}
      </a>
    </li>
  );
};

export default NavLink;
