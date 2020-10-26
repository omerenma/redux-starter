import React, {Component} from 'react';
import { render } from '@testing-library/react';

class Table extends Component {
 render() {
      const {person} = this.props;
 console.log(person, 'iteeeeeeeeeeeeeeeeeeeeeeemmmmoo')

     return (
         <div>
             {/* <table>
                 <thead>
                     <th>Name</th>
                     <th>Sex</th>
                     <th>Age</th>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{person.name}</td>
                         <td>{person.sex}</td>
                         <td>{person.age}</td>
                     </tr>
                 </tbody>
             </table> */}
             <table>
                 <tr>

            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
                 </tr>
            <tr>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.sex}</td>
            </tr>

            
             </table>
             
             {/* <h1>
                 {
                    person.name
                 }
                 </h1> */}
         </div>
     )
 }
}

export default Table
