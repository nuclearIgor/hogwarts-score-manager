const HouseCard = (props)=>{
    const {rank, name, icon, points} = props

    return(
        <div>
            <h4>#{rank + 1} {name}</h4>
            {icon}
            <h4>{points}</h4>
        </div>
    )
}
export default HouseCard