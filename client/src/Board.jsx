import React from 'react';
import './App.css';

function Board({getData, control}) {
    /* eslint-disable */
    return (
        <div className={`container ${getData.colorBoard}`}>
            <div className='first'>
                {getData.firstWin !== getData.secondWin &&
                    <>
                        <div className={getData.firstWin ? 'firstTeam green' : 'firstTeam red'}></div>
                        <div className={getData.secondWin ? 'secondTeam green' : 'secondTeam red'}></div>
                    </>}
            </div>
            <div className='second' style={{fontSize: getData.fontSize + '%'}}>
                {getData.indication && !control &&
                    <div
                        className={getData.indication === '+' && 'plus' || getData.indication === '-' && 'minus' || 'blackColor'}>
                        {getData.total} {getData.indication}
                    </div>
                }

                {getData.indication && control &&
                    <div
                        style={{fontSize: '50%'}}
                        className={getData.indication === '+' && 'plus' || getData.indication === '-' && 'minus' || 'blackColor'}>
                        {getData.total} {getData.indication}
                    </div>
                }

                {getData.text && !control &&
                    <div className='minus'>
                        {getData.text}
                    </div>}
                {!getData.indication && !getData.text && control && <div className='hidden'>{getData.total}</div>}

                {getData.text && control &&
                    <div style={{fontSize: '30%'}} className='minus'>
                        {getData.text}
                    </div>}
                {!getData.indication && !getData.text && control && <div className='hidden'>{getData.total}</div>}
            </div>
        </div>
    )
}

export default Board;
