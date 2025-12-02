// dependencies
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

// styles
import styles from "./header.module.scss";

// Create a strongly-typed array for social icons
interface SocialLink {
  href: string;
  icon: any; // FontAwesomeIcon type
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/NHartMusic",
    icon: faSquareGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/nhartmusic/",
    icon: faSquareLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/nhiacrkt/",
    icon: faSquareInstagram,
    label: "Instagram",
  },
];

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link to="/music" className={styles.header_link}>
          Music
        </Link>
        <Link to="/tech" className={styles.header_link}>
          Tech
        </Link>
        <Link to="/writing" className={styles.header_link}>
          Writing
        </Link>
      </div>

      <div className={styles.header_center}>
        <Link to="/" className={styles.headerLink}>
          △
        </Link>
      </div>

      <div className={styles.header_right}>
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.headerLink}
            aria-label={label}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
