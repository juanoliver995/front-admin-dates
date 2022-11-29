import { useContext } from "react";
import DatesContext from "../context/DatesProvider";

const useDates = () => {
    return useContext(DatesContext)
}

export default useDates