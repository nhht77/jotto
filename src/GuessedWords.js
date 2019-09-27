import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  let guessedWordsRow = props.guessedWords.map((val, idx) => (
    <tr data-test="guessed-words-node" key={idx}>
      <td>{val.guessedWord}</td>
      <td>{val.letterMatchCount}</td>
    </tr>
  ));

  let content =
    props.guessedWords.length === 0 ? (
      <span data-test="component-instruction">Guess a word</span>
    ) : (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </table>
      </div>
    );

  return <div data-test="component-guessed-word">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
