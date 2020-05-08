import React from 'react';
import logo from './logo.svg';
import './App.css';
import Further from './Further';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={Latitude :'',
                Longitude :'',
                submit: false
               };
  }
  submitHandlerLocation = (event) =>{
                                      this.setState({Latitude :event.target.value});
                                    }
  submitHandlerremainingFuel = (event) =>{
                                           this.setState({Longitude : event.target.value})
                                         }

  changeHandler = (event) =>{
                              event.preventDefault();
                              this.setState({submit : true});
                              //alert("your data is submitted  ")
                            }
  render() {
            return (
                     <div >
                     <header class='App-header'>
                     <h1>please enter your information </h1>
                     <form onSubmit={this.changeHandler} >
                     enter your Latitude :
                     <input type='text' onChange={this.submitHandlerLocation} />
                     <h1>  </h1>
                     enter your Longitude :
                     <input type='text' onChange={this.submitHandlerremainingFuel} />
                     <div class='App'>
                     <input type='submit' />
                     </div>
                     </form>
                     {
                      (this.state.submit)&&
                      <p>
                     <h1>data submitted by you is : </h1>
                     <h1>    Latitude = {this.state.Latitude}</h1>
                     <h1>    Longitude = {this.state.Longitude}</h1>
                     <Further Latitude = {this.state.Latitude} Longitude = {this.state.Longitude}/>
                     </p> 
                     }    
                     </header>
                     </div>
                   );

           }  
}

export default App;
