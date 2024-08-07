import { useState } from 'react'

const CRUDStringArray = () => {

    const [data, setData] = useState(["AAA", "BBB", "CCC"]);

    const handleAdd = ()=> {
        setData([...data, "EEE"]);
    }

    const handRemove = ()=> {
        setData(data.filter((f) => f !== "EEE"));
    }

    const handUpdate = ()=> {
        setData(data.map((f) => (f === "EEE" ? "!EEE!" : f)))
    }

    return (
        <>
            {
                data.map((f) => (
                    <li key={Math.random()}>{f}</li>
                ))
            }

            <button onClick={handleAdd}>Add</button>
            <button onClick={handRemove}>Remove</button>
            <button onClick={handUpdate}>Update</button>
        </>
    )
}

export default CRUDStringArray