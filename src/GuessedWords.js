import React from 'react';
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    let content = props.guessedWords.length === 0 
    ? <span data-test="component-instruction">Guess a word</span>
    : <span data-test="component-instruction"></span>

    return (
        <div data-test="component-guessed-word">
            {content}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default GuessedWords;