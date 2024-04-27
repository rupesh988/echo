import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/blogs');
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError(error.message || 'An error occurred while fetching blogs.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {blogs.map((blog) => (
          <Grid item key={blog._id}>
            <Card
              style={{
                height: '130px',
                width: '600px',
                display: 'flex',
                margin: '20px',
                backgroundColor: '#F7F1E5',
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(blog)}
            >
              <CardContent style={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {blog.title.slice(0, 30)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.context.slice(0, 60) + '...'}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/200x140/?${blog.title}`} // Use a random image URL generator like Unsplash
                alt={blog.title}
                style={{ width: '200px' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={!!selectedBlog}
        onClose={handleClose}
        aria-labelledby="blog-modal"
        aria-describedby="blog-details"
      >
        <Card
          style={{
            width: '80%',
            margin: 'auto',
            marginTop: '20vh',
            padding: '20px',
            position: 'relative',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {selectedBlog?.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: '1.2rem' }}>
              {selectedBlog?.context}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="300"
            image={`https://source.unsplash.com/random/300x200/?${selectedBlog?.title}`} // Use a random image URL generator like Unsplash
            alt={selectedBlog?.title}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <IconButton
            style={{ position: 'absolute', top: '10px', right: '10px', color: '#fff' }}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Card>
      </Modal>
    </div>
  );
};

export default BlogPage;
