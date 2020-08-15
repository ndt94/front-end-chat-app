import React from 'react';
import PropTypes from 'prop-types';
import './_ChatHistory.scss';

const ChatHistory = (props) => {
  const { chatHistory } = props;
  console.log('chatHistory', chatHistory);
  return (
    <div className='chatHistory'>
      <h2>Chat History</h2>
      {chatHistory.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}
    </div>
  );
};

ChatHistory.propTypes = {
  chatHistory: PropTypes.array,
};

export default ChatHistory;
