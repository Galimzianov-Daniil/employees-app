import React from "react";

import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import {IEmployee} from "../interfaces";
import EmployeeRow from "./EmployeeRow";


const EmployeesList: React.FC<{ employees: IEmployee[] }> =
    ({employees}) => {

        return (
            <>
                <Box mb={2}>
                    <Typography variant="h4">Сотрудники</Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ФИО</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                !!employees.length
                                    ? employees.map((employee, i) => (<EmployeeRow key={employee.name + i} employee={employee}/>))
                                    : <TableRow><TableCell><Typography variant="body2">Сотрудников нет</Typography></TableCell></TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }

const mapStateToProps = (state: any) => ({
    employees: state.employees.employees
})

export default connect(mapStateToProps)(EmployeesList);