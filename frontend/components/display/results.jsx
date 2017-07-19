import React from 'react';
import Form from './form';
class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   debugger;
  // }
  render(){
    const { fetchPosts, fetchComments} = this.props;
    return(
      <div>

      <h1>this is the results components</h1>
      <Form fetchComments={fetchComments} fetchPosts={fetchPosts}/>
    </div>
    )
  }

}


export default Results;
