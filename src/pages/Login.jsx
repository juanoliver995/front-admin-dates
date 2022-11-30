import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "../components/Alert"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAltert] = useState({})

    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([username, password].includes('')) {
            setAltert({
                msg: "All fields are required",
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/users/login', { username, password })
            localStorage.setItem("token", data.token)
            setAltert({})
            setAuth(data)
            navigate("/dates")
        } catch (error) {
            setAltert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alert


    return (
        <>
            <h1 className=" text-sky-600 font-black text-5xl capitalize text-center">log in and manage your <span className="text-slate-700">dates</span></h1>
            <form
                onSubmit={handleSubmit}
                className="my-10 bg-white shadow rounded-lg p-10"
            >
                {msg && <Alert alert={alert} />}
                <div className="my-5">
                    <label
                        className=" uppercase text-gray-600 block text-lg font-bold"
                        htmlFor="username"
                    >Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className=" w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label
                        className=" uppercase text-gray-600 block text-lg font-bold"
                        htmlFor="password"
                    >Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className=" w-full mt-3 p-3 border rounded-lg bg-gray-50"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value="Log In"
                    className="bg-sky-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>
        </>
    )
}

export default Login