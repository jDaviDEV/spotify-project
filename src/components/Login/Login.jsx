import React, { useState } from 'react'
import bgLoginImg from "./assets/bg-login-image.jpg";
import { Link } from 'react-router';


const Login = () => {
    const [isPassVisible, setIsPassVisible] = useState(false);

    const showPassHandler = () => {
        setIsPassVisible((isPassVisible) => !isPassVisible)
    }

    let passIcon = (<svg onClick={showPassHandler} xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#000" className="w-4 h-4 absolute right-4 top-9 cursor-pointer" viewBox="0 0 128 128">
        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
    </svg>)

    if (isPassVisible){
        passIcon = (<svg onClick={showPassHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" stroke="#000" className="w-4 h-4 absolute right-4 top-9 cursor-pointer" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
          </svg>)
    } 

    return (
        <>
            <div className="bg-sky-100 flex justify-center items-center h-screen">

                <div className="w-1/2 h-screen hidden lg:block">
                    <img src={bgLoginImg} alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form action="#" method="POST">

                        <div className="mb-4 bg-sky-100 relative">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="something@gmail.com"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" stroke="#bbb" className="w-4 h-4 absolute right-4 top-9" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-gray-800">Password</label>
                            <input type={!isPassVisible ? "password":"text"} id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="●●●●●●●●" />
                            {passIcon}
                        </div>

                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                            <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
                        </div>

                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>

                    <div className="flex items-center justify-center space-x-2 my-5">
                        <span className="h-px w-16 bg-gray-300"></span>
                        <span className="text-gray-400 font-normal">or</span>
                        <span className="h-px w-16 bg-gray-300"></span>
                    </div>
                    <div className="flex justify-center gap-5 w-full ">
                        <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-700 text-sm text-gray-400 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                            </svg>
                            <span>Spotify</span>
                        </button>


                        <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-700 text-sm text-gray-400 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                            <span>Google</span>
                        </button>

                        <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-700 text-sm text-gray-400 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-">
                            <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="blue" fillRule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"></path></svg>
                            <span>Facebook</span>
                        </button>

                    </div>

                    <div className="mt-6 text-blue-500 text-center">
                        <Link to="/register" className="hover:underline">Sign up Here</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login
