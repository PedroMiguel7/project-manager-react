import React, { Component } from "react";
import Rout from "./routes";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AuthProvider } from './pages/Login/contexts/auth';

class App extends Component {
    render() {
        return (
            <AuthProvider>
                <DndProvider backend={HTML5Backend}>
                    <Rout />
                </DndProvider>
            </AuthProvider>
        );
    }
}

export default App;