import { SiItunes } from "react-icons/si";

export default function Login() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className=" w-[500px] h-[450px] flex flex-col items-center gap-10 bg-dark-green p-5 rounded-2xl shadow-login-shadow animate-openLogin ">
        <SiItunes size={200} />
        <form className=" flex flex-col gap-5 w-full">
          <label htmlFor="username" className="animate-openInputs">
            Username:
            <input type="text" id="username" className=" bg-transparent border rounded-full p-2 w-full" />
          </label>
          <label htmlFor="password" className="animate-openInputs transition-all">
            Senha:
            <input type="password" id="password" className=" bg-transparent border rounded-full p-2 w-full" />
          </label>
        </form>

      </div>
    </div>
  )
}