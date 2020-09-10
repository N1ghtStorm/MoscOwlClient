export type MemberTournament = {
    score: number;
    owlScore: number;
    statusId: number;
    memberId: number;
    tournamentId: number;
}

export type Tournament = {
    tournamentId: number;
    name: string;
    date: string;
    seasonId: number;
}