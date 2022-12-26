import { Stack, TextField, Typography, MenuItem } from '@mui/material'
import React from 'react'

const currencies = [
  {
    value: 'USD',
    label: 'Medical Store',
  },
  {
    value: 'EUR',
    label: 'General Store',
  },
  {
    value: 'BTC',
    label: 'Sharma Store',
  },
  
];


function CreateNewCustomer() {
  return (
    <>
    <Typography><h4>Create New Customer</h4></Typography>
      <Typography>Store info</Typography>
      <Stack direction="row" spacing={2} marginTop={2} marginBottom={4}>
        <TextField
          required
          id="outlined-required"
          label="Name of Store"
          defaultValue="Gupta Store"
          color="secondary"  
          size='small' 
          focused       
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Store Type"
          color="secondary"
          size='small' 
          defaultValue="upta Store"
          focused

          sx={{ width: '25ch' }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="GST Number"
          color="secondary"
          size='small'
          focused
          defaultValue="GHNLOP34598"
        />
        <TextField
          required
          id="outlined-required"
          label="Store Logo"
          color="secondary"
          focused
          size='small' 
          sx={{ width: '25ch' }}
        />
      </Stack>
      <Stack direction="row" spacing={2} marginTop={2} marginBottom={8}>
        <TextField
          required
          id="outlined-required"
          label="Store Address Line 1"
          size='small' 
          defaultValue="Ground floor"
          focused
          color="secondary"
        />
        <TextField
          required
          id="outlined-required"
          label="Store Address Line 2"
          color="secondary"
          focused
          size='small' 
          defaultValue="Indira Nagar"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Store City"
          color="secondary"
          focused
          size='small' 
          defaultValue="Gupta Store"
          sx={{ width: '25ch' }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Store State"
          color="secondary"
          focused
          size='small' 
          defaultValue="Gupta Store"
          sx={{ width: '25ch' }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Typography>Basic info</Typography>
      <Stack direction="row" spacing={2} marginTop={2} marginBottom={6}>
        <TextField
          required
          id="outlined-required"
          label="Customer Name"
          size='small' 
          color="secondary"
          focused
          defaultValue="Subham Gupta"
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Phone"
          color="secondary"
          focused
          size='small' 
          defaultValue="+91 9838178212"
        />
        <TextField
          required
          id="outlined-required"
          label="Customer Email"
          color="secondary"
          focused
          size='small' 
          defaultValue="kalpvaig@gmail.com"
        />
      </Stack>
      <Typography>Subscription info</Typography>
      <Stack direction="row" spacing={2} marginTop={2}>
        <TextField
          required
          id="outlined-required"
          label="Date of Subscription"
          color="secondary"
          focused
          size='small' 
          defaultValue="dd/mm/yyyy"
        />
        <TextField
          required
          id="outlined-required"
          label="Tax Type"
          color="secondary"
          focused
          size='small' 
          defaultValue="18% All Product"
        />
      </Stack>
    </>
  )
}

export default CreateNewCustomer