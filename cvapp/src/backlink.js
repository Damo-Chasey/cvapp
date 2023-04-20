import React, {useState, useEffect} from 'react';

function Backlink() {
    const [name, setName] = useState([]);
    
    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const response = await fetch('http://localhost:3001/users');

        setName(await response.json());
    }

    return(
        <div>
            <table>
                <tbody>
                    {name.map((data) => (<tr key={data._id}>
                        <td>{data.name}</td>
                        <td>{data.colour}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export function InsertColour(props) {
    console.log("Attempting database insert");
    
    useEffect(() => {
        const request= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: "John",colour: "Blue"})
        };
        fetch('http://localhost:3001/add_user', request)
            .then(response => response.json())
            
    }, [])

    return(
        <div> </div>
    );
};

export default Backlink;