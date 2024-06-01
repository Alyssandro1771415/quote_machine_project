import React, { useState, useEffect } from "react";
import './Wrapper.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Wrapper = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: 'center', marginTop: '20px' }}>
      <blockquote id="text">
        "{quote}"
      </blockquote>
      <p id="author">Author: {author}</p>
      <a id="new-quote" className="button_action btn btn-danger btn-lg active" variant="danger" onClick={fetchQuote}>New Quote</a>
      <a
        id="tweet-quote"
        className="button_action btn btn-secondary btn-lg active"
        variant="dark"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
        target="_blank"
      >
        Tweet
      </a>
    </div>
  );
};

export default Wrapper;
