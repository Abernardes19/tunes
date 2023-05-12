import { useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { btnNav, spanBorder } from "./header.css";

export default function Header() {
  const navigate = useNavigate();
  
  if (!localStorage.getItem("tunes") || !localStorage.getItem("favorites")) {
    return <Navigate to="/login" />
  }
  return (
    <header className=" bg-dark-green w-screen flex flex-col fixed top-0">
      <div className=" w-full flex items-center h-[100px] justify-between px-10 border-b-2 border-light-green ">
        <p className="text-7xl">Tunes</p>
        <div className=" bg-white h-[60%] flex items-center rounded-l-full rounded-r-full py-2 px-8 gap-2">
          <AiOutlineUser className=" text-black border-black border rounded-full"  />
          <p className="text-black">{JSON.parse(localStorage.getItem("tunes") as string).name}</p>
        </div>
      </div>
      <nav className=" flex justify-around w-full h-[60px] items-center border-b-2 border-light-green">
        <button className={btnNav} onClick={() => navigate("/search")}>
          Pesquisar
        </button>
        <span className={spanBorder} />
        <button className={btnNav} onClick={() => navigate("/favorites")}>
          Favoritos
        </button>
        <span className={spanBorder} />
        <button className={btnNav} onClick={() => navigate("/profile")}>
          Perfil
        </button>
      </nav>
    </header>
  )
}