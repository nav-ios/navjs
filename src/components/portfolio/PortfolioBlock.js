import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, source, title } = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box 
                component={'img'} 
                src={image} 
                alt={'mockup'}
                sx={{
                    width: '640px',   // Set the width to 320px
                    height: '360px',  // Set the height to 180px
                    objectFit: 'cover' // Ensures the image covers the box without distortion
                }}
            />
            <h1 style={{ fontSize: '2rem' }}>{title}</h1>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={live} title={'Watch Video'} icon={'fa fa-youtube'} />
                </Box>
                {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
                </Box> */}
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
