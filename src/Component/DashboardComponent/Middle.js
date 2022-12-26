import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ReportIcon from '@mui/icons-material/Report';
import NewCustomer from './NewCustomer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
    return (
        <>
            <div>
                <Stack direction="row" spacing={3} marginTop={3}>
                    <Item sx={{ width: '20%' }}>
                        <Avatar sx={{ marginLeft: '35px' }}><PeopleAltIcon /></Avatar>
                        <Typography>128</Typography><Typography>Customers</Typography>
                    </Item>
                    <Item sx={{ width: '20%', bgcolor: '#482d8a' }}>
                        <Avatar sx={{ marginLeft: '35px', color: 'white' }}><AssignmentTurnedInIcon /></Avatar>
                        <Typography sx={{ color: 'white' }}>128</Typography>
                        <Typography sx={{ color: 'white' }}>Invoices</Typography>
                    </Item>
                    <Item sx={{ width: '20%' }}>
                        <Avatar sx={{ marginLeft: '35px' }}><NotificationsActiveIcon /></Avatar>
                        <Typography>128</Typography>
                        <Typography>Products</Typography>
                    </Item>
                    <Item sx={{ width: '20%' }}>
                        <Avatar sx={{ marginLeft: '35px' }}><ReportIcon /></Avatar>
                        <Typography>128</Typography>
                        <Typography>Reports</Typography>
                    </Item>
                </Stack>
            </div>

            <NewCustomer />
        </>

    );
}