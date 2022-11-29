import { Link } from "react-router-dom"

const DatePreview = ({ date }) => {
    const { _id, day, month, club, country, province, artist } = date


    return (
        <div div className=" bg-white rounded-md shadow p-5 mt-3 flex flex-col justify-center md:flex-row md:justify-between items-center">
            <div className="flex flex-col md:w-full items-center md:items-start">
                <h3 className="text-xl font-bold">{day} {month}</h3>
                <h4 className="text-lg">{country}, {province}</h4>
            </div>
            <div className="flex flex-col md:w-full md:items-center">
                <h3 className="text-xl font-bold">{club}</h3>
            </div>
            <div className="flex flex-col md:w-full items-center md:items-end gap-1">
                <Link to={`edit-date/${_id}`} className="bg-sky-600 px-2 py-1 text-black font-bold rounded hover:bg-sky-700 transition-colors">Edit Date</Link>
            </div>
        </div>
    )
}

export default DatePreview