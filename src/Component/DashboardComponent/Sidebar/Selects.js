import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selects() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 230 }}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}

                >
                    <MenuItem value={10}>Subham Gupta</MenuItem>
                    <MenuItem value={20}>Rahul Singh</MenuItem>
                    <MenuItem value={30}>Shiva Pathak</MenuItem>
                    <MenuItem value={40}>Rakesh Pandey</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}