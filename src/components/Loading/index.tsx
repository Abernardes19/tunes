import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className=" bg-dark-green w-[500px] h-[100px] flex items-center justify-center rounded-full gap-5">
        <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
        <p className="text-7xl">Loading</p>
      </div>
    </div>
  )
}