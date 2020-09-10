import React from 'react';
import { MemberTournament, Tournament } from '../../../../../../../Types/Types';
import TournamentTableItem from './TournamentTableItem/TournamentTableItem';

type TournamentTableItemsProps = {
    tournaments: Tournament[];
    memberTournaments: MemberTournament[];
}

const getTournamentsTable = (tournaments: Tournament[], memberTournaments: MemberTournament[]) => {
    return tournaments.map(x => <TournamentTableItem date = {x.date} 
                                                          memberTournaments = {memberTournaments.filter(z => z.tournamentId === x.tournamentId)}/>)
}

const TournamentTableItems: React.FC<TournamentTableItemsProps> = (props) => {

    
    let tempTournaments: Tournament[] = [
        {
            tournamentId: 1,
            name: "СУПЕР ИМЯ",
            date: "МАЙ 2020",
            seasonId: 1
        },
        {
            tournamentId: 2,
            name: "СУПЕР ИМЯ",
            date: "АПРЕЛЬ 2020",
            seasonId: 1
        },

    ]

    let memTourTempArray: MemberTournament[] = [
        {
            score: 12,
            owlScore: 6,
            statusId: 1,
            memberId: 1,
            tournamentId:1
        },
        {
            score: 6,
            owlScore: 2,
            statusId: 1,
            memberId: 2,
            tournamentId:1
        },
        {
            score: 9,
            owlScore: 6,
            statusId: 1,
            memberId: 3,
            tournamentId:2
        },
        {
            score: 3,
            owlScore: 0,
            statusId: 1,
            memberId: 4,
            tournamentId:2
        }
    ];



    return (
        <>
        {getTournamentsTable(tempTournaments, memTourTempArray)}
        </>
    );
}

export default TournamentTableItems;