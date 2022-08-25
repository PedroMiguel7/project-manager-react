import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Fixed from './Fixed';
import { Drawer } from './style';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const handleDrawerToggle = () => {
        setState(!state);
    };

    /*const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };*/

    return (
        <div>
            <React.Fragment key="left">
                <IconButton onClick={() => setState(true)}>
                    <MenuRoundedIcon sx={{color: "#87888C", fontSize: "2rem"}} />
                </IconButton>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "rgba(30, 139, 195, 0.8)",
                            color: "rgba(225,249,27,1)",
                        }
                    }}
                    anchor='left'
                    open={state}
                    onClose={() => setState(false)}
                    onOpen={() => setState(true)}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
                    }}
                >
                    <Fixed />
                </Drawer>
            </React.Fragment>
        </div>
    );
}
