import {Grid, Paper} from "@material-ui/core";

const HouseCard = (props)=>{
    const {rank, name, icon, points} = props

    return(
    <Grid item xs={3}>
        <div className='house_card'>
            <h4>#{rank + 1} {name}</h4>
            <img alt='logo' src={icon} className='house_icon' />
            <h4>{points}</h4>
        </div>
    </Grid>
    )
}
export default HouseCard