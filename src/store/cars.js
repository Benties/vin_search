
const LOAD_CAR = 'car/LOAD_CAR'

const loadCar = (car) => ({
    type: LOAD_CAR,
    car
})


export const getCarThunk = (vin) => async (dispatch) => {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${vin}?format=json`)
    console.log(response)

        if(response.ok){
            const data = await response.json()
            dispatch(loadCar(data))
            return data
        } else {
            return ['An error occurred']
        }
}


const initialState = {car:{}}
export default function carReducer(state = initialState, action){
    switch (action.type) {
        case LOAD_CAR:
            const car = action.car
            return {...state, car:{car}}
        default:
            return state;
    }
}
