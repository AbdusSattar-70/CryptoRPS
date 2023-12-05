import chalk from 'chalk';

// internal import
import HMACGenerator from './HMACGenerator.js';
import GameLogic from './gameLogic.js';
import RPSGame from './RPSGame.js';
import CryptoProvider from './CryptoProvider.js';
import GameController from './GameController.js';
import InvalidInputError from './InvalidInputError.js';

async function main() {
  const moves = process.argv.slice(2);

  try {
    if (moves.length < 3 || moves.length % 2 !== 1 || new Set(moves).size !== moves.length) {
      throw new InvalidInputError(chalk.red(`
    Invalid arguments: The number of moves can be arbitrary.
    And an odd number (at least greater than or equal to 3) of non-repeating strings as moves.

    Example Valid Moves:
    - node main.js MOVE1 MOVE2 MOVE3
    - node main.js STONE PAPER       SCISSORS
    - node main.js STONE SPOCK PAPER    LIZARD SCISSORS
    - node main.js Rock Paper STONE LIZARD SPOCK
    - node main.js A B C D E F   G
    - node main.js 1 2 3 4    5 6 7 8 9


    Examples of Invalid moves:
    - node main.js
    - node main.js Rock
    - node main.js A A A
    - node main.js Rock Paper Paper
    - node main.js Rock Paper Scissors Lizard Scissors
    - node main.js 1 2 3 4 5 6 7 8
    `));
    }

    const cryptoProvider = new CryptoProvider();
    const hmacGenerator = new HMACGenerator(cryptoProvider);
    const gameLogic = new GameLogic(moves);

    const game = new RPSGame(moves, hmacGenerator, gameLogic);
    const gameController = new GameController(game, moves);

    await gameController.playGame();
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
  }
}

main();
