import React, { useState } from "react";
import * as S from './styled';
import useGithub from "../../hooks/githubHooks";

const Header = () =>
 {
    const { getUser } = useGithub();
    const [usernameForSeach, setUsernameForSeach] = useState();

    const submitGetUser = () => {
        if (!usernameForSeach) return;
       return getUser(usernameForSeach);
    };
    return (
        <header>
            <S.Wrapper>
                <input 
                type="text"
                 placeholder="Digite o username para pesquisa..." 
                 onChange={(event) => setUsernameForSeach(event.target.value)}
                 />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                    </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;