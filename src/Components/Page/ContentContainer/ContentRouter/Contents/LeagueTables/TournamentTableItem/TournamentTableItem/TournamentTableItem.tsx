import React from 'react';
import { MemberTournament } from '../../../../../../../../Types/Types';
import { Table } from 'react-bootstrap';

type TournamentTableItemProps = {
    memberTournaments: MemberTournament[];
    date: string;
}

const TournamentTableItem: React.FC<TournamentTableItemProps> = (props) => {


    let rows = props.memberTournaments.map(x => 
        <tr>
            <td>
                {/* временно: */}
                {x.memberId}
            </td>
            <td>
                {x.score}
            </td>
            <td>
                {x.owlScore}
            </td>
            <td>
                {/* временно: */}
                {x.statusId}
            </td>
        </tr>    
    )

    let tournamentHeaders = <tr><td>Имя</td><td>Очки</td><td>Очки Совы</td><td>Золотой?</td></tr> 

    return (
        <>
    <h1>{props.date}</h1>
        <Table striped bordered hover variant="dark">
               <thead>
                    {tournamentHeaders}
               </thead>
               <tbody>
                    {rows}
               </tbody> 
        </Table>
        </>
    );
}

export default TournamentTableItem;