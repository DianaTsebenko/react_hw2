import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.optionsList}>
    {options.map((option, index) => (
      <li>
        <button
          className={styles.optionBtn}
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

/* <button type="button" onClick={() => this.handleFeedback('good')}>
          Good
        </button>

        <button type="button" onClick={() => this.handleFeedback('neutral')}>
          Neutral
        </button>

        <button type="button" onClick={() => this.handleFeedback('bad')}>
          Bad
        </button> */
