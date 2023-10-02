import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../Common/FlexContainer/FlexContainer";
import styles from "./Header.module.css";
import axios from "axios";
import { SearchResult } from "../../../App";

export type HeaderProps = {
  setUser: (arg: any) => void;
};
export const Header: React.FC<HeaderProps> = ({ setUser }) => {
  const [searchTerm, setSearchTerm] = useState("github");
  const [tempSerch, setTempSerch] = useState("github");

  useEffect(() => {
    axios
      .get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => {
        setUser(response.data.items);
      });
  }, [searchTerm]);

  return (
    <FlexContainer
      className={styles.GitViver}
      justifyContent="space-around"
      alignItems="center"
    >
      <h1>GitViver</h1>
      <FlexContainer alignItems="center" gap={30}>
        <input
          className={styles.inputSS}
          placeholder="search"
          value={tempSerch}
          onChange={(e) => {
            setTempSerch(e.currentTarget.value);
          }}
        ></input>
        <button
          className={styles.buttonSS}
          onClick={() => {
            setSearchTerm(tempSerch);
          }}
        ></button>
      </FlexContainer>
    </FlexContainer>
  );
};
