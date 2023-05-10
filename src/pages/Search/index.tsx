import { useEffect } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import artist from "../../service/artist";

export default function Search() {
  const get = async () => {
    console.log(await artist.getArtist("ColdPlay"));
    
  }
  useEffect(() => {
    get()
  }, [])
  return (
    <div>
      <Header />
      <form className=" mt-[200px] flex items-center justify-center gap-5">
        <label>
          <input className=" bg-dark-green border rounded-full p-2 w-[500px]" />
        </label>
        <button className=" bg-dark-green">
          Pesquisar
        </button>
      </form>
      <Loading />
    </div>
  )
}