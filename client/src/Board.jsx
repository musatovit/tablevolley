import React from 'react';
import './App.css';
import Timer from "./Timer";

function Board({getData, control, setGetData, setCount}) {
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

                {getData.text && control &&
                    <div style={{fontSize: '30%'}} className='minus'>
                        {getData.text}
                    </div>}

                {getData.timer.isOn && !control &&
                    <Timer control={control} getData={getData} setGetData={setGetData} setCount={setCount} />
                }

                {getData.timer.isOn && control &&
                    <Timer control={control} getData={getData} setGetData={setGetData} setCount={setCount} />
                }

                {!getData.indication && !getData.text && control && !getData.timer.isOn && <div className='hidden'>{getData.total}</div>}
            </div>
        </div>
    )
}

export default Board;
