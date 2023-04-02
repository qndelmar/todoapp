import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown19, faArrowDownAZ, faArrowUpAZ} from "@fortawesome/free-solid-svg-icons";
import AddTask from "@/components/ToDoComponents/AddTask";
import {ISortPanel} from "@/interfaces/ISortPanel";

const SortPanel:FC<ISortPanel> = ({sortedOption, setSortedOption}) => {
    return (
        <div className="flex items-center">
            <div className="mr-5 flex items-center">
                <FontAwesomeIcon onClick={() => setSortedOption(0)} icon={faArrowUpAZ} className={`text-gray-200 transition-all duration-750 text-3xl mr-3 ${sortedOption === 0 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
                <FontAwesomeIcon onClick={() => setSortedOption(1)} icon={faArrowDownAZ} className={`text-gray-200 transition-all mr-3 duration-750 text-3xl ${sortedOption === 1 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
                <FontAwesomeIcon onClick={() => setSortedOption(2)} icon={faArrowDown19} className={`text-gray-200 transition-all duration-750 text-3xl ${sortedOption === 2 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
            </div>
            <AddTask/>
        </div>
    );
};

export default SortPanel;