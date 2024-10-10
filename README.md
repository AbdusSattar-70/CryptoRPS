<a name="readme-top"></a>

<div align="center">
  <h3><b>CriptoRPS</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🚀 Introduction](#introduction)
  - [🎮 Game Overview](#game-overview)
  - [🔑 HMAC Generation](#hmac-generation)
- [💻 Getting Started](#getting-started)
  - [🛠 Prerequisites](#prerequisites)
  - [🚀 Installation](#installation)
- [🎮 Gameplay](#gameplay)
  - [🔄 How to Play](#how-to-play)
  - [📊 Game Logic](#game-logic)
- [👤 Author](#author)
- [📝 License](#license)

<!-- ABOUT THE PROJECT -->

## 📖 About the Project <a name="about-project"></a>

### 🚀 Introduction <a name="introduction"></a>

Welcome to CriptoRPS - a Rock, Paper, Scissors game with a cryptographic twist! This command-line game is built using JavaScript and incorporates HMAC (Hash-based Message Authentication Code) for enhanced security and transparency.

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<details>
  <summary>BUILT WITH</summary>
  <ul>
    <li><a href=#>console app</a></li>
    <li>Node.js</li>
    <li>JavaScript.js</li>
  </ul>
</details>
<details>
  <summary>Run environment</summary>
  <ul>
    <li><a href=#>console app</a></li>
     <li>Node.js</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
 <li>no Database</li>
  </ul>
</details>

### 🎮 Game Overview <a name="game-overview"></a>

CriptoRPS allows players to engage in a classic Rock, Paper, Scissors game while ensuring the integrity of the moves through HMAC. The game generates a unique HMAC key for each session, adding an extra layer of security and transparency.

### 🔑 HMAC Generation <a name="hmac-generation"></a>

The game utilizes cryptographic functions to generate HMAC keys and hash moves, ensuring that the game's outcome is secure and verifiable.

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### 🛠 Prerequisites <a name="prerequisites"></a>

To run CriptoRPS, you need the following:

- Node.js installed on your machine

### 🚀 Installation <a name="installation"></a>

1. Clone the repository:

   ```bash
    git clone https://github.com/AbdusSattar-70/criptoRPS.git
    cd criptoRPS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

<!-- GAMEPLAY -->

## 🎮 Gameplay <a name="gameplay"></a>

### 🔄 How to Play <a name="how-to-play"></a>

1. Run the game:

   ```bash

   node main.js MOVE1 MOVE2 MOVE3

   ```

   ## Example Valid Moves:

   - node main.js MOVE1 MOVE2 MOVE3
   - node main.js STONE PAPER SCISSORS
   - node main.js STONE SPOCK PAPER LIZARD SCISSORS
   - node main.js Rock Paper STONE LIZARD SPOCK
   - node main.js A B C D E F G
   - node main.js 1 2 3 4 5 6 7 8 9

   ## Examples of Invalid moves:

   - node main.js
   - node main.js Rock
   - node main.js A A A
   - node main.js Rock Paper Paper
   - node main.js Rock Paper Scissors Lizard Scissors
   - node main.js 1 2 3 4 5 6 7 8

2. Follow the on-screen instructions to make your move.

3. Enjoy the game and verify its transparency using HMAC!

### 📊 Game Logic <a name="game-logic"></a>

The game follows a standard Rock, Paper, Scissors logic with an added layer of cryptographic security. The HMAC key ensures that the moves are tamper-proof and verifiable.

## HELP TABLE

Results are from the user's point of view:
which move would result in what? You Win / Lose / Draw

| v PC\User > | ROCK | STONE | LIZARD | SPOCK | PAPER | 6TH  | 7TH  |
| ----------- | ---- | ----- | ------ | ----- | ----- | ---- | ---- |
| ROCK        | Draw | Win   | Win    | Win   | Lose  | Lose | Lose |
| STONE       | Lose | Draw  | Win    | Win   | Win   | Lose | Lose |
| LIZARD      | Lose | Lose  | Draw   | Win   | Win   | Win  | Lose |
| SPOCK       | Lose | Lose  | Lose   | Draw  | Win   | Win  | Win  |
| PAPER       | Win  | Lose  | Lose   | Lose  | Draw  | Win  | Win  |
| 6TH         | Win  | Win   | Lose   | Lose  | Lose  | Draw | Win  |
| 7TH         | Win  | Win   | Win    | Lose  | Lose  | Lose | Draw |

<!-- AUTHOR -->

## 👥 Authors <a name="authors"></a>

## 👤 Abdus Sattar

- GitHub: [AbdusSattar-70](https://github.com/AbdusSattar-70)
- Twitter: [Abdus Sattar](https://twitter.com/Abdus_Sattar70)
- LinkedIn: [Abdus Sattar](https://www.linkedin.com/in/abdus-sattar-a41a26215/)

## Future Features

- UI LOOK
- INTERACTIVE GAME

## Contributing

Everybody is welcome to suggest changes, contribute, report issues, and request features in this project. To do so, fork this repository, create a new branch, and open a pull request from your branch.

Feel free to check the [issues page](../../issues/).

## Show Your Support

If you like this project, please give it a star ⭐️. You can use it following the [MIT License](./LICENSE).

## Acknowledgments

I would like to thank [Itransition-Group](https://www.itransition.com/) for the opportunity to learn and use their platform and services for free.

## License

This project is under the [MIT License](./LICENSE).
