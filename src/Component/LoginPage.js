import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function SignIn() {
    
    
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'primary.main',
                height: 700
            }}
        >

            <Box sx={{ mt: 20,width:'30%' }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{border:'1px solid white'}}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{border:'1px solid white'}}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor:'white', color:'blue' }}
                >
                    Sign In
                </Button>

            </Box>
        </Box>



    );
}