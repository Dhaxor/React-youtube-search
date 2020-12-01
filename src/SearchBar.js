import React, {Component} from 'react'

// const  todoSearch  = () => {
//   return (
//      <div>
//         <input />
//       </div>

//   );

// };

class todoSearch extends Component{

    render(){
      return <input onChange={(event) => this.onHandleChange(event.target.value) }      placeholder="Search here.." />
    }
    
    onHandleChange(term){
      this.setState({term});

      this.props.onSearchtermChange(term);
    }
}

export default todoSearch;
