import React, { ReactNode } from 'react'
import { Box, Drawer } from '@mui/material'


interface SliderDrawerProps {
    children: ReactNode;
    drawerOpen: boolean;
    drawerClose: (val: boolean) => void;
    anchor?: "left" | "bottom" | "right" | "top" | undefined;
    drawerWidth?: number;
}
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SlideDrawer({ children, drawerOpen, drawerClose, anchor = 'left', drawerWidth }: SliderDrawerProps) {
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                drawerClose(false)
            };
    return (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Drawer
                sx={{
                    width: drawerOpen && 450,
                    height: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerOpen && 450,
                        height: '100%',
                        boxSizing: 'border-box',
                        borderWidth: 0
                    },
                    '& .MuiDrawer-root': {
                        position: 'absolute',
                        zIndex: 30
                    },
                    '& .MuiPaper-root': {
                        position: 'absolute',
                        zIndex: 30
                    },

                } as any}
                // variant="persistent"
                anchor={anchor}
                open={drawerOpen}
                className='w-[100vw] '
            >

                {children}
            </Drawer>
        </Box>
    )
}
