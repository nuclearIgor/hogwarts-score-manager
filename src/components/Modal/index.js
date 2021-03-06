import {addPoints, removePoints} from "../../Store/modules/housepoints/actions";
import {useDispatch} from "react-redux";
import {useState} from 'react'
import {ReactComponent as FormIcon} from '../../assets/icon.svg'

const Modal = (props) =>{
    const dispatch = useDispatch()
    const {house, name, img} = props

    const [modal, setModal] = useState(false)

    return(
        <>
    {modal &&
<div className='modal'>
    <button onClick={()=>setModal(false)}>fechar</button>

    <div>
        <img src={`${img}`}/>
    </div>
    <div>
        <h3>{name}</h3>

    </div>
        <span>
            <button onClick={()=>dispatch(addPoints(10, `${house}`))}>adicionar</button>
        </span>
        <span>
            <button onClick={()=> dispatch(removePoints(10,`${house}`))}>remover</button>
        </span>

</div>}

        {/*<FormIcon onClick={()=> setModal(true)} />*/}
        <FormIcon onClick={()=>dispatch(addPoints(10, `${house}`))} />

        </>
    )
}

export default Modal