import { useParams } from "react-router-dom"
import useDates from "../hooks/useDates"
import { useEffect } from "react"
import FormDate from "../components/FormDate"
import Loader from "../components/Loader"
const EditDate = () => {
    const params = useParams()
    const { getDate, date, loading, deleteDate } = useDates()

    useEffect(() => {
        getDate(params.id)
    }, [])

    const { day, month, club, _id } = date
    const handleDelete = () => {
        if (confirm("you want to delete this date")) {
            deleteDate(_id)
        }
    }


    return (
        <>
            <div className=" flex justify-between">
                <h1 className=" text-4xl font-black">Edit Date: {day},{month} {club}</h1>
                <button onClick={handleDelete} className="bg-red-600 px-2 py-1 text-black font-bold rounded hover:bg-red-700 transition-colors">Delete Proyect</button>
            </div>
            <div className='mt-10 flex justify-center'>
                <FormDate date={date} />
            </div>
        </>
    )
}

export default EditDate