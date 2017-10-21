//Using the map() method on the topics array, let's start by returning an empty <li> element for each item.
//Using the single argument to the callback function passed to map(), render each topic inside the <li> tag.


class RobotItems extends React.Component {
  render() {
  
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    
    return (
      <div>
        <h3>Topics I am interested in</h3>
        <ul>
        
         { topics.map( ( topic)=> <li> {topic} </li>)  } 
          
        </ul>
      </div>
    );
  }
}
