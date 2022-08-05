import React from 'react';
import { Table } from 'reactstrap';



const TableComponent = ({ data }) => {

    return (
        <div><br></br><br></br>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Facility</th>
                        <th>Add.Info</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map(item => <tr key={item.id}>
                            <td>{item?.eventDate}</td>
                            <td>{item?.eventTime}</td>
                            <td>{item?.facilityName}</td>
                            <td>{item?.additionalInfo}</td>
                        </tr>)
                    }


                </tbody>
            </Table>

        </div>
    )
}

export default TableComponent