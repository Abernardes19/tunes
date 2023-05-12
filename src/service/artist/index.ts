import artistApi from "../api"
import { IArtistResult } from "./artis.structure";

class Artist {
  getArtist = async (name: string): Promise<IArtistResult | false> => {
    try {
      const { data } = await artistApi.get(`/search?entity=album&term=${name}&attribute=allArtistTerm`);
      
      return data;
    } catch (error) {
      return false;
    }
  }
}

export default new Artist()