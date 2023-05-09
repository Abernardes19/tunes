import { AiOutlineUser } from "react-icons/ai";
import { btnNav, spanBorder } from "./header.css";

export default function Header() {
  return (
    <header className=" bg-dark-green w-screen flex flex-col fixed top-0">
      <div className=" w-full flex items-center h-[100px] justify-between px-10 border-b-2 border-light-green ">
        <p className="text-7xl">Tunes</p>
        <div className=" bg-white h-[60%] flex items-center rounded-l-full rounded-r-full p-2 gap-2">
          <AiOutlineUser className=" text-black border-black border rounded-full"  />
          <p className="text-black">UserName</p>
        </div>
      </div>
      <nav className=" flex justify-around w-full h-[60px] items-center ">
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