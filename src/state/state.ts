type Move = "piedra" | "papel" | "tijera";
type Winner = "user" | "cpu" | "tie";
type LastRound = { user: Move; cpu: Move; winner: Winner };
type Current = {
  userMove?: Move;
  cpuMove?: Move;
  winner?: Winner;
};
type Score = { user: number; cpu: number };
const GAMES_KEY = "score";

export const state = {
  data: {
    score: { user: 0, cpu: 0 } as Score,
    current: {} as Current,
  },
  lastRound: undefined as LastRound | undefined,
  listeners: [] as Array<() => void>,

  init() {
    const save = localStorage.getItem(GAMES_KEY);
    if (!save) {
      this.data = { score: { user: 0, cpu: 0 }, current: {} };
      return;
    }
    try {
      const parsed = JSON.parse(save);

      const user = Number(parsed?.user ?? parsed?.score?.user ?? 0);
      const cpu = Number(parsed?.cpu ?? parsed?.score?.cpu ?? 0);
      this.data = {
        score: { user, cpu },
        current: {},
      };
    } catch {
      this.data = { score: { user: 0, cpu: 0 }, current: {} };
    }
  },

  getState() {
    return this.data;
  },

  setState(newState: { score: Score; current: Current }) {
    this.data = newState;

    localStorage.setItem(GAMES_KEY, JSON.stringify(this.data.score));
    for (const cb of this.listeners) {
      cb();
    }
  },

  subscribe(callback: () => void) {
    this.listeners.push(callback);

    return () => {
      const i = this.listeners.indexOf(callback);
      if (i !== -1) this.listeners.splice(i, 1);
    };
  },
  //   Getter especificos
  getScore() {
    return this.data.score;
  },
  getCurrent() {
    return this.data.current;
  },
  //   Mutaciones de ronda
  setUserMove(move: Move) {
    this.data.current.userMove = move;
    for (const cb of this.listeners) cb();
  },
  setCpuMove(move: Move) {
    this.data.current.cpuMove = move;
    for (const cb of this.listeners) cb();
  },
  setWinner(winner: Winner) {
    this.data.current.winner = winner;
    for (const cb of this.listeners) cb();
  },
  clearCurrent() {
    this.data.current = {};
    for (const cb of this.listeners) cb();
  },
  commitRound() {
    const { current, score } = this.data;
    const { userMove, cpuMove, winner } = current;

    if (userMove && cpuMove && winner) {
      this.lastRound = { user: userMove, cpu: cpuMove, winner };
    } else {
      this.lastRound = undefined;
    }

    if (winner === "user") score.user++;
    else if (winner === "cpu") score.cpu++;

    localStorage.setItem(GAMES_KEY, JSON.stringify(score));

    this.data.current = {};

    for (const cb of this.listeners) cb();
  },
  getLastRound() {
    return this.lastRound;
  },
};
