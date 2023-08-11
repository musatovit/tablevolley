import React, {useEffect, useState} from 'react';


const ClientComponent = () => {
    const [inputData, setInputData] = useState('')
    const [getData, setGetData] = useState('')

    useEffect(() => {
        subscribe()
    }, [])

    async function sendMessage() {
        await fetch(`http://localhost:4000/new-messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({inputData})
        })
    }


    async function subscribe() {
        try {
            const data = await fetch(`http://localhost:4000/get-messages`, {
                method: 'GET'
            })
            const json = await data.json()
            setGetData(json.inputData)
            await subscribe()
        } catch (e) {
            setTimeout(async () => {
                await subscribe()
            }, 500)
        }
    }

    return (
        <div>
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
            <button onClick={sendMessage}>Отправить</button>
            <div>{getData}</div>
        </div>
    );
};

export default ClientComponent;
