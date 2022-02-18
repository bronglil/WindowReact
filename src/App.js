import React, {Component} from "react";
import Season from "./components/season/Season";
import Loader from "./components/loader/loader";
import Error from "./components/error/Error";

// const App = () => {

//   window.navigator.geolocation.getCurrentPosition(
//     (position) => (position.coords.latitude, position.coords.longitude),
//     (err) => console.log(err)
//   );
//   return (
//       <div>
//         hello
//       </div>
    
//   );
// };

class App extends Component{
  // constructor(props){
    // super(props)
    state = {
      lattitude : null,
      longitute: null,
      errorMsg: ''
    }
    
  // }


  //life cycle hooks
  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lattitude: position.coords.latitude, longitute: position.coords.longitude})
      },
      (err) => {
        this.setState({errorMsg: err.message});
      }
    )
    }

  renderContent(){
    if(this.state.errorMsg && !this.state.lattitude && !this.state.longitute){
      return <Error err={this.state.errorMsg} color={"red"}/>
    }
    else if(this.state.lattitude && this.state.longitute && !this.state.errorMsg){
      return <Season getLat={this.state.lattitude} getLong={this.state.longitute}/>
     //  return <h1>latitude : {this.state.lattitude} longitude: {this.state.longitute}</h1>
    }
     return <Loader message={"turn on the location"}/>

  }


   render(){ 
      return (
        <div>
        {this.renderContent()}
        </div>
      )
   }
   
}
export default App;

