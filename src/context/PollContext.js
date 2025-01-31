import { createContext, useState, useContext } from 'react';

const PollContext = createContext();

export function PollProvider({ children }) {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: "What's your favorite programming language?",
      options: [
        { text: "JavaScript", votes: 150 },
        { text: "Python", votes: 100 },
        { text: "Java", votes: 80 },
        { text: "C++", votes: 60 }
      ]
    },
    {
      id: 2,
      question: "Which frontend framework do you prefer?",
      options: [
        { text: "React", votes: 200 },
        { text: "Vue", votes: 150 },
        { text: "Angular", votes: 100 }
      ]
    }
  ]);

  const addPoll = (newPoll) => {
    setPolls(prevPolls => [{
      id: prevPolls.length + 1,
      question: newPoll.question,
      options: newPoll.options.map(option => ({
        text: option,
        votes: 0
      }))
    }, ...prevPolls]);
  };

  const votePoll = (pollId, optionIndex) => {
    setPolls(prevPolls => prevPolls.map(poll => {
      if (poll.id === parseInt(pollId)) {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          votes: updatedOptions[optionIndex].votes + 1
        };
        return { ...poll, options: updatedOptions };
      }
      return poll;
    }));
  };

  return (
    <PollContext.Provider value={{ polls, addPoll, votePoll }}>
      {children}
    </PollContext.Provider>
  );
}

export function usePolls() {
  return useContext(PollContext);
} 