import React from 'react' ;
class Further extends React.Component
{
  constructor(props)
  {
     super(props);
     var la = this.props.Latitude;
     var Lo = this.props.Longitude;
     la = la + ","
     la = la + Lo
     this.state = {
     	la : la,
     	loading: true,
     	person : null
     };
  }	
  async componentDidMount()
  {
  	var l1 = this.state.la;
  	var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
  	const a = "&radius=1500&type=fuel%20station&keyword=petrol%20pump&key="
  	var b = "https://cors-anywhere.herokuapp.com/"
  	url = url+l1+a
  	const response = await fetch(b + url);
  	const data = await response.json();
  	console.log(data);
  	this.setState({person :data.results[0],loading : false});
  }
  
  render() 
        {
        	return(
        		   <div >
        		   <header class='App-header'>
        		   <h1>NEAREST FUEL STATION ARE : </h1>
        		   {this.state.loading || !this.state.person ? (
        		   	<div>...loading</div>
        		   	) : (
        		   	<div>
        		   	<p >
        		   	<h1>name :{this.state.person.name}</h1>  
        		   	<h1>address : {this.state.person.vicinity}</h1>
        		   	</p> 
        		   	</div>

        		   	
        		   	)

        		   }
        		   </header>
        		   </div>
        		  );
        }
}
export default Further;
  
        		   	