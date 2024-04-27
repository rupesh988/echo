import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';


const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [abstract, setAbstract] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContextChange = (event) => {
    setContext(event.target.value);
  };

  const handleAbstractChange = (event) => {
    setAbstract(event.target.value);
  };

  const handlePostSubmit = () => {
    const postData = {
      name : 'user',
      title: title,
      context: context,
      abstract: abstract,
    };
    
    axios.post('http://localhost:3005/api/posts', postData)
      .then(response => {
        console.log('Post submitted successfully');
        // Reset form after submission
        setTitle('');
        setContext('');
        setAbstract('');
        setImageFile(null);
      })
      .catch(error => {
        console.error('Error submitting post:', error);
      });
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#D2E3C8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card elevation={5} style={{ backgroundColor: '#D4E7C5' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom style={{ color: '#5F6F52' }}>
                Create an Echo
              </Typography>
              <TextField
                id="title"
                label="Title"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                variant="filled"
                margin="normal"
                InputProps={{ style: { '&:focus': { borderColor: 'red' } } }}
              />
              <TextField
                id="abstract"
                label="Abstract"
                fullWidth
                value={abstract}
                onChange={handleAbstractChange}
                variant="filled"
                margin="normal"
                
                InputProps={{ style: { '&:focus': { borderColor: '#5F6F52' } } }}
              />
              <TextField
                id="context"
                label="Context"
                multiline
                rows={4}
                fullWidth
                value={context}
                onChange={handleContextChange}
                variant="filled"
                margin="normal"
                InputProps={{ style: { '&:focus': { borderColor: 'red' } } }}
              />
              <input
                accept="image/*"
                id="image"
                type="file"
                style={{ display: 'none' }}
                onChange={null}
              />
              <label htmlFor="image">
                <Button variant="filled" component="span"  style={{ marginTop: '20px', backgroundColor: '#5F6F52', color: '#FFFFFF' }}>
                  Choose Image
                </Button>
              </label>
              {imageFile && <Typography variant="body1">{imageFile.name}</Typography>}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePostSubmit}
                style={{ marginTop: '20px', backgroundColor: '#5F6F52', color: '#FFFFFF' }}
              >
                Echo
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePostPage;
