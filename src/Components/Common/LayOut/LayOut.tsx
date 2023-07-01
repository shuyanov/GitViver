import React, { PropsWithChildren } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";

const Header = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            height={100}>
            {children}
        </FlexContainer>
    )
}

const Body = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer style={{ minHeight: 1000, paddingTop: 100}} justifyContent='center'>
            {children}
        </FlexContainer>
    )
}

const Footer = ({ children }: PropsWithChildren<object>) => {
    return (
        <FlexContainer
            style={{ marginTop: 70, width: '100%'}}
            height={160}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
        >
            {children}
        </FlexContainer>
    )
}

export const Layout = ({ children }: PropsWithChildren<object>) => {
    return <FlexContainer flexDirection="column">{children}</FlexContainer>
}

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer
