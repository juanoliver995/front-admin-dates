import useDates from "../hooks/useDates"
import DatePreview from "../components/DatePreview"
const Dates = () => {

    const { dates } = useDates()

    return (
        <>
            <h1 className=" text-4xl font-black">Dates</h1>
            <div>
                {dates.length ? dates.map(date => (
                    <DatePreview date={date} key={date._id} />
                )) : <p className="mt-5 text-center text-gray-600 uppercase">No dates yet</p>}
            </div>
        </>
    )
}

export default Dates