import React, { useState, useEffect } from 'react';

const CountdownTimer = ({control, getData, setGetData, setCount}) => {
    const [time, setTime] = useState(20 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);
    const [pause, setPause] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startGameTime, setStartGameTime] = useState(new Date())

    useEffect(() => {
        if (isRunning !== getData.timer.isRunning) {
            setIsRunning(prev => !prev)
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
        } else {
            setStartGameTime(new Date())
        }
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true);
        setGetData(prev => ({
            ...prev,
            timer: {
                ...prev.timer,
                isRunning: true
            }
        }))
        setCount(prev => prev + 1)
        if (pause) {
            setPause(false)
        }
        console.log(getData)
    };

    const stopTimer = () => {
        setIsRunning(false);
        setPause(false)
        setTime(20 * 60); // Сбросить время до стартового значения
    };

    const pauseTimer = () => {
        setIsRunning(false);
        setPause(true)
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
    const endRealTime = startGameTime.toLocaleTimeString()

    return (
        <div className='timer'>
            <div>{realTime}</div>
            {(isRunning || pause) &&
                <div>До начала игры: {endTime}</div>
            }

            {isRunning &&
                <>
                    <div>Начало в: {endRealTime}</div>
                </>
            }
            {control &&
                <>
                    <button onClick={startTimer}>Старт</button>
                    {/*<button onClick={stopTimer}>Стоп</button>*/}
                    {/*<button onClick={pauseTimer}>Пауза</button>*/}
                    {/*<button onClick={addMinute}>Добавить минуту</button>*/}
                    {/*<button onClick={subtractMinute}>Убавить минуту</button>*/}
                </>}
        </div>
    );
};

export default CountdownTimer;
