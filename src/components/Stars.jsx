import Star from './Star'

const shortid = require('shortid');

export default function Stars({ count }) {

    const stars = new Array(count)

    for(let i = 0; i < count; i++) {
        stars.push(<Star />)
    } 

    const starsIndex = stars.map((star)=>
    ({id: shortid.generate(), value: star})
    )

    const list = starsIndex.map((star)=>
    <li key={star.id}>{star.value}</li>
    )

    return (
        <ul>
            {
                count > 5 || count < 1 ? null : list
            }
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}