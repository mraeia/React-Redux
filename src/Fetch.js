import React, { Component } from 'react';
import data from './apis/data'; 

class Fetch extends Component {
  // state = {
  //   isLoading: true,
  //   groups: []
  // };

  componentDidMount() {
    data.get(`/api/groups`)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    // this.setState({ groups: reponse, isLoading: false });
  }

  render() {
    // const {groups, isLoading} = this.state;

    if (true) {
      return <p>Loading...</p>;
    }

    // return (
      // <div className="App">
      //   <header className="App-header">
      //     <div className="App-intro">
      //       <h2>JUG List</h2>
      //       {groups.map(group =>
      //         <div key={group.id}>
      //           {group.name}
      //         </div>
      //       )}
      //     </div>
      //   </header>
      // </div>
    // );
  }
}

export default Fetch;