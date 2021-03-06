import {ReactComponent as HogwartsIcon} from "../../assets/hogwarts.svg";
import {Grid} from "@material-ui/core";

const Header = ()=>{
    return(
    <>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <h1>
                    <HogwartsIcon/>
                    <span>Hogwarts Score Manager</span>
                </h1>
            </Grid>
        </Grid>
    </>
)
}

export default Header