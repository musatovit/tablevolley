import React from 'react';
import './App.css';

function Control({setGetData, setCount, getData}) {
    const firstWin = () => {
        setGetData(prev =>({
            ...prev,
            firstWin: true,
            secondWin: false,
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const secondWin = () => {
        setGetData(prev =>({
            ...prev,
            firstWin: false,
            secondWin: true,
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const deleteWin = () => {
        setGetData(prev =>({
            ...prev,
            firstWin: false,
            secondWin: false,
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const totalPlus = () => {
        setGetData(prev =>({
            ...prev,
            total: prev.total + 1,
        }))
        setCount(prev => prev + 1)
    }

    const totalMinus = () => {
        setGetData(prev =>({
            ...prev,
            total: prev.total - 1,
        }))
        setCount(prev => prev + 1)
    }

    const indicationPlus = () => {
        setGetData(prev =>({
            ...prev,
            indication: '+',
            fontSize: 3200,
            text: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

        const indicationMinus = () => {
        setGetData(prev =>({
            ...prev,
            indication: '-',
            fontSize: 3200,
            text: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

        const indicationEqual = () => {
        setGetData(prev =>({
            ...prev,
            indication: '=',
            fontSize: 3200,
            text: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const deleteIndication = () => {
        setGetData(prev =>({
            ...prev,
            indication: '',
            fontSize: 3200,
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const fontSizePlus = () => {
        setGetData(prev =>({
            ...prev,
            fontSize: prev.fontSize + 50,
        }))
        setCount(prev => prev + 1)
    }

    const fontSizeMinus = () => {
        setGetData(prev =>({
            ...prev,
            fontSize: prev.fontSize - 50,
        }))
        setCount(prev => prev + 1)
    }

    const setTextOne = () => {
        setGetData(prev =>({
            ...prev,
            text: 'Сами!',
            fontSize: 2000,
            indication: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const setTextTwo = () => {
        setGetData(prev => ({
            ...prev,
            text: 'Тайм аут!',
            fontSize: 2000,
            indication: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

const setTextThree = () => {
        setGetData(prev =>({
            ...prev,
            text: 'Не держим!',
            fontSize: 2000,
            indication: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }
const setTextFour = () => {
        setGetData(prev =>({
            ...prev,
            text: 'Заканчивайте!',
            fontSize: 1500,
            indication: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const setInputText = (value) => {
        setGetData(prev =>({
            ...prev,
            text: value,
            fontSize: 2000,
            indication: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const deleteText = () => {
        setGetData(prev =>({
            ...prev,
            text: '',
            colorBoard: 'white'
        }))
        setCount(prev => prev + 1)
    }

    const clearAll = () => {
        setGetData({
            firstWin: false,
            secondWin: false,
            total: 21,
            indication: '',
            text: '',
            fontSize: 2000,
            colorBoard: 'black'
        })
        setCount(prev => prev + 1)
    }


    return (
        <div className='third gray'>
            <div>
                <button onClick={firstWin}>1</button>
                <button onClick={secondWin}>2</button>
                <button onClick={deleteWin}>🗑</button>
            </div>
            <div>
                <button onClick={totalPlus}>+</button>
                <button onClick={totalMinus}>-</button>
            </div>
            <div>
                <button onClick={indicationPlus}>+</button>
                <button onClick={indicationMinus}>-</button>
                <button onClick={indicationEqual}>=</button>
                <button onClick={deleteIndication}>🗑</button>
            </div>
            <div>
                <div>
                    <button onClick={setTextOne}>Cами</button>
                    <button onClick={setTextTwo}>Тайм аут</button>
                    <button onClick={setTextThree}>Не держим</button>
                    <button onClick={setTextFour}>Заканчивайте</button>
                    <button onClick={deleteText}>🗑</button>
                </div>
                <div>
                    <input type='text' value={getData.text} onChange={e => setInputText(e.target.value)}/>
                </div>
            </div>
            <div>
                <button onClick={fontSizePlus}>+</button>
                <button onClick={fontSizeMinus}>-</button>
            </div>
            <div>
                <button onClick={clearAll}>Clear</button>
            </div>
        </div>
    )
}

export default Control;
