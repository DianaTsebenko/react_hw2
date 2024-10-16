import React from 'react';
import ReactDOM from 'react-dom/client';
import FeedbackWidget from 'components/Feedback/Feedback';
import Phonebook from 'components/Phonebook/Phonebook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>Task 1</h2>
    <FeedbackWidget />
    <h2>Task 2</h2>
    <Phonebook />
  </React.StrictMode>
);
