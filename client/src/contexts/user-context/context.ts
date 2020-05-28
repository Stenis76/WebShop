import React from "react";

interface IState {
  isAuthenticated: boolean;
  user: IUser;
  login: (email: string, password: string) => Promise<string>;
  logout: () => void;
  updateUser: (key: string, value: string) => void;
  registerUser: (newUser: object) => void;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  postCode: string;
  city: string;
  card: string;
}
export const initialUser: IUser = {
  _id: "",
  firstName: "dick",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
  postCode: "",
  city: "",
  card: "",
};

export default React.createContext<IState>({
  isAuthenticated: false,
  user: initialUser,
  login: async () => "",
  logout: () => {},
  updateUser: () => {},
  registerUser: () => {},
});
