import chalk from 'chalk';
import GameLogic from '../gameLogic';
import InvalidInputError from '../InvalidInputError';

describe('GameLogic', () => {
  // Test case for a draw
  test('should return draw when userMove equals computerMove', () => {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const gameLogic = new GameLogic(moves);
    const result = gameLogic.determineWinner('Rock', 'Rock');
    expect(result).toMatch(chalk.yellow('It\'s a draw!'));
  });

  // Test case for user winning
  test('should return "You won!" when userMove is a winning move', () => {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const gameLogic = new GameLogic(moves);
    const result = gameLogic.determineWinner('Rock', 'Scissors');
    expect(result).toMatch(chalk.green('You won!'));
  });

  // Test case for computer winning
  test('should return "Computer won!" when computerMove is a winning move', () => {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const gameLogic = new GameLogic(moves);
    const result = gameLogic.determineWinner('Rock', 'Paper');
    expect(result).toMatch(chalk.red('Computer won!'));
  });

  test('determineWinner should throw InvalidInputError for invalid moves', () => {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const gameLogic = new GameLogic(moves);

    expect(() => gameLogic.determineWinner('InvalidMove', 'Rock')).toThrow(InvalidInputError);
  });
});
