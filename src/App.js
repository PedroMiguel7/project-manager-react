import React, { useState } from "react";
import Rout from "./routes";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AuthProvider } from './pages/Login/contexts/auth';
import GlobalStyles from "./styles/global"
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/Theme';
import useTema from "./components/SideBar/Teminha";

import SideBar from './components/SideBar/SideBar';

export default function App() {
    const [ thema, setThema ] = useState(localStorage.getItem('corTema'))

    return (
        <AuthProvider>
            <ThemeProvider theme={
                thema === 'light'
                    ? lightTheme
                    : darkTheme
            }>
                <DndProvider backend={HTML5Backend}>
                    <Rout SideBar={<SideBar />}/>
                    <GlobalStyles />
                </DndProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}