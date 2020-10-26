import React, {Component} from 'react';
import Table from './Table';

class TableRenderer extends Component {

    render() {
        const {person} = this.props;
        console.log(person, 'iteeeeeeeeeeeeeeeeeeeeeeemmmmoo')
        return (
            <div>
<Table fname={person.name} age={person.age} sex={person.sex} />
            </div>
        )
    }
}

export default TableRenderer