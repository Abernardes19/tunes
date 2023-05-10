import { useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { btnNav, spanBorder } from "./header.css";

export default function Header() {
  const userName = useMemo(() => {
    return JSON.parse(localStorage.getItem("tunes") as string).name as string
  }, [localStorage.getItem("tunes")]);

  return (
    <header className=" bg-dark-green w-screen flex flex-col fixed top-0">
      <div className=" w-full flex items-center h-[100px] justify-between px-10 border-b-2 border-light-green ">
        <p className="text-7xl">Tunes</p>
        <div className=" bg-white h-[60%] flex items-center rounded-l-full rounded-r-full p-2 gap-2">
          <AiOutlineUser className=" text-black border-black border rounded-full"  />
          <p className="text-black">{userName}</p>
        </div>
      </div>
      <nav className=" flex justify-around w-full h-[60px] items-center border-b-2 border-light-green">
        <button className={btnNav}>
          Pesquisar
        </button>
        <span className={spanBorder} />
        <button className={btnNav}>
          Favoritos
        </button>
        <span className={spanBorder} />
        <button className={btnNav}>
          Perfil
        </button>
      </nav>
    </header>
  )
}