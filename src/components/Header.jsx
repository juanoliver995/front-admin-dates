import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useDates from "../hooks/useDates"


const Header = () => {

    const { logOutAuth } = useAuth()
    const { logOutDates } = useDates()

    const handleLogOut = () => {
        logOutAuth()
        logOutDates()
        localStorage.removeItem("token")
    }
    return (
        <header className='px-4 py-5 bg-white border-b'>
            <div className='md:flex md:justify-between items-center'>
                <h2 className='text-center text-4xl text-sky-600 font-black mb-5 md:mb-0'>Admin Dates</h2>
                <div className="flex flex-col  items-center md:flex-row gap-4">
                    <Link to="/dates" className="font-bold uppercase" >Dates</Link>
                    <button
                        className="text-white text-sm bg-sky-600 p-2 rounded-md uppercase font-bold"
                        type="button"
                        onClick={handleLogOut}
                    >Log Out</button>
                </div>
            </div>
        </header>
    )
}

export default Header