import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreatePoll from './components/CreatePoll';
import PollDetails from './components/PollDetails';
import { PollProvider } from './context/PollContext';
import { Box } from '@mui/material';

function App() {
  return (
    <PollProvider>
      <Router>
        <Box 
          sx={{ 
            minHeight: '100vh',
            bgcolor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Navbar />
          <Box sx={{ pt: '64px', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-poll" element={<CreatePoll />} />
              <Route path="/poll/:id" element={<PollDetails />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </PollProvider>
  );
}

export default App;
