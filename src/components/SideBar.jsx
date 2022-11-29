import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
const SideBar = () => {

    const { auth } = useAuth()

    return (
        <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10">
            <p className="text-xl font-bold text-center">Hello: {auth.name}</p>
            <Link to="create-date"
                className="bg-sky-600 uppercase font-bold w-full p-3 block text-white mt-5 text-center rounded-lg"
            >Create Date</Link>
        </aside>
    )
}

export default SideBar