import React, { Component } from "react"

class HelloWorld extends Component{
   render(){
      return(
         <div>
            <h1>Hello World {this.props.tech}</h1>
         </div>
      )
   }
}

export default HelloWorld