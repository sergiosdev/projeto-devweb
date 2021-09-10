import React, { useState } from 'react';
import Logo from '../../assets/imgs/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <img src={Logo} alt="Sistema ERP" width="40px"/>
      </a>
      
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <span className="icon-bar"></span>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link text-info" href="/contact"><FontAwesomeIcon icon={faHome} size ='sm' className="icone"/> <span className="titleIcon"> Home </span> </a>
        <a className="nav-link text-info" href="/login"> <FontAwesomeIcon icon={faUser} size ='sm' className="icone"/> <span className="titleIcon"> Usuários</span> </a>        
        <a className="nav-link text-info" href="/login"><FontAwesomeIcon icon={faBook} size ='sm' className="icone"/> <span className="titleIcon"> Sobre </span> </a>        
        <a className="nav-link text-info" href="/login"><FontAwesomeIcon icon={faTimes} size ='sm' className="icone"/> <span className="titleIcon"> Logout </span></a> 
      </div>
     
    </nav>
   
  );
}



export default NavBar; /* Visível */
