import React, { Component } from 'react'
import {getData} from '../container/actions/getData'
import {connect} from 'react-redux'

class Count extends Component {
    componentDidMount(){
      this.props.getData();
    }
  render() {
      const {data} = this.props
      if(!data){
        console.log('Loading....')
      }else{
      // var list = Array.prototype.data.map((list, i) => <li key={i}>{list}</li>)
        // var list = data.map((list, i) => <li key={i}>{list}</li>)
      }
      
    return (
      <div>
        <button onClick={this.handleClick}>Click to count</button>
          {/* <div>{list}</div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    data:state.data.data
})
export default connect(mapStateToProps, {getData})(Count)