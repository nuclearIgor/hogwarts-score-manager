import {Grid, Paper, makeStyles} from "@material-ui/core";

import hogwartsIcon from '../../assets/hogwarts.svg'

const useStyles = makeStyles((theme) => ({
    header_container: {
        top: "0px",
        backgroundColor: "#6d9fea",
    },

    header: {
        marginTop: "4%",
        backgroundColor: "#3461a4",
        display: "flex",
        color: "#fff",
        alignItems: "center",
    },

    icon: {
        margin: "0 20px",
    },
}));
const Header = ()=>{
    const classes = useStyles()
    return(
    <>
        <Grid container spacing={0} className={classes.header_container}>
            <Grid item xs={12}>
                <Paper className={classes.header}>
                    <img src={hogwartsIcon} className={classes.icon} alt='logo'/>
                    <h1>
                        <span>Hogwarts Score Manager</span>
                    </h1>
                </Paper>
            </Grid>
        </Grid>
    </>
)
}

export default Header