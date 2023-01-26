
/****
 *
 *    Decided not to implement a redux store but here is how i wouldve done it
 */
// const LOAD_CAR = 'car/LOAD_CAR'

// const loadCar = (car) => ({
//     type: LOAD_CAR,
//     car
// })


// export const getCarThunk = (vin) => async (dispatch) => {
//     const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${vin}?format=json`)

//         if(response.ok){
//             const data = await response.json()
//             dispatch(loadCar(data))
//             return data
//         } else {
//             return ['An error occurred']
//         }
// }


// const initialState = {}
// export default function carReducer(state = initialState, action){
//     switch (action.type) {
//         case LOAD_CAR:
//             const car = action.car
//             return {...state, ...car}
//         default:
//             return state;
//     }
// }
