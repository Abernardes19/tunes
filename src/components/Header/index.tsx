import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <header className=" bg-dark-green w-screen flex flex-col fixed top-0 border-b-[1px] border-light-green rounded-b-2xl">
      <div className=" w-full flex items-center h-[100px] justify-between px-10 border-b-[1px] border-light-green rounded-b-2xl ">
        <p className="text-7xl">Tunes</p>
        <div className=" bg-white h-[60%] flex items-center rounded-l-full rounded-r-full p-2 gap-2">
          <AiOutlineUser className=" text-black border-black border rounded-full"  />
          <p className="text-black">UserName</p>
        </div>
      </div>
      <nav className=" flex justify-around w-full h-[60px] items-center ">
        <button className=" bg-dark-green w-[30%] border-r-[1px] border-light-green border-0 rounded-[0px] rounded-[0px] transition-all ease-in-out duration-500 hover:border-2 hover:border-dark-green hover:bg-light-green hover:rounded-2xl">
          Pesquisar
        </button>
        <button className=" bg-dark-green w-[30%] border-r-[1px] border-light-green border-0 rounded-[0px] transition-all ease-in-out duration-500 hover:border-2 hover:border-dark-green hover:bg-light-green hover:rounded-2xl">
          Favoritos
        </button>
        <button className=" bg-dark-green w-[30%] hover:bg-light-green rounded-[0px] transition-all ease-in-out duration-500 hover:border-2 hover:border-dark-green hover:bg-light-green hover:rounded-2xl">
          Perfil
        </button>
      </nav>
    </header>
  )
}