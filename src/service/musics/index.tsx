import artistApi from "../api";

class Musics {
  getMusics = async (id: number) => {
    try {
      const { data } = await artistApi.get(`/lookup?id=${id}&entity=song`)

      return data
    } catch (error) {
      return false
    }
  }
}

export default new Musics();
