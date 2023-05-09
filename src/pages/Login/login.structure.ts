export const defaultLocal = (user: IUser) => {
  return {
    name: user.name,
    email: user.email,
    favoritos: []
  }
}

export interface IUser {
  name: string;
  email: string;
}