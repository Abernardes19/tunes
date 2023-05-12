export const defaultLocal = (user: IUser) => {
  localStorage.setItem("tunes", JSON.stringify({
    name: user.name,
    email: user.email,
    description: "",
  }))
  localStorage.setItem("favorites", JSON.stringify([]))
}

export interface IUser {
  name: string;
  email: string;
}