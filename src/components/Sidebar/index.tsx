import {
  faArrowRightFromBracket,
  faBagShopping,
  faChartColumn,
  faClipboardCheck,
  faFireExtinguisher,
  faHome,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";

const icons = [
  faHome,
  faChartColumn,
  faClipboardCheck,
  faWallet,
  faBagShopping,
];

const Sidebar = () => (
  <nav className={styles.nav}>
    <ul className={styles.menu}>
      {icons.map((icon) => (
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      ))}
    </ul>
    <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icon} />
  </nav>
);

export default Sidebar;
