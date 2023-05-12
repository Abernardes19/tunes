import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import IEditBtnProps from "../../pages/Profile/edit.structure";
import IUserProfile from "./profile.structure";

export default function ProfileCard({ checked, toggleSwitch }: IEditBtnProps) {
  const [info, setInfo] = useState({} as IUserProfile)

  useEffect(() => {
    const infos = JSON.parse(localStorage.getItem("tunes") as string);
    setInfo(infos)
  }, []);

  return (
    <div className="  w-screen flex flex-col items-center p-2 ">
      <div className=" w-[450px] h-[600px] bg-light-green p-5 shadow-login-shadow rounded-2xl border-dark-green border-[5px] mt-10 pt-10">
        <div className="w-full h-[100px] flex items-start justify-between ">
          <AiOutlineUser size={100} className=" text-white border-white border rounded-full ml-[150px]" />
          <div className="flex items-center justify-center w-12">
            <label htmlFor="switch" className="relative inline-block w-12 h-8">
              <input type="checkbox" id="switch" className="sr-only" checked={checked} onChange={toggleSwitch} />
              <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 transform ${checked ? 'translate-x-[17px] bg-dark-green' : 'bg-light-green'}`} />
              <div className={`right-0 top-0 w-12 h-8 rounded-full bg-gray-400`} />
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-5">
          <label className="w-full border-dark-green border-2 px-[5px] rounded">
            Nome:
            <p className=" w-full border-t-2 border-dark-green">{info.name}</p>
          </label>
          <label className="w-full border-dark-green border-2 px-[5px] rounded">
            Email:
            <p className=" w-full border-t-2 border-dark-green">{info.email}</p>
          </label>
          <label className="w-full border-dark-green border-2 px-[5px] rounded h-[246px]">
            Descrição:
            <p className=" w-full border-t-2 border-dark-green">{info.description}</p>
          </label>
        </div>
      </div>
    </div>
  )
}