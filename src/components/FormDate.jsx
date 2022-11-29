import { useState, useEffect } from "react"
import Alert from "./Alert"
import useDates from "../hooks/useDates"
import { useParams } from "react-router-dom"


const FormDate = ({ date }) => {
    const [id, setId] = useState(null)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')
    const [artist, setArtist] = useState('')
    const [club, setClub] = useState('')
    const [urlTickets, setUrlTickets] = useState('')

    const { showAlert, alert, submitDate, } = useDates()
    const params = useParams()

    useEffect(() => {
        if (date) {
            setId(date._id)
            setDay(date.day)
            setMonth(date.month)
            setProvince(date.province)
            setCountry(date.country)
            setArtist(date.artist)
            setClub(date.club)
            setUrlTickets(date.urlTickets)
        }
    }, [date])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if ([day, month, province, country, club, urlTickets].includes('')) {
            showAlert({
                msg: "all fields except artist are required",
                error: true
            })

            return
        }

        await submitDate({ id, day, month, province, country, artist, club, urlTickets })

        setDay("")
        setMonth("")
        setProvince("")
        setCountry("")
        setArtist("")
        setClub("")
        setUrlTickets("")

    }

    const { msg } = alert


    return (

        <form onSubmit={handleSubmit} className='bg-white py-10 px-5 md:w-1/2 rounded-lg'>

            {
                msg && <Alert alert={alert} />
            }
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='day'
                >Day</label>
                <select
                    id='day'
                    className='w-full mt-2 mb-2 border-2'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                >
                    <option value="">Select Day</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='month'
                >Month</label>
                <select
                    id='month'
                    className='w-full mt-2 mb-2 border-2'
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                >
                    <option value="">Select Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='province'
                >Province</label>
                <input
                    id='province'
                    type="text"
                    className='w-full mt-2 mb-2 border-2'
                    placeholder='Province'
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                />
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='country'
                >Country or City</label>
                <input
                    id='country'
                    type="text"
                    className='w-full mt-2 mb-2 border-2'
                    placeholder='Country o City'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='artist'
                >Artist</label>
                <input
                    id='artist'
                    type="text"
                    className='w-full mt-2 mb-2 border-2'
                    placeholder='Artist'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='club'
                >Club</label>
                <input
                    id='club'
                    type="text"
                    className='w-full mt-2 mb-2 border-2'
                    placeholder='Club'
                    value={club}
                    onChange={(e) => setClub(e.target.value)}
                />
            </div>
            <div>
                <label className='uppercase text-gray-700'
                    htmlFor='urlTickets'
                >UrlTickets</label>
                <input
                    id='urlTickets'
                    type="text"
                    className='w-full mt-2 mb-2 border-2'
                    placeholder='Url Tickets'
                    value={urlTickets}
                    onChange={(e) => setUrlTickets(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value={date ? "Edit Date" : "Create Date"}
                className='w-full uppercase font-bold text-white rounded p-3 bg-sky-600 mt-2 cursor-pointer hover:bg-sky-700 transition-colors'
            />
        </form>

    )
}
export default FormDate