import { useState } from "react";
import { SiItunes } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { defaultLocal, IUser } from "./login.structure";

export default function Login() {
  const [userInfo, setUserInfo] = useState({} as IUser)
  const navigate = useNavigate()

  const login = () => {
    defaultLocal(userInfo)
    navigate("/search")
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value })
  }

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className=" w-[500px] h-[450px] flex flex-col items-center gap-10 bg-dark-green p-5 rounded-2xl shadow-login-shadow animate-openLogin ">
        <SiItunes size={200} className="animate-openInputs" />
        <form className=" flex flex-col gap-5 w-full">
          <label htmlFor="username" className="animate-openInputs">
            Username:
            <input
              type="text"
              id="username"
              className=" bg-transparent border rounded-full p-2 w-full"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="animate-openInputs">
            Email:
            <input
              type="text"
              id="password"
              className=" bg-transparent border rounded-full p-2 w-full"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </label>
        </form>
        <button className=" bg-light-green w-[50%] border-2 border-dark-green transition ease-in-out delay-150 hover:scale-110 hover:bg-dark-green hover:border-2 hover:border-light-green duration-300 animate-openInputs" onClick={() => login()}>
          Logar
        </button>
      </div>
    </div>
  )
}