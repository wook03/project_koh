import React from "react";
import axios from "axios";
import {HeaderNavdiv,Search,MainTitle,MenuTitle,SearchForm,LectureRight} from './StyledComponent'
import { Link } from "react-router-dom";
import searchimg from './img/searchimg.png'
import user from './img/user.png'
import wallet from './img/wallet.png'
import { useWeb3React } from '@web3-react/core';
import { injected } from './lib/connectors';
import { isNoEthereumObject } from "./lib/errors";
import SearchList from "./SearchList";
function HeaderNav(props) {

  const { chainId, account, active, activate, deactivate } = useWeb3React();
  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }
    activate(injected, (error) => {
      if (isNoEthereumObject(error))
        window.open("https://metamask.io/download.html");
    });
  };
  
  return (
    <>
    <HeaderNavdiv>
      <MainTitle>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          KOH
        </Link>
      </MainTitle>

      <Search className="searchbox">
        <div className="searchimg">
          <img src={searchimg} />
        </div>
        <SearchList >
        </SearchList>
      </Search>

      <MenuTitle>강의실</MenuTitle>
      <MenuTitle>강의실</MenuTitle>
      <MenuTitle>강의실</MenuTitle>

      <div className="userimg">
          <img src={user} />
        </div>
        <div className="walletimg" onClick={handleConnect} style={{cursor:"pointer"}}>
          <img src={wallet} />
        </div>
    </HeaderNavdiv>
  
    </>
  );
}
export default HeaderNav;

