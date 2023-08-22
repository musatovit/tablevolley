import React, {useState} from 'react';
import './App.css';

function Control({setGetData, setCount, getData}) {
    const [check, setCheck] = useState(false)
    const [input, setInput] = useState('')

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
            fontSize: 2000,
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

    const sendInputText = () => {
        setGetData(prev =>({
            ...prev,
            text: input,
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
        setInput('')
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
                <div>Победа</div>
                <div>
                    <button onClick={firstWin}>1</button>
                    <button onClick={secondWin}>2</button>
                    <button onClick={deleteWin}>🗑</button>
                </div>
            </div>
            <div>
                <div>
                    Изменить тотал
                </div>
                <div>
                    <button onClick={totalPlus}>+</button>
                    <button onClick={totalMinus}>-</button>
                </div>
            </div>
            <div>
                <div>
                    Знак тотала
                </div>
                <div>
                    <button onClick={indicationPlus}>+</button>
                    <button onClick={indicationMinus}>-</button>
                    <button onClick={indicationEqual}>=</button>
                    <button onClick={deleteIndication}>🗑</button>
                </div>
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
                    {check ?
                        <>
                            <input className='sizeInput' type="text" value={input} onChange={e => setInput(e.target.value)}/>
                            <button onClick={sendInputText}>Отправить</button>
                        </>
                        :
                        <input type="text" value={getData.text} onChange={e => setInputText(e.target.value)}/>
                    }
                    <input
                        type="checkbox"
                        checked={check}
                        onChange={() => setCheck(!check)}
                    />
                </div>
            </div>
            <div>
                <div>
                    Размер текста
                </div>
                <div>
                    <button onClick={fontSizePlus}>+</button>
                    <button onClick={fontSizeMinus}>-</button>
                </div>
            </div>
            <div>
                <div>
                    Очистить
                </div>
                <div>
                    <button onClick={clearAll}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Control;
