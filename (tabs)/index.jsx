import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

const SIZE = 10;

export default function App() {
  const createBoard = () =>
    Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(null));

  const [board, setBoard] = useState(createBoard());
  const [player, setPlayer] = useState("Nam");
  const [gameOver, setGameOver] = useState(false);

  const hasValidMove = (currentPlayer, currentBoard) => {
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (
          currentPlayer === "Nam" &&
          r + 1 < SIZE &&
          !currentBoard[r][c] &&
          !currentBoard[r + 1][c]
        )
          return true;

        if (
          currentPlayer === "Minh" &&
          c + 1 < SIZE &&
          !currentBoard[r][c] &&
          !currentBoard[r][c + 1]
        )
          return true;
      }
    }
    return false;
  };

  const handlePress = (row, col) => {
    if (gameOver) return;

    const newBoard = board.map(r => [...r]);
    let placed = false;

    if (
      player === "Nam" &&
      row + 1 < SIZE &&
      !board[row][col] &&
      !board[row + 1][col]
    ) {
      newBoard[row][col] = "Nam";
      newBoard[row + 1][col] = "Nam";
      placed = true;
    }

    if (
      player === "Minh" &&
      col + 1 < SIZE &&
      !board[row][col] &&
      !board[row][col + 1]
    ) {
      newBoard[row][col] = "Minh";
      newBoard[row][col + 1] = "Minh";
      placed = true;
    }

    if (placed) {
      setBoard(newBoard);
      const next = player === "Nam" ? "Minh" : "Nam";
      hasValidMove(next, newBoard)
        ? setPlayer(next)
        : setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(createBoard());
    setPlayer("Nam");
    setGameOver(false);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Domineering Game</Text>

      <Text style={styles.info}>
        {gameOver
          ? `Game Over! Player ${player === "Nam" ? "Minh" : "Nam"} wins`
          : `Current Player: ${player}`}
      </Text>

      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>

     
      <View style={styles.board}>
        {board.map((row, r) => (
          <View key={r} style={styles.row}>
            {row.map((cell, c) => (
              <TouchableOpacity
                key={`${r}-${c}`}
                onPress={() => handlePress(r, c)}
                style={[
                  styles.cell,
                  cell === "Nam" && styles.cellV,
                  cell === "Minh" && styles.cellH,
                ]}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  board: {
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
  },

  cell: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#999",
  },

  cellV: {
    backgroundColor: "#4caf50",
  },

  cellH: {
    backgroundColor: "#2196f3",
  },
});
