export default function Row(props){
    let columnInnerCssClass = `column-inner ${props.columnInnerStyle}`
    return (
        <div className="column" style={props.columnStyle}>
            <div className= {columnInnerCssClass} >
                {props.children}
            </div>
        </div>
    )
}