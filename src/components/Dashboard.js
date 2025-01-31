import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { usePolls } from '../context/PollContext';
import { button3DStyle } from '../styles/commonStyles';

function Dashboard() {
  const { polls } = usePolls();

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontSize: { xs: '1.75rem', md: '2.125rem' },
          fontWeight: 600,
          mb: { xs: 3, md: 4 }
        }}
      >
        Active Polls
      </Typography>
      <Grid container spacing={3}>
        {polls.map((poll) => (
          <Grid item xs={12} md={6} key={poll.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <CardContent>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {poll.question}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {poll.options.length} options available
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Total votes: {poll.options.reduce((sum, option) => sum + option.votes, 0)}
                </Typography>
                <Button
                  component={Link}
                  to={`/poll/${poll.id}`}
                  variant="contained"
                  fullWidth
                  sx={{ 
                    ...button3DStyle,
                    mt: 2,
                    bgcolor: '#1a237e',
                    '&:hover': {
                      ...button3DStyle['&:hover'],
                      bgcolor: '#000051'
                    }
                  }}
                >
                  Vote Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard; 