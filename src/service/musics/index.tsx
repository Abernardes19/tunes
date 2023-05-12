import artistApi from "../api";
import { IMusicsResult } from "./musics.structure";

class Musics {
  getMusics = async (id: number): Promise<IMusicsResult | false> => {
    try {
      const { data } = await artistApi.get(`/lookup?id=${id}&entity=song`)

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Musics();
