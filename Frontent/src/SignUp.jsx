function SignUp() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-zinc-900 to-amber-900">
            <div className="w-[40%] bg-black m-4 flex flex-col items-center rounded-lg p-6">
                <div className="text-3xl text-white"><span className="text-yellow-400">Create your</span> Account</div>
                <div className="flex flex-1 mt-4 w-full gap-4 text-white bg-black">
                    <div className="w-1/2"> 
                    <input type="text"
                    placeholder="first name"
                    className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg" />
                    </div>

                    <div className="w-1/2">
                    <input type="text"
                    placeholder="last name"
                    className="placeholder-gray-400 p-2 w-full border-1 border-white  rounded-lg text-white" /></div>
                </div>
                <div className="w-full">
                    <input type="email"
                    placeholder="user@gmail.com"
                    className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg mt-3 text-white"/>
                </div>
                <div className="w-full">
                    <input type="password"
                    placeholder="enter your password here"
                    className="placeholder-gray-400 border-white p-2 w-full border-1 rounded-lg mt-3 text-white"/>
                </div>
                <p className="text-white mt-3">Already Login?<span className="text-blue-600 cursor-pointer">Signin</span></p>
            </div>
        </div>
    )
}

export default SignUp;