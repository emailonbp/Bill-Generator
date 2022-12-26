import { Box } from '@mui/system';
import React from 'react';
import Calendar from 'react-calendar';
import '../DashboardComponent/Dates.css';

function Dates() {
    return (
        <Box marginTop={3} marginRight={2}>
        <Calendar/>
        </Box>
    )
}

export default Dates