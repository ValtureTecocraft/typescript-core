import React, { useState, useEffect } from "react";
import { IUsers } from "../models/IUsers";
import { UsersService } from "../services/UsersService";

interface IState {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

export const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  //Network Request
  useEffect(() => {
    setState({ ...state, loading: true });
    UsersService.getAllUsers()
      .then((res) => setState({ ...state, loading: false, users: res.data }))
      .catch((err) => setState({ ...state, errorMsg: err.message }));

    console.log(state);
  }, []);
  return (
    <div>
      <h1>Data Users API</h1>
    </div>
  );
};
