const slytherinReducer =(points = 0, action)=>{

    const {value} = action

    switch (action.type){

        case'@Slytherin/ADD':

            return points + value



        case '@Slytherin/REMOVE':

            return points - value

        default:

            return points
    }
}

export default slytherinReducer
