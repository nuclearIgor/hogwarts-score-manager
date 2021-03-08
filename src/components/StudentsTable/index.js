import {useSelector} from "react-redux";
import {useState, useEffect} from 'react'
import axios from "axios";
import Modal from "../Modal";
import {Grid} from "@material-ui/core";
import TransitionsModal from "../Modal";

const Display = ()=>{
    const [students, setStudents] = useState([])

    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get('https://hp-api.herokuapp.com/api/characters/students')
           setStudents(request.data)
           return request
        }
        fetchData()
    },[])

    return(
        <>
   <Grid container spacing={0}>
       <div className='table-container'>
       <Grid item xs={12}>
           <h2 className='alunos'>Alunos</h2>
       </Grid>
       <Grid item xs={12}>
<table className='students_table'>
    <thead className='students_table-head'>
        <tr>
            <th>Nome</th>
            <th>Casa</th>
            <th></th>
        </tr>
    </thead>
    <tbody className='students_table-body'>
            {students.map((student, index)=>
        <tr className='students_table-row' key={index}>
            <td className='student-name'>{student.name}</td>
            <td>{student.house}</td>
            <td className='TableIcon' >
                <TransitionsModal house={student.house} name={student.name} img={student.image} />
            </td>
        </tr>
            )}
    </tbody>
</table>
       </Grid>
       </div>
   </Grid>
        </>
    )
};
export default Display