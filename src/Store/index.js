import {createStore, combineReducers} from 'redux'

import gryffindorReducer from "./modules/housepoints/gryffindor";
import hufflepuffReducer from "./modules/housepoints/hufflepuff";
import slytherinReducer from "./modules/housepoints/slytherin";
import ravenclawReducer from "./modules/housepoints/ravenclaw";

const reducers = combineReducers({
    gryffindor: gryffindorReducer,
    slytherin: slytherinReducer,
    hufflepuff: hufflepuffReducer,
    ravenclaw: ravenclawReducer,
    // houses: housesReducer
})

const store = createStore(reducers)

export default store