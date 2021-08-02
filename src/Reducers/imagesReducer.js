
export default function imagesReducer(state = {images : [] }, action){
    switch(action.type){

        case "FETCH_IMAGES":
            console.log([...state.images, ...action.payload])
            return { images : [...state.images, ...action.payload] };

        default:
            return state;
    }
}