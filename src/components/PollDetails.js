import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Box,
  Paper,
  LinearProgress,
  Alert
} from '@mui/material';
import { usePolls } from '../context/PollContext';
import { button3DStyle } from '../styles/commonStyles';

function PollDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { polls, votePoll } = usePolls();
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState('');

  const poll = polls.find(p => p.id === parseInt(id));

  if (!poll) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">Poll not found</Alert>
      </Container>
    );
  }

  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption && selectedOption !== 0) {
      setError('Please select an option');
      return;
    }
    votePoll(id, selectedOption);
    setHasVoted(true);
    setError('');
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {poll.question}
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        {!hasVoted ? (
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={selectedOption}
                onChange={(e) => setSelectedOption(Number(e.target.value))}
              >
                {poll.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option.text}
                  />
                ))}
              </RadioGroup>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ 
                  ...button3DStyle,
                  mt: 2,
                  bgcolor: '#1a237e',
                  '&:hover': {
                    ...button3DStyle['&:hover'],
                    bgcolor: '#000051'
                  }
                }}
                fullWidth
              >
                Submit Vote
              </Button>
            </FormControl>
          </form>
        ) : (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Results
            </Typography>
            {poll.options.map((option, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">
                    {option.text}
                  </Typography>
                  <Typography variant="body1" color="primary">
                    {option.votes} votes ({Math.round((option.votes / totalVotes) * 100)}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={(option.votes / totalVotes) * 100}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
            ))}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">
                Total votes: {totalVotes}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default PollDetails; 