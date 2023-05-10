export interface IMusics {
  trackName: string;
  previewUrl: string;
  trackId: number;
  artworkUrl100: string;
  artistName: string;
}

export interface IAlbumInfo {
  artistName: string;
  collectionName: string;
}

export interface IMusicsResult {
  resultCount: number;
  results: (IAlbumInfo & IMusics)[]
}