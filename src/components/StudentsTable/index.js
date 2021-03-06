import {useSelector} from "react-redux";
import {useState, useEffect} from 'react'
import axios from "axios";
import Modal from "../Modal";
import {Grid} from "@material-ui/core";

const Display = ()=>{
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
                <table>
        <thead>
        <tr>
            <Grid xs={6}>
                <th>Nome - </th>
            </Grid>
            <Grid xs={6}>
                <th>Casa</th>
            </Grid>
        </tr>
        </thead>
                <tbody>
            {students.map((student, index)=>

        <tr key={index}>
            <Grid xs={6}>
                <td>{student.name}</td>
            </Grid>
            <Grid xs={3}>
                <td>{student.house}</td>
            </Grid>
            <Grid xs={3}>
                <td className='TableIcon' >
                    <Modal house={student.house} name={student.name} img={student.image} />
                </td>
            </Grid>

        </tr>

            )}
        </tbody>
            </table>
       </Grid>
   </Grid>
        </>
    )
};
export default Display