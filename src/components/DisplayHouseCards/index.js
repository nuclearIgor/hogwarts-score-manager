import {useSelector} from "react-redux";
import gryffindorIcon from "../../assets/gryffindor.svg";
import slytherinIcon from "../../assets/slytherin.svg";
import hufflepuffIcon from "../../assets/hufflepuff.svg";
import ravenclawIcon from "../../assets/ravenclaw.svg";

import HouseCard from "../HouseCard";
import {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";

const DisplayHouseCards = ()=>{

    const {gryffindor, slytherin, hufflepuff, ravenclaw} = useSelector(state=> state)

    const Housearray = [
        {
            points: slytherin,
            name: 'Slytherin',
            icon: slytherinIcon
        },
        {
            points: ravenclaw,
            name: 'Ravenclaw',
            icon: ravenclawIcon
        },
        {
            points: gryffindor,
            name: 'Gryffindor',
            icon: gryffindorIcon
        },
        {
            points: hufflepuff,
            name: 'Hufflepuff',
            icon: hufflepuffIcon
        },]

        const [houses, setHouses] = useState(Housearray)

        useEffect(()=>{
           const sorted = Housearray.sort(function (a,b){return  b.points - a.points})
           setHouses(sorted)

        }, [ravenclaw, gryffindor, hufflepuff, slytherin])

    return(
        <>
            <Grid container spacing={2}>
                {houses.map((item, index)=>
                    <HouseCard key={index} rank={index} name={item.name} icon={item.icon} points={item.points}/>)}
            </Grid>
        </>
    )
}
export default DisplayHouseCards