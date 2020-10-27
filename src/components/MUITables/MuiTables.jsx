import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables'



class MuiTables extends Component {
    
    render(){
        const columns = ["Name", "Company", "City", "States"];

        const data = [
            ["Joe James", "Test Corp", "Yonkers", "NY"],
            ["John Walsh", "Test Corp", "Hartford", "CT"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["James Houston", "Test Corp", "Dallas", "TX"],
        ];

        // const options = {
        //     filterType:'checkbox'
        // }
        return(
            <MUIDataTable 
                title = {"EMployee List"}
                data = {data}
                columns = {columns}
                // options = {options}
            />
        )
    }
}
export default MuiTables;