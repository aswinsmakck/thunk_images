import unsplash from '../apis/unsplash'

export function fetchImages(page, count){

    return function(dispatch, getState){
        unsplash
        .get(`/photos?page=${page}&per_page=${count}&client_id=`)
        .then(response =>{
            console.log("____________________hoooray_______________", response)
            dispatch({
                type : "FETCH_IMAGES",
                payload : response.data
            });
        })
    }
}
