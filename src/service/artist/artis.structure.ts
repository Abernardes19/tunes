export interface IArtist {
  artistName: string;
  artworkUrl100: string;
  collectionId: number;
  collectionName: string;
}

export interface IArtistResult {
  resultCount: number;
  results: IArtist[]
}