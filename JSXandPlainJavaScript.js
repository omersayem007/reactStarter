//Before the return statement, create a new variable called pi and assign it the value of PI. In case you don't remember, you can use the built-in Math.PI property from JavaScript.
//Reference the pi variable from inside the render() method so that the message returned by our component says: The value of PI is approximately 3.141592653589793
//Lastly, add a CSS class to the component <div> called is-tasty-pie


class RobotTime extends React.Component {
  render() { 
    const PI = Math.PI; 
    return (
      <div className ="is-tasty-pie" >
        The value of PI is approximately  { PI } ;
      </div>
    );
  }
}
 
