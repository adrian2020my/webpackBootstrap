import React, { Component } from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';



class HomeUploadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      updateNoteId: null,
    };
    $('.alert').alert();

  };

  myload = (event) => {
    event.preventDefault();
    let target = event.target || event.srcElement;
    console.log(target.innerHTML);
    $(".alert").alert('close');
  };


  render() {

    return (
        <div>
          <h2>My Home</h2>
          <h3>Upload new file</h3>
          {/*Button trigger modal */}

          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
          <button onClick={this.myload}>Think Twice</button>
        </div>
    )
  }
}



const mapStateToProps = state => {
  return {
  }
};


const mapDispatchToProps = dispatch => {
  return {
  }
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeUploadView));