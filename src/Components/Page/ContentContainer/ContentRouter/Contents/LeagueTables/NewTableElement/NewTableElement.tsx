import React from 'react';
import { Table } from 'react-bootstrap';

type NewTableElementProps = {
    isVisible: boolean;
} 

const NewTableElement: React.FC = () => {
    const tableRow =  <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                        </td>
                    </tr>

    


    return (
        <Table striped bordered hover variant="dark">
            <thead>
            </thead>
            <tbody>
            </tbody> 
        </Table>
    );
}

