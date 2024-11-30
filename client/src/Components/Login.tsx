import { useState } from "react";
import axios from "axios";
import link from "../assets/link.json";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [err, setErr] = useState<string | undefined>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErr("");
        setLoading(true);

        if (username.trim() === "" || password.trim() === "") {
            setErr("Username and Password are required");
            setLoading(false);
            return;
        }

        try {
            const data = await axios.post(`${link.url}/login`, { username, password });
            if (data.status === 201) {
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("email", data.data.email);
                localStorage.setItem("username", username);
                navigate("/home");
            }
            console.log(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 404) setErr(error?.response.data);
            } else {
                setErr("Try Again Later!!");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800">Login</h1>
                {err && <p className="text-red-500 text-center text-sm">{err}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
                
            <p className="text-xs text-gray-400">New User? <span onClick={()=>navigate("/register")} className="text-blue-400 hover:cursor-pointer hover:text-blue-700">Register Here</span></p>
            </div>
        </div>
    );
};

export default Login;
