import { useState } from "react";

function NameChange() {
    const name1 = "sam";
    const name2 = "bro";

    const [name, setName] = useState(name1);

    const handleChange = () => {
        setName(name === name1 ? name2 : name1);
    };

    return (
        <>
            <p>{name}</p>
            <button onClick={handleChange}>Change</button>
        </>
    );
}

export default NameChange;
