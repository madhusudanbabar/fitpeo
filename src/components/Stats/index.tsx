import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";

export type StatsProps = {
  icon: IconDefinition;
  label: string;
  quantity: string;
  delta: number;
  color: string;
};

const Stats = (props: StatsProps) => {
  return (
    <div className={styles.stat}>
      <div className={`${styles.icon} bg-${props.color}-500/20`}>
        <FontAwesomeIcon icon={props.icon} color={props.color} />
      </div>
      <h3 className="text-sm my-2">{props.label}</h3>
      <div className="flex justify-between">
        <span className="font-bold text-xl">{props.quantity}</span>
        <span
          className={`font-bold text-xl ${
            props.delta > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {props.delta}
        </span>
      </div>
    </div>
  );
};

export default Stats;
