

const gryffindorReducer =(points = 0, action)=>{

    const {value} = action

    switch (action.type){

        case'@Gryffindor/ADD':

            return points + value

        case '@Gryffindor/REMOVE':

            return points - value

        default:

            return points
    }
}

export default gryffindorReducer
