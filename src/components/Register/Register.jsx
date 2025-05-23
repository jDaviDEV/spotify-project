import { useState } from 'react'
import bgRegisterImg from "./assets/bg-register-image.jpg";
import { Link } from 'react-router';
import { createAccount } from '../../helpers/FirebaseConnection';

const Register = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const isMatching = () => {
    if (password === confirmPassword){
      setPasswordMatch(true);
    }
  }

  const showPassHandler = () => {
    setIsPassVisible((isPassVisible) => !isPassVisible)
  }

  let passIcon = (<svg onClick={showPassHandler} xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#000" className="w-4 h-4 absolute right-4 top-9 cursor-pointer" viewBox="0 0 128 128">
    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
  </svg>)

  if (isPassVisible) {
    passIcon = (<svg onClick={showPassHandler} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" stroke="#000" className="w-4 h-4 absolute right-4 top-9 cursor-pointer" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
    </svg>)
  }

  return (
    <>
      <div className="bg-sky-100 flex justify-center items-center h-screen">

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <form action="#" method="POST">

            <div className="mb-4 bg-sky-100 relative">
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input onChange={(e)=>{setUserName(e.target.value)}} type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="Jhon Doe" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" stroke="#bbb" className="w-4 h-4 absolute right-4 top-9" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>

            <div className="mb-4 bg-sky-100 relative">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="something@gmail.com" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" stroke="#bbb" className="w-4 h-4 absolute right-4 top-9" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-800">Password</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} type={!isPassVisible ? "password" : "text"} id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="●●●●●●●●" />
              {passIcon}
            </div>

            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block text-gray-800">Confirm password</label>
              <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type={!isPassVisible ? "password" : "text"} id="confirmPassword" name="confirmPassword" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder="●●●●●●●●" />
              {passIcon}
            </div>

            <button onClick={()=>{
              isMatching();
              if (passwordMatch) {
                createAccount(email, password, userName);
              } else {
                alert("Password do not match");
              }
              
            }} type="button" className="bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
          </form>

          <div className="mt-6 text-blue-500 text-center">
            <Link to="/login" className="hover:underline">Sign in Here</Link>
          </div>
        </div>
        <div className="w-1/2 h-screen hidden lg:block">
          <img src={bgRegisterImg} alt="Placeholder Image" className="object-cover w-full h-full transform-[scaleX(-1)]" />
        </div>
      </div>
    </>

  )
}

export default Register
