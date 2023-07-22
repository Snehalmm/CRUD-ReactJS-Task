// import Button from '@mui/base/Button';
import TableRow from '@material-ui/core/TableRow'; 
import { withStyles } from '@material-ui/core/styles'; 
import TableCell from '@material-ui/core/TableCell'; 

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Row = ({item, onDelete, onEdit}) =>{
    const StyledTableCell = withStyles((theme) => ({
        head: {
           backgroundColor: theme.palette.common.black,
           color: theme.palette.common.white,
        },
        body: {
           fontSize: 14,
        },
     }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
           '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
           },
        },
     }))(TableRow);

    return(
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
            {item.name}
        </StyledTableCell>
        <StyledTableCell align="right">{item.age}</StyledTableCell>
        <StyledTableCell align="right">{item.email}</StyledTableCell>
        <StyledTableCell align="right">
            {new Date(item.dob).toDateString()}
        </StyledTableCell>
        <StyledTableCell align="right">{item.gender}</StyledTableCell>
        <StyledTableCell align="right">{item.education}</StyledTableCell>
        <StyledTableCell align="left">
            <Stack spacing={2} direction={'row'}>
            <Button variant="contained" onClick={()=> onEdit(item)}>Edit</Button>
            <Button variant="contained" onClick={()=> onDelete(item.id)}>
                Delete
            </Button>
            </Stack>
            
        </StyledTableCell>
    </StyledTableRow>
    )
}

export default Row;