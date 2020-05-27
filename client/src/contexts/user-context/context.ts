import React from "react";

interface IState {
  isAuthenticated: boolean;
  user?: object | any;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateUser: (key: string, value: string) => void;
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
const initialUser: IUser = {
  _id: "",
  firstName: "",
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
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});
