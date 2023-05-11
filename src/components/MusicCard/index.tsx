import { useEffect, useMemo, useRef, useState } from "react";
import { IMusicProp } from "./music.structure";
import { BsPlayFill, BsPlay } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IMusics } from "../../service/musics/musics.structure";

export default function MusicCard(props: IMusicProp) {
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
    const tunes = JSON.parse(localStorage.getItem("favorites") as string);

    if (isFavorite) {
      localStorage.setItem("favorites", JSON.stringify(
        tunes.filter((e: IMusics) => e.trackId !== props.music.trackId)
      ))
      setIsFavorite(false)
    } else {
      const newTunes = [...tunes, props.music]
      localStorage.setItem("favorites", JSON.stringify(newTunes))
      setIsFavorite(true)
    }
    {props.refreshFavorites && props.refreshFavorites()}
  }

  const finishPlay = () => {
    const duration = audio.current?.duration;
    const ct = audio.current?.currentTime
    if (duration === ct) {
      setPlay(false)
    }
  }

  const getFavorite = () => {
    const favorites = JSON.parse((localStorage.getItem("favorites") as string))
    if (favorites.some((e: IMusics) => e.trackId === props.music.trackId)) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }

  useEffect(() => {
    getFavorite()
  }, [localStorage.getItem("favorites")])

  return (
    <div className=" flex bg-dark-green items-center p-5 rounded-full w-[400px] h-[140px]">
      <audio src={props.music.previewUrl} ref={audio} onTimeUpdate={finishPlay} />
      <img src={props.music.artworkUrl100} alt={props.music.artistName} className={` rounded-full ${play && "animate-spin duration-700"}`}/>
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
        <h3 className="text-white text-lg">{props.music.trackName}</h3>
        <p className="text-gray-400">{props.music.artistName}</p>
      </div>
    </div>
  )
}