import {useSelector} from "react-redux";
import {ReactComponent as GryffindorIcon} from '../../assets/gryffindor.svg'
import {ReactComponent as SlytherinIcon} from '../../assets/slytherin.svg'
import {ReactComponent as HufflepuffIcon} from '../../assets/hufflepuff.svg'
import {ReactComponent as RavenclawIcon} from '../../assets/ravenclaw.svg'
import HouseCard from "../HouseCard";
import {useEffect, useState} from "react";

const DisplayHouseCards = ()=>{

    const {gryffindor, slytherin, hufflepuff, ravenclaw} = useSelector(state=> state)

    const Housearray = [
        {
            points: slytherin,
            name: 'Slytherin',
            icon: <SlytherinIcon/>
        },
        {
            points: ravenclaw,
            name: 'Ravenclaw',
            icon: <RavenclawIcon/>
        },
        {
            points: gryffindor,
            name: 'Gryffindor',
            icon: <GryffindorIcon/>
        },
        {
            points: hufflepuff,
            name: 'Hufflepuff',
            icon: <HufflepuffIcon/>
        },]

        const [houses, setHouses] = useState(Housearray)

        useEffect(()=>{
           const sorted = Housearray.sort(function (a,b){return  b.points - a.points})
           setHouses(sorted)

        }, [ravenclaw, gryffindor, hufflepuff, slytherin])

    return(
        <>
            {houses.map((item, index)=>
            <HouseCard rank={index} name={item.name} icon={item.icon} points={item.points}/>)}
        </>
    )
}
export default DisplayHouseCards