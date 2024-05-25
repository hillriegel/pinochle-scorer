export interface ScoreItem {
    class: string;
    points: number;
}

export interface PlayerScoreType {
    name: string;
    totalScore: number;
    trickPoints: number;
    scoreList: ScoreItem[];
}

export interface PlayerScoresData {
    player1: PlayerScoreType;
    player2: PlayerScoreType;
}

export interface ScoreData {
    player1: ScoreItem[];
    player2 : ScoreItem[];
}


export type PlayerId = 'player1' | 'player2';