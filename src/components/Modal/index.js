import {addPoints, removePoints} from "../../Store/modules/housepoints/actions";
import {useDispatch} from "react-redux";
import {useState} from 'react'
import {ReactComponent as FormIcon} from '../../assets/formicon.svg'
import {makeStyles} from "@material-ui/core";
import {Modal, Backdrop, Fade} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        margin: '0 auto',
    },
    paper: {
        border: "1px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: '#E5EDF2',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color:'#3461A4',
        '@media (min-width: 769px)':{
            width: '500px',
            fontSize:'24px',
        }
    },
    right_side:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width: '50%',
        height: '170px',
        '@media (min-width: 769px)':{
            height: '300px'
        }
    },
    gain_button:{
        backgroundColor: '#65E1CB',
        width: '60px',
        '@media (min-width: 769px)':{
            width:'100px',
            height:'25px'
        }
    },
    lose_button:{
        backgroundColor: '#F8A388',
        width: '60px',
        '@media (min-width: 769px)':{
            width:'100px',
            height:'25px'
        }
    },
    done_button:{
        backgroundColor: '#6994D4',
        width: '100px',
        height: '30px',
    },
    input:{
        marginBottom:'5px',
        width: '80px',
        '@media (min-width: 769px)':{
            width:'200px',
            height:'25px'
        }
    },
    buttons:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    done_div:{
        textAlign:'center',
    },
    lose_points:{
        color: '#F8A388',
        fontWeight: '500',
        fontSize: '18px',
    },
    gain_points:{
        color: '#65E1CB',
        fontWeight: '500',
        fontSize: '18px',
    },
    modal_image:{
        height: '170px',
        '@media (min-width: 769px)':{
            height: '300px'
        }
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [done, setDone] = useState(false);
    const [pontos, setPontos] = useState(0);
    const [add, setAdd] = useState(false)

    const dispatch = useDispatch();
    const { name, img, house } = props;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
             <div>
    <FormIcon onClick={setOpen} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
    <Fade in={open}>
       <div className={classes.paper}>
        <>
            <div>
                <img alt='' src={`${img}`} className={classes.modal_image}/>
            </div>
            <div className={classes.right_side}>
                <h5>{house}</h5>
                <h5>{name}</h5>

    {!done && (
    <div>
        <input className={classes.input}
            placeholder="points"
            pattern="^[0-9]*$"
            type="text"
            onChange={(event) =>
                setPontos(parseInt(event.target.value))
            }
        />
        <div className={classes.buttons}>
        <button className={classes.gain_button}
            onClick={() => {
                dispatch(addPoints(pontos, `${house}`));
                setDone(true);
                setAdd(true)
            }}
        >   Gain</button>
        <button className={classes.lose_button}
            onClick={() => {
                dispatch(removePoints(pontos, `${house}`));
                setDone(true);
                setAdd(false);
            }}
        >  Lose  </button>
        </div>
    </div>
    )}

    {done && (
    <div className={classes.done_div}>
    <h5>{add? <span className={classes.gain_points}>+ {pontos}</span> : <span className={classes.lose_points}>- {pontos}</span>}</h5>
        <button className={classes.done_button}
            onClick={() => {
                setDone(false);
                setOpen(false);
            }}
            > Done  </button>

</div>
)}
            </div>
                        </>
          </div>
                </Fade>
            </Modal>
        </div>
    );
}
