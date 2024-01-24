const React = require('react')
class Show extends React.Component {
   render () {
    const vegetables = this.props.vegetables
    return (
        <div>
            <h1>Show Page</h1>
            The {vegetables.name} is {vegetables.color} 
            {vegetables.readyToEat? 'It is ready too eat' : 'It is not ready to eat...  Cat touch this'}
        </div>
      
     );
    }
 }
 module.exports  = Show;