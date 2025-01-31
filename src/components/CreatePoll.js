import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { usePolls } from '../context/PollContext';
import { button3DStyle } from '../styles/commonStyles';

function CreatePoll() {
  const navigate = useNavigate();
  const { addPoll } = usePolls();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPoll({
      question,
      options: options.filter(option => option.trim() !== '')
    });
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Create New Poll
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            margin="normal"
            required
          />
          {options.map((option, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <TextField
                fullWidth
                label={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
              {options.length > 2 && (
                <IconButton
                  color="error"
                  onClick={() => handleRemoveOption(index)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAddOption}
            sx={{ mt: 2 }}
          >
            Add Option
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ 
              ...button3DStyle,
              mt: 3,
              bgcolor: '#1a237e',
              '&:hover': {
                ...button3DStyle['&:hover'],
                bgcolor: '#000051'
              }
            }}
          >
            Create Poll
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default CreatePoll; 