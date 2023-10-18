import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    description: '',
    category: 'property',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleCancel = () => {
    // Clear all form fields and reset to initial values
    setFormData({ ...initialFormData });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Create Ad</Typography>
        <Box mt={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <br/>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <MenuItem value="property">Property</MenuItem>
              <MenuItem value="household">Household</MenuItem>
              <MenuItem value="vehicle">Vehicle</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="error">
            Submit
          </Button>
          <Button variant="contained" color="inherit" onClick={handleCancel} style={{ marginLeft: 10 }}>
            Reset
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Form;
