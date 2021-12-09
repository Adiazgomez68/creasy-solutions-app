import * as React from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class AdvancesList extends React.Component {
    render() {
        return(
            <TableContainer component={Paper} elevation={3}
                style={{
                    position: 'relative', 
                    top: '150px', 
                    width: '91%', 
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bold'}}> Id </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Project name </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Progress date </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.projectName}</TableCell>
                                <TableCell align="left">{row.progressDate}</TableCell>
                                <TableCell align="left">
                                    <Link to="/advanceDetails" style={{textDecoration: 'none'}}>
                                        <Button 
                                        style={{
                                            color: 'white',
                                            background: '#07D165',
                                            textTransform: 'capitalize',
                                            width: '70px',
                                            height: '34px'
                                        }}
                                    > 
                                            More 
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default AdvancesList;