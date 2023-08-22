import React, { useEffect, useRef, useState } from 'react';
import Board from './Board';
import Control from './Control';
import './App.css';

const Panel = () => {
    const [control, setControl] = useState(false);
    const [count, setCount] = useState(0)
    const [getData, setGetData] = useState({
        firstWin: false,
        secondWin: false,
        total: 21,
        indication: '',
        text: '',
        fontSize: 2000,
        colorBoard: 'black'
    });
    const socket = useRef();
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        socket.current = new WebSocket('ws://192.168.88.222:4000'); //'ws://192.168.88.222:4000'

        socket.current.onopen = () => {
            setConnected(true);
            const message = {
                event: 'connection',
                data: control ? getData : null
            };
            socket.current.send(JSON.stringify(message));
        };

        socket.current.onmessage = (message) => {
            const receivedData = JSON.parse(message.data).data;
            setGetData(prev=> ({
                ...prev,
                ...receivedData
            }));
        };

        socket.current.onclose = () => {
            setConnected(false);
            console.log('Socket закрыт');
        };

        socket.current.onerror = () => {
            console.log('Socket произошла ошибка');
        };
    }, []);

    useEffect(() => {
        if (connected && count !== 0) {
            const message = {
                event: 'message',
                data: getData
            };
            socket.current.send(JSON.stringify(message));
        }

    }, [connected, count]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ctrl = urlParams.get('control');
        ctrl === '1' ? setControl(true) : setControl(false);
    }, []);

    if (!connected) {
        return <div>connected...</div>;
    }

    return (
        <>
            <Board getData={getData} control={control} />
            {control && <Control setGetData={setGetData} setCount={setCount} getData={getData}/>}
        </>
    );
};

export default Panel;
