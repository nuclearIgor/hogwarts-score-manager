const ravenclawReducer =(points = 0, action)=>{

    const {value} = action

    switch (action.type){

        case'@Ravenclaw/ADD':

            return points + value

        case '@Ravenclaw/REMOVE':

            return points - value

        default:

            return points
    }
}

export default ravenclawReducer
