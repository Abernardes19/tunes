import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import MusicCard from "../../components/MusicCard";
import { IMusics } from "../../service/musics/musics.structure";

export default function Favorites() {
  const [allFavorites, setAllFavorites] = useState([] as IMusics[])
  const [loading, setLoading] = useState(true as boolean);
  
  const refreshFavorites = () => {
    setLoading(true)
    const favorites = JSON.parse(localStorage.getItem("favorites") as string);
    setAllFavorites(favorites);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  
  const renderFavorites = () => {
    return (
      allFavorites.map((e) => {
        return (
          <div key={e.trackId}>
            <MusicCard music={e} refreshFavorites={refreshFavorites} />
          </div>
        )
      })
    )
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") as string);
    setAllFavorites(favorites)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center h-screen w-screen">
        { loading ? ( 
          <div className=" mt-[200px]">
            <Loading />
          </div>
        ) : allFavorites.length === 0 ? (
          <div className="mb-10 bg-dark-green p-5 rounded-full flex flex-col items-center mt-[200px]">
            <p>Nenhuma musica foi favoritada</p>
          </div>
        ) : (
          <div  className="flex flex-wrap gap-2 justify-center mt-[200px]">
            {renderFavorites()}
          </div>
        )}
      </div>
    </div>
  )
}