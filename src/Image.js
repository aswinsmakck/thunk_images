export default function Image(props){
    console.log("image",props)
    return (
        <div className="image" style={{alignSelf:"center"}}>
            <img src={props.image.urls.small} />
        </div>
    )
}