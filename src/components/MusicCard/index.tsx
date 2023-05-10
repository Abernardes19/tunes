import { useRef, useState } from "react";
import { IMusicProp } from "./music.structure";
import { BsPlayFill, BsPlay } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function MusicCard({music}: IMusicProp) {
  const [play, setPlay] = useState(false as boolean);
  const [isFavorite, setIsFavorite] = useState(false as boolean);
  const audio = useRef(null as HTMLAudioElement | null);

  const playSong = () => {
    if (!play) {
      (audio.current as HTMLAudioElement).play();
    } else {
      (audio.current as HTMLAudioElement).pause();
    }
    setPlay(!play);
  };

  const setFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className=" flex bg-dark-green items-center p-5 rounded-full w-[400px]">
      <audio src={music.previewUrl} ref={audio} />
      <img src={music.artworkUrl100} alt={music.artistName} className=" rounded-full" />
      <div className=" h-[100px]">
        <div className=" flex flex-col h-full w-[50px] ml-2">
          <button className="bg-dark-green h-[50px] hover:bg-light-green px-4" onClick={() => setFavorite()}>
            {isFavorite ? <AiFillHeart size={18} /> : <AiOutlineHeart size={18} />}
          </button>

          <button className="bg-dark-green w-[50px] h-[50px] hover:bg-light-green px-4" onClick={() => playSong()}>
            {play ? <BsPlayFill size={20} /> : <BsPlay size={20} />}
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg">{music.trackName}</h3>
        <p className="text-gray-400">{music.artistName}</p>
      </div>
    </div>
  )
}