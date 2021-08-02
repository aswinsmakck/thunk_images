import React from "react"
import { connect } from 'react-redux'
import { fetchImages } from "./Actions/ImageActions"
import Image from "./Image"
import Row from './Row'
import Column from './Column'
import InfiniteScroll from 'react-infinite-scroll-component'

class Images extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page : 0,
            count : 15
        }
    }

    loadImages = () => {
        console.log("in fetch images")
        let page = this.state.page + 1;
        this.setState({ page })
        this.props.fetchImages( page, this.state.count)
    }

    componentDidMount(){
        console.log("in did mount")
        this.loadImages()
    }

    render(){
        console.log("In Images ,... fetched images", this.props.images)
        let images = this.props.images.map(image => <Image key={image.id} image={image} />)
        return ( 
            <InfiniteScroll
            dataLength={images.length}
            next={this.loadImages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            >
                <Row rowInnerStyle={{width:"100%"}}>
                    <Column columnInnerStyle="image-container">
                        {images}
                    </Column>
                </Row>
            </InfiniteScroll>)
    }
}

const mapStateToProps = (state) => {
    console.log("state",state);
    return {images : state.images}
}

export default connect(mapStateToProps, { fetchImages })(Images)