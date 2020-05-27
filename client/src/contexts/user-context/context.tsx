import { createContext } from "react";

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

export default createContext({
  user: initialUser,
  updateUser: (key: string, value: string) => {},
});
