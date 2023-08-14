import React from 'react';
import './App.css';

function Control({setGetData}) {
    const firstWin = () => {
        setGetData(prev =>({
            ...prev,
            firstWin: true,
            secondWin: false
        }))
    }

    const secondWin = () => {
        setGetData(prev =>({
            ...prev,
            firstWin: false,
            secondWin: true
        }))
    }

    return (
        <div className='third gray'>
            <div>
                <button onClick={firstWin}>1</button>
                <button onClick={secondWin}>2</button>
            </div>
        </div>
    )
}

export default Control;
