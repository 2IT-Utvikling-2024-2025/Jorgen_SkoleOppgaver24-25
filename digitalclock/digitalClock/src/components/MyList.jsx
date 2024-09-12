import { useState } from "react"

const mylist = [

    {title: 'mat', id: 1},
    {title: 'drikke', id: 2}
]

export default function MyList() {
    const [vote, setVote] = useState(0)
        function handleClick() {
        setVote(vote + 1)
        }

    const listItems = mylist.map(item =>
        <li key={item.id}>
            {item.title}
            <Votebutton vote={vote} onClick={handleClick}></Votebutton>
        </li>
    )
    return(

        <>
        
        <h1>my list</h1>
        <ul>{listItems}</ul>

        </>
    )
}
function Votebutton ({vote, onClick}) {



    

    return (
        <button onClick={onClick}>
            Voted {vote} times
        </button>
    )
}