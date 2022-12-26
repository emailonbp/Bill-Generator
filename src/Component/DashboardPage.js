import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from './DashboardComponent/Sidebar/Sidebar';
import Middle from './DashboardComponent/Middle';
import Dates from './DashboardComponent/Dates';


export default function DashboardPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar/>
        </Grid>
        <Grid item xs={6}>
          <Middle/>
        </Grid>
        <Grid item xs={3}>
         <Dates />
        </Grid>
      </Grid>
    </Box>
  );
}
