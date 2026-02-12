import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate("/details",
            {state: {firstName , lastName ,password , email}
    });
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-zinc-900 to-amber-900">
            <div className="w-[40%] bg-black m-4 flex flex-col items-center rounded-lg p-6 border-gray-500 border-1">
                <div className="text-3xl text-white"><span className="text-yellow-400">Create your</span> Account</div>
                <form action="/" className="w-full " onSubmit={handleSubmit}>
                    <div className="flex flex-1 mt-4 w-full gap-4 text-white bg-black">
                        <div className="w-1/2">
                            <input type="text"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                placeholder="first name"
                                className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg" />
                        </div>

                        <div className="w-1/2">
                            <input type="text"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                placeholder="last name"
                                className="placeholder-gray-400 p-2 w-full border-1 border-white  rounded-lg text-white" /></div>
                    </div>
                    <div className="w-full">
                        <input type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="user@gmail.com"
                            className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg mt-3 text-white" />
                    </div>
                    <div className="w-full">
                        <input type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="enter your password here"
                            className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg mt-3 text-white" />
                    </div>
                    <div className="justify-center flex">
                    <button 
                    type="submit"
                    className="text-white bg-blue-500 p-2 m-2 rounded-lg w-[40%] cursor-pointer hover:bg-blue-700 ">Submit</button>
                    </div>
                </form>
                <p className="text-white mt-3">Already Login?<span className="text-blue-600 cursor-pointer">Signin</span></p>
            </div>
        </div>
    )
}

export default SignUp;