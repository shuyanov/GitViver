import "./App.css";
import { useState } from "react";
import { Layout } from "./Components/Common/LayOut/LayOut";
import { Header } from "./Components/Cells/Header/Header";
import { MainPage } from "./Components/Pages/MainPage/MainPage";

export type SearchUserType = {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
};

export type SearchResult = {
  items: SearchUserType[];
};
//

export type follwoType = {
  avatar_url: string | undefined;
  login: string;
  followers: string;
  following: string;
  name: string;
};


function App() {
  const [Users, setUsers] = useState<SearchUserType[]>([]);

  return (
    <div>
      <Layout.Header>
        <Header setUser={setUsers} />
      </Layout.Header>

      <Layout.Body>
        <MainPage Users={Users} />
      </Layout.Body>

      <Layout.Footer></Layout.Footer>
    </div>
  );
}

export default App;
