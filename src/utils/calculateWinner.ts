type Move = "piedra" | "papel" | "tijera";

export function calculateWinner(user: Move, cpu: Move): "user" | "cpu" | "tie" {
  const winsAgainst: Record<Move, Move> = {
    piedra: "tijera",
    tijera: "papel",
    papel: "piedra",
  };

  if (user === cpu) return "tie";
  return winsAgainst[user] === cpu ? "user" : "cpu";
}
