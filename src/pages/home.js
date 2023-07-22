import * as React from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody'; 
import TableCell from '@material-ui/core/TableCell'; 
import TableContainer from '@material-ui/core/TableContainer'; 
import TableHead from '@material-ui/core/TableHead'; 
import TableRow from '@material-ui/core/TableRow'; 
import Paper from '@material-ui/core/Paper';
import Row from '../components/Row';
import AddRecord from '../components/Form';
import Button from '@mui/material/Button';
import EditRecord from '../components/EditForm';

const data=[
   {
    'id': 1,
    'age':25,
    'name':'snehal Mahabare',
    'email': 'snehal@gmail.com',
    'dob': '1996-12-10',
    'gender': 'female',
    'education': 'MCA'
   },
   {
    'id': 2,
    'age':26,
    'name':'Abc Xyz',
    'email': 'abc@gmail.com',
    'dob': '1995-11-01',
    'gender': 'male',
    'education': 'BE IT'
   },
   {
    'id': 3,
    'age':24,
    'name':'Pqr Stv',
    'email': 'pqr@gmail.com',
    'dob': '1996-05-02',
    'gender': 'female',
    'education': 'BSC IT'
   },
   {
    'id': 4,
    'age':26,
    'name':'Bdf Dhj',
    'email': 'bdf@gmail.com',
    'dob': '1994-02-28',
    'gender': 'female',
    'education': 'BCA'
   },
   {
    'id': 5,
    'age':27,
    'name':'Dom Ggh',
    'email': 'dom@gmail.com',
    'dob': '2000-06-26',
    'gender': 'female',
    'education': 'B Com'
   },

]

const Home = ()=>{
    const StyledTableCell = withStyles((theme) => ({
        head: {
           backgroundColor: theme.palette.common.black,
           color: theme.palette.common.white,
        },
        body: {
           fontSize: 14,
        },
     }))(TableCell);

     const [getData, setData] = React.useState(data)
     const [getItem, setGetItem] = React.useState(null)
     const [openAddForm, setAddForm] = React.useState(false)
     const onDelete=(id)=>{
        const data = getData.filter((item)=> item.id!==id)
        setData(data)
     }
     const [editForm, setEditForm] = React.useState(false);
     const onEdit=(item)=>{
        setEditForm(true)
        setGetItem(item)
     }
     const onEditHandleClose=()=>{
        setEditForm(false)
        setGetItem(null)
     }
    return(
        <>
            <div style={{display:'block', padding:'20px'}}>
                <Button variant="contained" onClick={()=> setAddForm(true)}>Add Record</Button>
            </div>
            <AddRecord open={openAddForm} handleClose={()=> setAddForm(false)} setGetData={setData} getData={getData}/>
            <EditRecord open={editForm} handleClose={onEditHandleClose} setGetData={setData} getData={getData} getItem={getItem}/>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Date Of Birth</StyledTableCell>
                            <StyledTableCell align="right">Gender</StyledTableCell>
                            <StyledTableCell align="right">Education</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getData.map((item, index)=>{
                            return(
                                <Row item={item} key={index} onDelete={onDelete} onEdit={onEdit} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer> 
        </>
  
    )
}
export default Home;