import React, { useState } from 'react';
import TournamentTableItems from './TournamentTableItem/TournamentTableItems';

const LeagueTables = () => {

    const [isNewTableElementVisible, setNewTableElementVisibility] = useState<boolean>(false);

    return (
        <div className='league'>
           <h1>Итоговая Таблица:</h1>
            
            <TournamentTableItems tournaments = {[]} memberTournaments = {[]} />
        </div>
    );
}

export default LeagueTables;