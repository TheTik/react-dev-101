import { useState } from 'react'

const CRUDStringArray = () => {

    const [friends, setFriends] = useState(["AAA", "BBB", "CCC"]);

    const handleAdd = ()=> {
        setFriends([...friends, "EEE"]);
    }

    const handRemove = ()=> {
        setFriends(friends.filter((f) => f !== "EEE"));
    }

    const handUpdate = ()=> {
        setFriends(friends.map((f) => (f === "EEE" ? "!EEE!" : f)))
    }

    return (
        <>
            {
                friends.map((f) => (
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