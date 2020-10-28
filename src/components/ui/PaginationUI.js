import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostsPerPage from './PostsPerPage'
import {getPaginationSuccess} from '../../container/actions/Pagination'
import {
Next,
Back
} from '../../icons/icons'

 class PaginationUI extends Component {
     constructor(props){
         super(props)
         this.state = {
             items:[],
             currentPage:1,
             itemsPerPage:5
         }
     }
     componentDidMount(){
        this.props.getPaginationSuccess();
         this.setState({items:this.props.pagination})
     }
     nextPage = (e) => {
         
     }
    render() {
        const {pagination, loading} = this.props;
        const {currentPage, itemsPerPage} = this.state

        // Get current page
        const IndexOfLastPage = currentPage * itemsPerPage;
        // Index of first page
        const indexOfFirstPage = IndexOfLastPage - itemsPerPage;
        const currentPosts = pagination.slice(indexOfFirstPage, IndexOfLastPage);
        // Change page
        const paginate = (pageNumber) => {
            this.setState({currentPage:pageNumber})
        }

        console.log(loading, 'looooding')
        const {items} = this.state
        console.log(items, 'iteeeeeeem')
        console.log(pagination , 'kknpnpjnponponpo')
        let sn = 0;
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
                         loading == true ? <h1>Loading ...</h1> :
                        currentPosts.map((items) => (
                            <tbody key={items.id}>
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.title}</td>
                                    <td>{items.completed ? 'Completed' : 'Not completed'}</td>
                                    <td>Loading</td>
                                </tr>
                            </tbody>
                        ))} 
            </table>
                </div>
                <div className="pages">
                    <PostsPerPage
                     postsPerPage = {itemsPerPage}
                      totalPosts={pagination.length}
                      paginate={paginate}
                      />
                {/* <button className="btn">
                    <Back style={{width:'20px'}}/>
                </button>
                <button className="btn"
                onClick={this.nextPage}
                >
                    <Next style={{width:'20px'}}/>
                </button> */}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
pagination:state.pagination.pagination,
loading:state.pagination.loading
})
export default connect(mapStateToProps, {getPaginationSuccess})(PaginationUI)