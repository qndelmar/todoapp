import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown19, faArrowDownAZ, faArrowUpAZ} from "@fortawesome/free-solid-svg-icons";
import AddTask from "@/components/ToDoComponents/AddTask";
import {ISortPanel} from "@/interfaces/ISortPanel";

const SortPanel:FC<ISortPanel> = ({sortedOption, setSortedOption}) => {
    return (
        <div className="flex items-center flex-col sm:flex-row">
            <div className="sm:mr-5 mt-2 sm:mt-0 flex items-center">
                <FontAwesomeIcon onClick={() => setSortedOption(0)} icon={faArrowUpAZ} className={`dark:text-gray-200 text-[#02021c] transition-all duration-750 text-3xl mr-3 ${sortedOption === 0 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
                <FontAwesomeIcon onClick={() => setSortedOption(1)} icon={faArrowDownAZ} className={`dark:text-gray-200 text-[#02021c] transition-all mr-3 duration-750 text-3xl ${sortedOption === 1 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
                <FontAwesomeIcon onClick={() => setSortedOption(2)} icon={faArrowDown19} className={`dark:text-gray-200 text-[#02021c] transition-all duration-750 text-3xl ${sortedOption === 2 ? 'bg-blue-800/[0.3] rounded p-1' : ''}`}/>
            </div>
            <AddTask/>
        </div>
    );
};

export default SortPanel;