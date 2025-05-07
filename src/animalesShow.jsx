import { useState } from "react";

import bird from '|./assets/svg/bird.svg'
import dog from './asserts/svg/dog.svg'
import cat from './assets/svg/cat.svg'
import cow from './assets/svg/cow.svg'
import gastor from './assets/svg/gastor.svg'
import heart from './assets/svg/heart.svg'
import horse from './assets/svg/horse.svg'

import '.AnimalsShow.css'

const svgMap ={
    bird,
    dog,
    cat,
    cow,
    gastor,
    horse

}
function AnimalsShow({type}){
const[clicks, setCliks]= useState(0)

const handleClick = ()=>{

}

console.log(type)

return(
    <div
    onClick={handleClick}
    className="animal-show"
>
    <img
    src={svgMap[type]}
    alt="animal"
    className="animal"
    />
    <img
    src={hert}
    alt="heart"
    style={{width :10+10 * clicks +'px'}}
    className="heart"
    />
</div>
)
}

export default AnimalesShow
