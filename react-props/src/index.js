import React , {Component}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function  First (props){
//   return <div>
//     {props.name}
//     {props.age}
//     {/* <button onClick={()=>this.props.getData("React")}>get</button> */}
//   </div>
// }

// function Main (props){
//   console.log("props",props);
//   // const getData = (Data) => {
//   //   console.log("data",Data)
//   // };
//   return <div><h1>Shajith<First name={"sakthi"} age={34} /></h1></div>
// }

// import React, { Component } from 'react'

// import React, { Component } from 'react'

class Sample extends Component {
  render() {
    console.log("this",this)
    return (
      <div>Sample 
        {this.props.name}
        <button onClick={()=>{this.props.get("react")}}>get</button>
        </div>
    )
  }
}


class Main extends Component {
  getData=(data)=>{
    console.log("data",data)
  }
  render() {
    console.log("this",this)
    return (
      <div>Main <Sample name={"shajith"} get={this.getData}/> </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
