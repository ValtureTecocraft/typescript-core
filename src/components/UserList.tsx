import React, { useState } from "react";
import { IUser } from "../models/IUser";
import { UserServices } from "../services/UserService";

interface IState {
  users: IUser[];
}

export const UserList: React.FC = () => {
  const [state, setState] = useState<IState>({
    users: UserServices.getAllUsers(),
  });

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="w-[500px] h-fit flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 w-full font-bold">
          <h3>Sr.No.</h3>
          <h3>Name</h3>
          <h3>Age</h3>
        </div>
        {state.users.length > 0 &&
          state.users.map((user) => (
            <div className="grid grid-cols-3 w-full">
              <p>{user.sno}</p>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
