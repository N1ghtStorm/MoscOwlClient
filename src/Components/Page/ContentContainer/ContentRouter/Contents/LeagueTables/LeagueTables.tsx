import React from 'react';
import { MemberTournament } from '../../../../../../Types/Types';
import { Table } from 'react-bootstrap';

const LeagueTables = () => {

    let memTourTempArray: MemberTournament[] = [
        {
            score: 12,
            owlScore: 6,
            statusId: 1,
            memberId: 1,
        },
        {
            score: 6,
            owlScore: 2,
            statusId: 1,
            memberId: 2,
        },
        {
            score: 9,
            owlScore: 6,
            statusId: 1,
            memberId: 3,
        },
        {
            score: 3,
            owlScore: 0,
            statusId: 1,
            memberId: 4,
        }
    ];

    let rows = memTourTempArray.map(x => 
        <tr>
            <td>
                {/* временно: */}
                {x.memberId}
            </td>
            <td>
                {/* временно: */}
                {x.score}
            </td>
            <td>
                {/* временно: */}
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
        <div className='league'>
           <h1>Итоговая Таблица:</h1>
           <Table striped bordered hover variant="dark">
               <thead>
                    {tournamentHeaders}
               </thead>
               <tbody>
                    {rows}
               </tbody>
                
           </Table>
        </div>
    );
}

export default LeagueTables;