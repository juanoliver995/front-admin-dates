import { useState, createContext, useEffect } from "react";
import clientAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const DatesContext = createContext()

const DatesProvider = ({ children }) => {

    const [dates, setDates] = useState([])
    const [date, setDate] = useState({})
    const [alert, setAlert] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const { auth } = useAuth()

    useEffect(() => {
        const getDates = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clientAxios("/dates", config)
                console.log(data)
                setDates(data)

            } catch (error) {
                console.log(error)
            } finally {
                loading(false)
            }
        }

        getDates()
    }, [auth])

    const showAlert = (alert) => {
        setAlert(alert)

        setTimeout(() => {
            setAlert({})
        }, 5000)
    }

    const submitDate = async (date) => {
        if (date.id) {
            await editDate(date)
        } else {
            await newDate(date)
        }
    }

    const editDate = async (date) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.put(`/dates/${date.id}`, date, config)

            const dateUpdated = dates.map(date => date._id === data._id ? data : date)
            setDates(dateUpdated)
            setAlert({
                msg: "Date updated successfully",
                error: false
            })
            setTimeout(() => {
                setAlert({})
                navigate("/dates")
            }, 3000)
        } catch (error) {
            console.log(error)
        } finally {
            loading(false)
        }
    }

    const newDate = async (date) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.post("/dates", date, config)
            setDates([...dates, data])
            setAlert({
                msg: "Date created successfully",
                error: false
            })
            setTimeout(() => {
                setAlert({})
                navigate("/dates")
            }, 3000)
        } catch (error) {
            console.log(error)
        } finally {
            loading(false)
        }
    }

    const getDate = async (id) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios(`/dates/${id}`, config)
            setDate(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            loading(false)
        }
    }

    const deleteDate = async (id) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.delete(`/dates/${id}`, config)

            const dateUpdated = dates.filter(date => date._id !== id)
            setDates(dateUpdated)
            setAlert({
                msg: data.msg,
                error: false
            })
            setTimeout(() => {
                setAlert({})
                navigate("/dates")
            }, 3000)
        } catch (error) {
            console.log(error)
        } finally {
            loading(false)
        }
    }

    const logOutDates = () => {
        setDates([])
        setDate({})
        setAlert({})
    }

    return (
        <DatesContext.Provider
            value={{
                dates,
                showAlert,
                alert,
                submitDate,
                getDate,
                date,
                loading,
                deleteDate,
                logOutDates
            }}
        >{children}
        </DatesContext.Provider>
    )
}

export {
    DatesProvider
}

export default DatesContext