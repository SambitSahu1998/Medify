import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../image/logo.png";

const NavBar = () => {
    const handleClick= () => {
        console.log("clicked");
    };
  return (
    <Nav>
      <Logo>
        <img src={image} alt="Not Avaliable" style={{marginRight:"5px"}}/>
        Medify
      </Logo>
      <NavLinks>
        <NavLink to="/finddoctor">Find Doctors</NavLink>
        <NavLink to="/hospitals">Hospitals</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
        <NavLink to="/surgeries">Surgeries</NavLink>
        <NavLink to="/softwareforproviders">Software for Provider</NavLink>
        <NavLink to="/facilities">Facilities</NavLink>
        <Button onClick={handleClick}>My Bookings</Button>
      </NavLinks>
    </Nav>
  );
};

const Button = styled.button`
  border-radius: 8px;
  background-color: #2aa8ff;
  color: #ffffff;
  font-family: Poppins;
  font-weight: 500;
  padding: 8px 10px;
  border:none;
  cursor:pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: Poppins;
  display:flex;
  align-items:center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items:center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color:#102851;
  text-decoration: none;
  font-size: 14px;
  border-radius:none;
  transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    color: #0d1e3d;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default NavBar;
