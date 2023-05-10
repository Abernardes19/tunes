import { useNavigate } from "react-router-dom";
import { IAlbumCardProps } from "./albumCard.structure";

export default function AlbumCard({album}: IAlbumCardProps) {
  const navigate = useNavigate();
  const sendToAlbum = () => {
    navigate(`/album/${album.collectionId}`)
  };

  return (
    <button className=" h-[150px] bg-dark-green flex py-5 gap-2 items-center rounded-full w-[350px] mb-2 shadow-album-card hover:-translate-y-1 hover:-translate-x-1" onClick={() => sendToAlbum()}>
      <img src={ album.artworkUrl100 } alt={ album.artistName } className=" rounded-full" />
      <div className=" flex flex-col items-start w-full">
        <p>{ album.artistName }</p>
        <p className=" break-word border-t w-full">{album.collectionName}</p>
      </div>
    </button>
  )
}