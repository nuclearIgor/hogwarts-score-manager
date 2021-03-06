import {useSelector} from "react-redux";
import {useState, useEffect} from 'react'
import axios from "axios";
import Modal from "../Modal";
import {Grid, Typography} from "@material-ui/core";

const Teste = ()=>{
    const [students, setStudents] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('http://hp-api.herokuapp.com/api/characters/students')
            setStudents(request.data)
            return request
        }
        fetchData()
    },[])

    return(
        <>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h2>Aunos</h2>
                </Grid>
                <Grid item xs={12}>
                            <Grid xs={6}>
                                <Typography>Nome</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography>Casa</Typography>
                            </Grid>
                        <div>
                        {students.map((student, index)=>

                            <div key={index} >
                                <Grid xs={6}>
                                    <Typography >{student.name}</Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography variant='h5'>{student.house}</Typography>
                                </Grid>
                                <Grid xs={3}>
                                    <Typography variant='h5' className='TableIcon' >
                                        <Modal house={student.house} name={student.name} img={student.image} />
                                    </Typography>
                                </Grid>

                            </div>

                        )}
                        </div>
                </Grid>
            </Grid>
        </>
    )
};
export default Teste