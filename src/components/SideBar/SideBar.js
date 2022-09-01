import TemporaryDrawer from "./Drawer";
import React, { useContext, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { FixedNavContainer, Logo, Nav, NavItem, FixedNavLink, ItemName } from './style';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

// icons SVG
import logo from '../../assets/logo.svg';
import home from '../../assets/icons/home.svg';
import project from '../../assets/icons/project.svg';
import team from '../../assets/icons/team.svg';
import person from '../../assets/icons/person.svg';

//MODO DARK
import homeActiveD from '../../assets/icons/home-active.svg';
import projectActiveD from '../../assets/icons/project-active.svg';
import teamActiveD from '../../assets/icons/team-active.svg';
import personActiveD from '../../assets/icons/person-active.svg';

//MODO LIGHT
import homeActiveL from '../../assets/icons/ICONS lightThema/home-activeL.svg';
import projectActiveL from '../../assets/icons/ICONS lightThema/project-activeL.svg';
import teamActiveL from '../../assets/icons/ICONS lightThema/team-activeL.svg';
import personActiveL from '../../assets/icons/ICONS lightThema/person-activeL.svg';

function SideBar(props) {
    const navigate = useNavigate();
    const signout = (e) => {
        e.preventDefault()
        localStorage.setItem('token', null)
    }
    let path = window.location.pathname;
    let pathId = path.substring(path.lastIndexOf('/') + 1);
    const location = useLocation();

    const [mode, setMode] = useState('dark');

    const [homeActive, setHomeActive] = useState(homeActiveD)
    const [projectActive, setProjectActive] = useState(projectActiveD)
    const [teamActive, setTeamActive] = useState(teamActiveD)
    const [personActive, setPersonActive] = useState(personActiveD)

    function MudaIcon() {
        if (mode === 'light') {
            setHomeActive(homeActiveD)
            setProjectActive(projectActiveD)
            setTeamActive(teamActiveD)
            setPersonActive(personActiveD)
        } else {
            setHomeActive(homeActiveL)
            setProjectActive(projectActiveL)
            setTeamActive(teamActiveL)
            setPersonActive(personActiveL)
        }
    }
    console.log(mode)



    if (path === '/' | localStorage.getItem("token") === null) {
        return;
    }

    return (
        <>
            <FixedNavContainer className="col-1 col-lg-1"
            >
                <Logo src={logo} alt="" />
                <Nav>
                    <NavItem>
                        <FixedNavLink to="/home" >
                            {location.pathname === "/home"
                                ? <>
                                    <img src={homeActive} alt="" />
                                    <ItemName style={{ color: "var(--corBotao)" }}>Home</ItemName>
                                </>
                                : <>
                                    <img src={home} alt="" />
                                    <ItemName>Home</ItemName>
                                </>
                            }
                        </FixedNavLink>
                    </NavItem>
                    <NavItem>
                        <FixedNavLink to="/projetos" >
                            {location.pathname === "/projetos" || location.pathname === `/projetos/${pathId}`
                                ? <>
                                    <img src={projectActive} alt="" />
                                    <ItemName style={{ color: "var(--corBotao)" }}>Projetos</ItemName>
                                </>
                                : <>
                                    <img src={project} alt="" />
                                    <ItemName>Projetos</ItemName>
                                </>
                            }
                        </FixedNavLink>
                    </NavItem>
                    <NavItem>
                        <FixedNavLink to="/equipes">
                            {location.pathname === "/equipes" || location.pathname === `/equipes/${pathId}`
                                ? <>
                                    <img src={teamActive} alt="" />
                                    <ItemName style={{ color: "var(--corBotao)" }}>Equipes</ItemName>
                                </>
                                : <>
                                    <img src={team} alt="" />
                                    <ItemName>Equipes</ItemName>
                                </>
                            }
                        </FixedNavLink>
                    </NavItem>
                    <NavItem>
                        <FixedNavLink to="/pessoas">
                            {location.pathname === "/pessoas" || location.pathname === `/pessoas/${pathId}`
                                ? <>
                                    <img src={personActive} alt="" />
                                    <ItemName style={{ color: "var(--corBotao)" }}>Pessoas</ItemName>
                                </>
                                : <>
                                    <img src={person} alt="" />
                                    <ItemName>Pessoas</ItemName>
                                </>
                            }
                        </FixedNavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <LogoutRoundedIcon sx={{ color: "#87888C" }} onClick={(e) => [signout(e), navigate('/')]}>
                            logout
                        </LogoutRoundedIcon>
                    </NavItem>
                    <NavItem>
                        <div>
                            <DarkModeToggle
                                style={{ display: 'flex' }}
                                mode={mode}
                                dark="Dark"
                                light="Light"
                                size="sm"
                                label='sm'
                                inactiveTrackColor="#e2e8f0"
                                inactiveTrackColorOnHover="#f8fafc"
                                inactiveTrackColorOnActive="#cbd5e1"
                                activeTrackColor="#334155"
                                activeTrackColorOnHover="#1e293b"
                                activeTrackColorOnActive="#0f172a"
                                inactiveThumbColor="#1e293b"
                                activeThumbColor="#e2e8f0"
                                onChange={(mode) => {
                                    setMode(mode)
                                    MudaIcon(mode)
                                    props.toogleTema()
                                }}
                            />
                        </div>
                    </NavItem>
                </Nav>
            </FixedNavContainer>
            <TemporaryDrawer />
        </>
    );
}

export default SideBar;