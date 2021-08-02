import "./App.css";
import Row from './Row'
import Column from './Column'
import Images from './Images'
import React from "react";


class App extends React.Component {

 

  render(){
    return (
      <>
        <header>
            <Row rowInnerStyle={{width:"100%"}}>
                <Column columnStyle={{width:"100%"}} columnInnerStyle="header">
                    <h4>Logo</h4>
                    <h2>Image Inifinte</h2>
                    <h4>Exit</h4>
                </Column>
            </Row>
        </header>
        <section>
            <Images />
        </section>
      </>
    );
  }
}

export default App;
