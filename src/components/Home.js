import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import PollIcon from '@mui/icons-material/Poll';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import { button3DStyle } from '../styles/commonStyles';

function Home() {
  const features = [
    {
      icon: <CreateIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Create Polls',
      description: 'Create custom polls with multiple options in seconds. Add as many options as you need.'
    },
    {
      icon: <PollIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Vote Instantly',
      description: 'Participate in polls with a simple click. No registration required for voting.'
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Real-time Results',
      description: 'See poll results instantly with beautiful visualizations and detailed statistics.'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
      title: 'Advanced Analytics',
      description: 'Track voting trends, analyze participation rates, and gain valuable insights from your polls.'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '90vh' }}>
      {/* Hero Section - Fixed spacing */}
      <Box 
        sx={{ 
          bgcolor: '#1a237e',
          color: 'white',
          py: { xs: 4, md: 8 }, // Reduced padding for mobile
          mt: { xs: -2, md: 0 }, // Negative margin to remove gap on mobile
          mb: { xs: 4, md: 6 }   // Adjusted bottom margin
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                letterSpacing: '.3rem',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.75rem' } // Responsive font size
              }}
            >
              POLLIFY
            </Typography>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontWeight: 300
              }}
            >
              Create, Share, and Analyze Polls in Real-time
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/dashboard"
                variant="contained"
                size="large"
                sx={{ 
                  ...button3DStyle,
                  bgcolor: 'white', 
                  color: '#1a237e',
                  '&:hover': { 
                    ...button3DStyle['&:hover'],
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
              >
                View Polls
              </Button>
              <Button
                component={Link}
                to="/create-poll"
                variant="outlined"
                size="large"
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white'
                  }
                }}
              >
                Create Poll
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section - Added more spacing */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography 
          variant="h4" 
          component="h3" 
          gutterBottom 
          align="center"
          sx={{ 
            mb: { xs: 4, md: 6 }, 
            fontWeight: 600,
            fontSize: { xs: '1.75rem', md: '2.125rem' } // Responsive font size
          }}
        >
          Why Choose Pollify?
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}> {/* Increased grid spacing */}
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 }, // Increased padding
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2 // Added gap between elements inside Paper
                }}
              >
                <Box sx={{ mb: { xs: 2, md: 3 } }}> {/* Increased icon margin */}
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h4" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', md: '1.25rem' } // Responsive font size
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.875rem', md: '1rem' } // Responsive font size
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ 
        bgcolor: '#e3f2fd', 
        py: { xs: 6, md: 8 }, // Responsive padding
        mt: { xs: 4, md: 6 }  // Added top margin
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Ready to Create Your First Poll?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 4 }}
            >
              Join thousands of users who are already making better decisions with Pollify
            </Typography>
            <Button
              component={Link}
              to="/create-poll"
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#1a237e',
                '&:hover': { 
                  bgcolor: '#000051'
                }
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 