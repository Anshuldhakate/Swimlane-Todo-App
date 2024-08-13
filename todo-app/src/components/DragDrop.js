import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Box, Typography } from '@mui/material';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop() {
  const handleChange = (file) => {
    console.log(file); 
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Drag and Drop or Select a File
      </Typography>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </Box>
  );
}

export default DragDrop;
