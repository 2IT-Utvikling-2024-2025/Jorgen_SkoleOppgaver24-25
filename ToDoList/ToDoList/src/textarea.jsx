import { useState } from "react";

function MyForm1() {
    const [textarea, setTextarea] = useState(
        "content of textarea goes in value attribute"
    );

    const handleChange = event => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onchange = {handleChange} />
        </form>
    )
}

export MyForm1