import { useState } from 'preact/hooks'
import './MyHobbies.css'

const hobbies = [
    {title:"gaming", isFavourite: true, upVote: 0, id: 1},
    {title:"utvikling", isFavourite: true, upVote: 0, id: 2},
    {title:"gå turer", isFavourite: false, upVote: 0, id: 3}
]

export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} stryle={ { color:hobby.isFavourite ? '#280137' : 'rgb(136, 84, 151)' } }> 
            {hobby.title}
            <VoteButon></VoteButon>
        </li>
    )

return (
    <>
        <h1 className='header'> Jørgen Thinn </h1>

        <ul className='list'>{listItems}</ul>
    </>
    
)
}


function VoteButon() {

    const [Vote, setVote] = useState(0)
    function handleClick(){
        setVote(vote + 1)
    }

    return (
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}