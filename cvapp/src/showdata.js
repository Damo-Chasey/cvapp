import React, {useState, useEffect} from 'react';

export function ShowData() {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const response = await fetch('http://localhost:3001/users');
        console.log("Fetched entries");

        setName(await response.json());
    }

    return(
        <div className={"showData"}>
            {console.log("Displaying entries")}
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

