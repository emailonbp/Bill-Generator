import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function NewCustomer() {
    return (
        <Item sx={{ bgcolor: 'white', width : '92%', marginTop: '30px' }}>
            <Typography><h4>NewCustomer</h4></Typography>
            <List >

                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Clothing, Barelly" />
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.pexels.com/photos/3791130/pexels-photo-3791130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Sweets, Agra" />
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.pexels.com/photos/3790805/pexels-photo-3790805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />

                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="Clothing, Lucknow" />
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="General Store, Lucknow" />
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>

            </List>
        </Item>
    );
}