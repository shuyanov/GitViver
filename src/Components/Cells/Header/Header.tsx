import React from "react";
import { FlexContainer } from "../../Common/FlexContainer/FlexContainer";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <FlexContainer className={styles.GitViver} justifyContent="space-around" alignItems="center">
            <h1>GitViver</h1>
            <FlexContainer alignItems="center" gap={30}>
                <input className={styles.inputSS}></input>
                <button className={styles.buttonSS}></button>
            </FlexContainer>
        </FlexContainer>
    )
}
