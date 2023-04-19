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
                    {name.map((data) => (<tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.colour}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default Backlink;