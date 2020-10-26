import React, {Component} from 'react';
import Table from './Table'
class PersonList extends Component {
    render() {
        const PersonLists = [
            {
                name:'Kingsley',
                sex:'Male',
                age:34
            },
            {
                name:'Mary',
                sex:'Female',
                age:31
            }
        ]
        let items = PersonLists.map((item) => (
            <Table person = {item} />

        ) )
        return (
            <div>
                   <table>
                       <thead>
                       <tr>
                           <th>name</th>
                           <th>sex</th>
                           <th>age</th>

                       </tr>

                       </thead>
                       
                {PersonLists.map((item, i) => (
                    <tbody key={i}>
                        <tr>
                           <td>{item.name}</td>
                           <td>{item.sex}</td>
                           <td>{item.age}</td>

                       </tr>
                    </tbody>
                       
                ))}
                   </table> 
           </div>
       )
   }
   }

export default PersonList
