import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPaginationSuccess} from '../../container/actions/Pagination'

 class PaginationUI extends Component {
     constructor(props){
         super(props)
         this.state = {
             items:[]
         }
     }
     
     componentDidMount(){
        this.props.getPaginationSuccess() 
         this.setState({items:this.props.pagination})
     }
    render() {
        const {pagination} = this.props
        const {items} = this.state
        console.log(items, 'iteeeeeeem')
        console.log(pagination , 'kknpnpjnponponpo')

        return (
            <div>
                <h1>PAGINATION</h1>
                <div className="parent">
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>View more</th>
                    </tr>
                    </thead>
                     {
                        pagination.map((items) => (
                            <tbody>
                                <tr>
                                    <td>{items.userId}</td>
                                    <td>{items.id}</td>
                                    <td>{items.title}</td>
                                    <td>{}</td>
                                </tr>
                            </tbody>
                        ))} 
                    
            </table>

                    {/* <div className="child">
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>View More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Earth boom</td>
                                <td>Done</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jumia</td>
                                <td>Done</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
pagination:state.pagination.pagination
})
export default connect(mapStateToProps, {getPaginationSuccess})(PaginationUI)