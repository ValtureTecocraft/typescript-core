import React, { useState } from "react";
import { Users } from "../components/Users";
import { Link } from "react-router-dom";
// import { UserList } from "../components/UserList";

interface IState {
  isLogin: boolean;
}

const App: React.FC = () => {
  const [state, setState] = useState<IState>({
    isLogin: false,
  });

  return (
    <div className="min-h-screen h-full pt-8 gap-5 flex flex-col justify-start items-center">
      hello
      {/* <UserList /> */}
      <Users />
      <Link
        to={"counter"}
        className="bg-blue-500 hover:bg-blue-600 text-white duration-150 py-1 px-2 rounded"
      >
        Counter App
      </Link>
    </div>
  );
};

export default App;
