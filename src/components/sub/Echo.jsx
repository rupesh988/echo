import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs'); // Replace '/api/blogs' with your actual backend API endpoint
        setBlogs(response.data); // Assuming the backend returns an array of blog objects
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {blogs.map((blog) => (
          <Grid item key={blog.id}>
            <Card style={{ height: '130px', width: '600px', display: 'flex', margin: '20px', backgroundColor: '#F7F1E5' }}>
              <CardContent style={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.content.slice(0, 40) + '...'}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={blog.imageUrl}
                alt={blog.title}
                style={{ width: '200px' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogPage;
