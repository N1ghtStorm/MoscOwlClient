import React, { useState } from 'react';
import { MemberTournament } from '../../../../../../../../Types/Types';
import { Button, Table } from 'react-bootstrap';

type TournamentTableItemProps = {
    memberTournaments: MemberTournament[];
    date: string;
}

const TournamentTableItem: React.FC<TournamentTableItemProps> = (props) => {
    let [newRowInputEnabled, setNewRowInputEnabled] = useState(false);

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
            <td>
                <Button size = "lg">-</Button>
            </td>
        </tr>    
    )

    let tournamentHeaders = <tr><td>Имя</td><td>Очки</td><td>Очки Совы</td><td>Золотой?</td></tr> 

    let newRow = newRowInputEnabled ? <tr>
                                            <td>
                                                <input></input>
                                            </td>
                                            <td>
                                                <input></input>
                                            </td>
                                            <td>
                                                <input></input>
                                            </td>
                                            <td>
                                                <input></input>
                                            </td>
                                            <td onClick = {() => setNewRowInputEnabled(false)}>
                                                -
                                            </td>
                                        </tr>  
                                    : <Button onClick = {() => setNewRowInputEnabled(true)}>+</Button>

    return (
        <>
    <h1>{props.date}</h1>
        <Table striped bordered hover variant="dark">
               <thead>
                    {tournamentHeaders}
               </thead>
               <tbody>
                    {rows}
                    {newRow}
               </tbody> 
        </Table>
        </>
    );
}

export default TournamentTableItem;