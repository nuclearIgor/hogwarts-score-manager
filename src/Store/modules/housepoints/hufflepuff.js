
const hufflepuffReducer =(points = 0, action)=>{

    const {value} = action

    switch (action.type){

        case'@Hufflepuff/ADD':

            return points + value



        case '@Hufflepuff/REMOVE':

            return points - value

        default:

            return points
    }
}

export default hufflepuffReducer
