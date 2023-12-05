import chalk from 'chalk'

class RPSHelper {
    static generateTable(moves) {
        const table = [];

        for (let i = 0; i < moves.length; i++) {
            const row = [moves[i]];
            for (let j = 0; j < moves.length; j++) {
                row.push(this.determineOutcome(i, j, moves.length));
            }
            table.push(row);
        }

        return table;
    }

    static determineOutcome(indexA, indexB, n) {
        const diff = (indexB - indexA + n) % n;
        if (diff === 0) {
            return 'Draw'
        } else if (diff <= n / 2) {
            return 'Win'
        } else {
            return 'Lose'
        }
    }

    static displayHelpTable(moves) {
        const table = this.generateTable(moves);
        const totalLength = 15 + (moves.length * 12);

        console.log(chalk.bold.blueBright('Results are from the user\'s point of view:'));
        console.log(chalk.bold.blueBright('which move would result in what? You Win / Lose / Draw\n'));
        this.printTableLine(totalLength);
        console.log(`| ${chalk.bold.red('v PC\\User >')}  | ${moves.map(move => chalk.bold.blueBright(move.padEnd(9))).join(' | ')}|`);
        this.printTableLine(totalLength);

        for (let i = 0; i < table.length; i++) {
            const row = table[i];
            console.log(`| ${chalk.bold.blueBright(row[0].padEnd(13))}| ${row.slice(1).map(cell => cell.padEnd(9)).join(' | ')}|`);
            this.printTableLine(totalLength);
        }
    }
      static printTableLine(totalLength) {
        const coloredLine = chalk.greenBright('+'.padEnd(totalLength, '*'));
        console.log(coloredLine);
    }
}

export default RPSHelper;