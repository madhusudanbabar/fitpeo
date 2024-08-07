import { faBowlFood, faCaretRight, faCrosshairs, faHome, faPlateWheat, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Goals = () => {
    const entries = [
        { icon: faCrosshairs, label: "Goals", color: "red" },
        { icon: faBowlFood, label: "Popular Dishes", color: "blue" },
        { icon: faPlateWheat, label: "Menus", color: "cyan" }
    ]

    return <div className="flex flex-col justify-around p-4 bg-zinc-800 rounded-md">
        {entries.map(entry =>
            <div className="flex items-center p-4 gap-4 justify-between">
                <div className="flex items-center">
                    <FontAwesomeIcon className={`mr-4 rounded-full size-7 p-4 bg-${entry.color}-300/90`} icon={entry.icon} color={entry.color} />
                    <b>{entry.label}</b>
                </div>
                <span className="grid place-items-center rounded-full bg-slate-600 size-8">
                    <FontAwesomeIcon icon={faCaretRight} color="" />
                </span>
            </div>
        )}
    </div>
}

export default Goals