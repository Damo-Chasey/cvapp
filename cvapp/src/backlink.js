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
            {name.map((data) => (<p> {data.name} </p>))}
            
            
        </div>
    );
};

export default Backlink;