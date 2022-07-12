import React, {children} from "react";
import useGithub from "../../hooks/githubHooks";
import Header from "../header";
import * as S from "./styled"

const Layout = ( { children }) => {
    const { githuState } = useGithub();
    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    );
           
};

export default Layout;