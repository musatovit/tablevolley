import React from 'react';
import './App.css';

function Board({getData}) {

    return (
        <>
            <div className='first'>
                {getData.firstWin !== getData.secondWin &&
                    <>
                        <div className={getData.firstWin ? 'firstTeam green' : 'firstTeam red'}></div>
                        <div className={getData.secondWin ? 'secondTeam green' : 'secondTeam red'}></div>
                    </>}
            </div>
            <div className='second'>

            </div>
        </>
    )
}

export default Board;
