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
      return <input onChange={(event) => console.log(event.target.value)}      placeholder="Search here.." />
    }

    // onHandleChange(event){
    //     console.log(event.target.value);
    // }
}

export default todoSearch;
