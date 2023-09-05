import React, { useState, useEffect } from 'react';

const CountdownTimer = ({control, getData, setGetData, setCount}) => {
    const [time, setTime] = useState(20 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);
    const [pause, setPause] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startGameTime, setStartGameTime] = useState(new Date())

    useEffect(() => {
        if (isRunning !== getData.timer.isRunning) {
            setStartGameTime(new Date())
            setIsRunning(prev => !prev)
            setTime(getData.timer.time)
        }
    }, [getData])

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);

    useEffect(() => {
        let realTime;
            realTime = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

        setIsRunning(getData.timer.isRunning)

        return () => {
            clearInterval(realTime);
        };
    }, []);

    useEffect(() => {
        if (isRunning) {
            startGameTime.setSeconds(startGameTime.getSeconds() + time)
        }
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true);
        setStartGameTime(new Date())
        setGetData(prev => ({
            ...prev,
            timer: {
                ...prev.timer,
                isRunning: true,
                time: time
            }
        }))
        if (pause) {
            setPause(false)
        }
        setCount(prev => prev + 1)
    };

    const stopTimer = () => {
        setIsRunning(false);
        setPause(false)
        setTime(20 * 60);
        setGetData(prev => ({
            ...prev,
            timer: {
                ...prev.timer,
                isRunning: false,
                pause: false,
                time: time
            }
        }))
        setCount(prev => prev + 1)
    };

    const pauseTimer = () => {
        setIsRunning(false);
        setPause(true)
        setGetData(prev => ({
            ...prev,
            timer: {
                ...prev.timer,
                isRunning: false,
                pause: false
            }
        }))
        setCount(prev => prev + 1)
    };

    const addMinute = () => {
        setTime(prevTime => prevTime + 60);
        startGameTime.setSeconds(startGameTime.getSeconds() + 60)
    };

    const subtractMinute = () => {
        if (time >= 60) {
            setTime(prevTime => prevTime - 60);
            startGameTime.setSeconds(startGameTime.getSeconds() - 60)
        }
    };

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const endTime = formatTime(time);
    const realTime = currentTime.toLocaleTimeString();
    const endRealTime = startGameTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    return (
        <div className={control ? 'timer' : 'timer timerTablo'}>
            <div>{realTime}</div>
            {(isRunning || pause || control) &&
                <div><span className='lightgray'>До начала игры: </span><span className='blue'>{endTime}</span></div>
            }
            {(isRunning) &&
                <>
                    <div><span className='lightgray'>Начало в: </span><span className='endRealTime'>{endRealTime}</span></div>
                </>
            }
            {control &&
                <>
                    {!isRunning && <button onClick={startTimer}>Старт</button>}
                    {isRunning && <button onClick={stopTimer}>Стоп</button>}
                    {/*<button onClick={pauseTimer}>Пауза</button>*/}
                    {!isRunning &&
                        <>
                            <button onClick={addMinute}>Добавить минуту</button>
                            <button onClick={subtractMinute}>Убавить минуту</button>
                        </>}
                </>}
        </div>
    );
};

export default CountdownTimer;
