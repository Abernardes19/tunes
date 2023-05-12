import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import IEditBtnProps from "../../pages/Profile/edit.structure";
import IUserProfile from "../ProfileCard/profile.structure";

export default function EditCard({ checked, toggleSwitch }: IEditBtnProps) {
  const [newInfos, setNewInfos] = useState({} as IUserProfile)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewInfos({ ...newInfos, [name]: value })
  }

  const submitChanges = () => {
    const curLocal = JSON.parse(localStorage.getItem("tunes") as string);
    localStorage.setItem("tunes", JSON.stringify(
      { ...curLocal, ...newInfos }
    ));
  }

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
        <form className="flex flex-col mt-10 gap-5">
          <label className="flex flex-col w-full border-dark-green border-2 px-[5px] rounded pb-[5px]">
            Nome:
            <input className="bg-light-green px-[5px]" type="text" name="name" onChange={handleChange} />
          </label>
          <label className="flex flex-col w-full border-dark-green border-2 px-[5px] pb-[5px] rounded">
            Email:
            <input className="bg-light-green px-[5px]" type="text" name="email" onChange={handleChange} />
          </label>
          <label className="flex flex-col w-full border-dark-green border-2 px-[5px] pb-[5px] rounded">
            Descrição:
            <textarea className="bg-light-green px-[5px] h-[130px]" name="description" maxLength={200} onChange={handleChange} />
          </label>
          <button
            className="w-full bg-light-green border-dark-green border-2 px-[5px] pb-[5px] rounded hover:bg-dark-green"
            type="button"
            onClick={() => submitChanges()}
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  )
}