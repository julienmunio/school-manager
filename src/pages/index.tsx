import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Fab from '@mui/material/Fab';
import Autocomplete from '@mui/material/Autocomplete';
// @ts-ignore
import ProTip from '../components/ProTip';
// @ts-ignore
import NavBar from '../components/NavBar';
// @ts-ignore
import Link from '../components/Link';
// @ts-ignore
import Copyright from '../components/Copyright';

const LEVEL = [
  { label: 'PS', year: 1994 },
  { label: 'MS', year: 1994 },
  { label: 'GS', year: 1994 },
]

export default function Index() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container maxWidth="sm">
      <NavBar />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          School Manager
        </Typography>
        {/* <Link to="/about" color="secondary"> */}
        {/* Go to the about page */}
        {/* </Link> */}
        <ProTip />
        <Box >
          <TextField sx={{ m: 1 }} id="Name" label="Name" variant="outlined" />
          <TextField sx={{ m: 1 }} id="FirstName" label="FirstName" variant="outlined" />
          <FormControl fullWidth sx={{ m: 1 }} >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>PS</MenuItem>
              <MenuItem value={2}>MS</MenuItem>
              <MenuItem value={3}>GS</MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            sx={{ m: 1 }}
            disablePortal
            id="combo-box-demo"
            options={LEVEL}
            renderInput={(params) => <TextField {...params} label="Level" />}
          />
        </Box>
        <Stack sx={{ mt: 4, mr: 1, ml: 1, mb: 3 }} spacing={2} direction="row">
          <Button variant="contained">Click here</Button>
          <Button variant="outlined">Not here</Button>
        </Stack>
        <Copyright />
      </Box>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
}
