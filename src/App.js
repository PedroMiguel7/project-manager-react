import React, { Component } from "react";
import Rout from "./routes";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

class App extends Component {
    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Rout />
            </DndProvider>
        );
    }
}

export default App;