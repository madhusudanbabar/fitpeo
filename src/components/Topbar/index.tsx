import { faBell, faEnvelope, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const Topbar = () => (
  <div className={styles.topbar}>
    <div className={styles.search}>
      <input placeholder="Search" name="search" className={styles.input} />
      <label htmlFor="search" className={styles.magnifier}>
        <FontAwesomeIcon icon={faSearch} />
      </label>
    </div>
    <div className={styles.icons}>
      <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      <FontAwesomeIcon icon={faSun} className={styles.icon} />
      <div className={styles.active}>
        <FontAwesomeIcon icon={faBell} className={styles.icon} />
        <span className={styles.badge}></span>
      </div>
      <img
        className={styles.profile}
        src="http://unsplash.it/50/50?gravity=center"
      />
    </div>
  </div>
);

export default Topbar;
