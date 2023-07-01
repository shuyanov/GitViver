import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../Common/FlexContainer/FlexContainer";
import { UseEffect } from "../../Molecules/UseEffect";
import { SearchResult, SearchUserType, follwoType } from "../../../App";

import styles from "./MainPage.module.css";
import axios from "axios";

type MainPageProps = {
  Users: SearchUserType[];
};

export type mainUserType = {
  followers: string;
  following: string;
  name: string;
};

export type mainUserResult = {
  items: mainUserType[];
};

export const MainPage: React.FC<MainPageProps> = ({ Users }) => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);
  const [imgUser, setimgUser] = useState("");
  const [loginUser, setloginUser] = useState("sweet62");

  const [FollowersUser, setFollowersUser] = useState<follwoType | null>(null);

  const [mainUser, setMainUser] = useState<mainUserType[]>([]);
  const [fullowers, setFullowers] = useState("");
  const [following, setFollowing] = useState("");
  const [name, setName] = useState("");

  // Получаем данные пользователей;
  useEffect(() => {
    axios
      .get<follwoType>(`https://api.github.com/users/${loginUser}`)
      .then((response) => {
        setFollowersUser(response.data);
      });
  }, [loginUser]);

  // // Получаем данные данного пользователя;
  // useEffect(() => {
  //   axios
  //     .get<mainUserResult>(`https://api.github.com/users/${loginUser}`)
  //     .then((response) => {
  //       setMainUser(response.data.items);
  //     });
  // }, [loginUser]);

  console.log(`hi = ${FollowersUser?.login}`);

  return (
    <FlexContainer style={{ width: "100%" }} justifyContent="space-around">
      <FlexContainer gap={20} alignItems="center">
        <img className={styles.img} src={imgUser} />
        <FlexContainer flexDirection="column">
          <h1>Followers: {FollowersUser && FollowersUser.followers}</h1>
          <h1>Following: {FollowersUser && FollowersUser.following}</h1>
          <h1>Name: {FollowersUser && FollowersUser.name}</h1>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer style={{ width: 600 }} height={500}>
        <div>
          {Users.map((u) => (
            <div
              style={{ cursor: "pointer" }}
              key={u.id}
              className={selectedUser === u ? styles.selected : ""}
              onClick={() => {
                setSelectedUser(u);
                setloginUser(u.login);
                setimgUser(u.avatar_url);
              }}>
              {u.login}
            </div>
          ))}
        </div>
      </FlexContainer>
    </FlexContainer>
  );
};
