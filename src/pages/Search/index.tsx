import { useCallback, useState } from "react";
import AlbumCard from "../../components/AlbumCard";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import artist from "../../service/artist";
import { IArtist } from "../../service/artist/artis.structure";

export default function Search() {
  const [artistName, setArtistName] = useState("" as string);
  const [loading, setLoading] = useState(false as boolean);
  const [albums, setAlbums] = useState([] as IArtist[] | "empty");

  const getArtists = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    event.preventDefault()
    const data = await artist.getArtist(artistName.toLocaleLowerCase()); 

    if (data) {
      setTimeout(() => {
        setLoading(false)
        setAlbums(data.results);
      }, 1000)
    } else {
      setTimeout(() => {
        setLoading(false)
        setAlbums("empty");
      }, 1000)
    }
  }, [artistName]);

  const renderAlbums = () => {
    return (
      <div className=" w-[90%] flex flex-wrap justify-center mt-[50px] gap-2 pb-10">
        { (albums as IArtist[]).map((e) => (
          <div key={e.collectionId}>
            <AlbumCard album={e} />
          </div>
        )) }
      </div>
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setArtistName( value );
  }

  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center h-screen w-screen">
        <form className=" flex items-center justify-center gap-5 mt-[200px]">
          <label>
            <input
              className=" bg-dark-green border rounded-full p-2 w-[500px]"
              onChange={handleChange}
            />
          </label>
          <button className=" bg-dark-green" onClick={async (e) => await getArtists(e)}>
            Pesquisar
          </button>
        </form>
        { loading ? (
          <div className=" w-screen flex justify-center mt-[200px]">
            <Loading />
          </div>
        ) : albums === "empty" ? (
          <div className="w-[90%] flex flex-col items-center mt-[50px]">
            <p>{`Não foi possivel encontrar o artista ${artistName}!`}</p>
            <p>Tente mais tarde ou mude o artista!</p>
          </div>
        ) : (
          renderAlbums()
        )
        }
      </div>
    </div>
  )
}
