import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import musics from "../../service/musics";
import Header from "../../components/Header";
import { IAlbumInfo, IMusics } from "../../service/musics/musics.structure";
import Loading from "../../components/Loading";
import MusicCard from "../../components/MusicCard";

export default function Album() {
  const [allMusics, setAllMusics] = useState([] as (IMusics & IAlbumInfo)[])
  const [loading, setLoading] = useState(true as boolean);
  const [apiError, setApiError] = useState(false as boolean);
  const { id } = useParams();

  console.log(allMusics);
  

  const renderMusics = () => {
    return (
      <div className=" flex flex-wrap gap-2 justify-center">
        {allMusics.map((e, i) => {
          if (i !== 0) {
            return (
              <div key={e.trackName}>
                <MusicCard music={e as IMusics} />
              </div>
            )
          }
        })}
      </div>
    )
  }

  const getMusics = useCallback(async () => {
    const data = await musics.getMusics(Number(id))

    console.log(data);
    

    if (data) {
      setTimeout(() => {
        setLoading(false)
        setAllMusics(data.results);
      }, 1000)
    } else {
      setTimeout(() => {
        setLoading(false)
        setApiError(true)
      }, 1000)
    }
  }, [id]);

  useEffect(() => {
    getMusics()
  }, []);
  
  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center mt-[200px] h-screen w-screen">
        {loading ? (
          <div className=" w-screen flex justify-center mt-[200px]">
            <Loading />
        </div>
        ) : apiError ? (
          <div className="w-[90%] flex flex-col items-center mt-[50px]">
            <p>Não foi possivel obter informações do Album. Tente mais tarde!</p>
          </div>
        ) : (
          <div className=" w-screen flex flex-col items-center mt-[200px]">
            <div className=" mb-10 bg-dark-green p-5 rounded-full flex flex-col items-center">
              <p>{(allMusics[0] as IAlbumInfo).artistName}</p>
              <p>{`Album: ${(allMusics[0] as IAlbumInfo).collectionName}`}</p>
            </div>
            { renderMusics() }
          </div>
        )}
      </div>
    </div>
  )
}