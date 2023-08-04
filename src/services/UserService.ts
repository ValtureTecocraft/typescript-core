import { IUser } from "../models/IUser";

export class UserServices {
  private static users: IUser[] = [
    { sno: 1, name: "Smit", age: 21 },
    { sno: 2, name: "Raj", age: 23 },
    { sno: 3, name: "Mohit", age: 22 },
  ];

  public static getAllUsers() {
    return this.users;
  }
}
