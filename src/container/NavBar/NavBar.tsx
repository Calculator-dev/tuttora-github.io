import React, { useState } from 'react';
import {
    Language,
    LanguagueAndLoginContainer,
    Link,
    ListContainer,
    Login,
    Logo,
    MobileMenu,
    MobileMenuContainer,
    MobileMenuItems,
    NavBarContainer,
    NavBarItems,
} from './NavBar.styled';
import logo from '../../assets/icons/tuttora-logo.svg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar: React.FC = () => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <NavBarContainer>
                <Logo
                    alt="tuttora-logo"
                    src={logo}
                    onClick={() => navigate('/')}
                />
                <ListContainer>
                    <NavBarItems>
                        <Link to="/">O nama</Link>
                    </NavBarItems>
                    <NavBarItems>
                        <Link to="/">Tuttora tim</Link>
                    </NavBarItems>
                    <NavBarItems>
                        <Link to="/">Pronađi instrukcije</Link>
                    </NavBarItems>
                    <NavBarItems>
                        <Link to="/">Postani Instruktor</Link>
                    </NavBarItems>
                    <NavBarItems>
                        <Link to="/">Kontakt</Link>
                    </NavBarItems>
                </ListContainer>
                <LanguagueAndLoginContainer>
                    <Language>BHS</Language>
                    <Login>
                        <AiOutlineUser
                            width="30px"
                            height="30px"
                            style={{ marginRight: '10px' }}
                        />
                        Prijava
                    </Login>
                </LanguagueAndLoginContainer>
                <MobileMenuContainer>
                    {!openBurgerMenu && (
                        <GiHamburgerMenu
                            style={{
                                fill: 'white',
                                width: '30px',
                                height: '30px',
                            }}
                            onClick={() => setOpenBurgerMenu(true)}
                        />
                    )}
                    {openBurgerMenu && (
                        <MobileMenu>
                            <AiOutlineClose
                                style={{
                                    height: '40px',
                                    width: '40px',
                                }}
                                onClick={() => setOpenBurgerMenu(false)}
                            />
                            <MobileMenuItems to="/">O Nama</MobileMenuItems>
                            <MobileMenuItems to="/">
                                Tuttora Tim
                            </MobileMenuItems>
                            <MobileMenuItems to="/">
                                Pronađi Instruktora
                            </MobileMenuItems>
                            <MobileMenuItems to="/">
                                Postani Instruktor
                            </MobileMenuItems>
                            <MobileMenuItems to="/">Kontakt</MobileMenuItems>
                        </MobileMenu>
                    )}
                </MobileMenuContainer>
            </NavBarContainer>
        </>
    );
};
