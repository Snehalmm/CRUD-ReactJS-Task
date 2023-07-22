import React, {useEffect, useState} from "react";
import { TextField, Button } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const EditRecord = ({open, handleClose, setGetData, getData, getItem}) => {
    const [data, setData] = useState(getItem)
    const [fieldError, setFieldError] = useState({
        'name': '',
        'email':'',
        'age':'',
        'dob':'',
        'education':'',
        'gender':''
    })
 
    const handleSubmit = (event) => {
        event.preventDefault()
            if(data?.name?.length===0){
                setFieldError((prev)=> ({...prev, 'name': 'Please Enter the name'}))
            }else {
                setFieldError((prev)=> ({...prev}))
            }
            if(data?.email?.length===0){
                setFieldError((prev)=> ({...prev, 'email': 'Please Enter the email'}))
            }else {
                setFieldError((prev)=> ({...prev}))
            }
            if(data?.age?.length===0){
                setFieldError((prev)=> ({...prev, 'age': 'Please Enter the age'}))
            }else {
                setFieldError((prev)=> ({...prev}))
            }
            if(data?.education?.length===0){
                setFieldError((prev)=> ({...prev, 'education': 'Please Enter the education'}))
            }else {
                setFieldError((prev)=> ({...prev}))
            }
            let exData=[...getData]
            let findIndex= exData.findIndex((item)=> item.id===data?.id)
            exData[findIndex] = data;
        setGetData([...exData])
        handleClose();
    }
       

    const handleChange= (key, value)=>{
        setData((prev)=> ({...prev, [key]: value}))
    }
    useEffect(()=>{
        if(getItem){
            setData(getItem)
        }
    }, [getItem])
     
    return ( 
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
>
                <Box sx={{ ...style, width: 400 }}>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <h2>Edit Record</h2>
                            <TextField 
                                label="Name"
                                onChange={e => handleChange('name', e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                value={data?.name}
                                error={fieldError?.name}
                            />
                            <TextField 
                                label="Email"
                                onChange={e => handleChange('email', e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="email"
                                sx={{mb: 3}}
                                fullWidth
                                value={data?.email}
                                error={fieldError?.email}
                            />
                            <TextField 
                                label="Age"
                                onChange={e => handleChange('age', e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="number"
                                value={data?.age}
                                error={fieldError?.age}
                                fullWidth
                                sx={{mb: 3}}
                            />
                            <TextField 
                                label="Education"
                                onChange={e => handleChange('education', e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                value={data?.education}
                                error={fieldError?.education}
                            />
                            <TextField
                                type="date"
                                variant='outlined'
                                color='secondary'
                                label="Date of Birth"
                                onChange={e => handleChange('dob', e.target.value)}
                                value={data?.dob}
                                fullWidth
                                required
                                sx={{mb: 4}}
                            />
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={data?.gender}
                                    name="radio-buttons-group"
                                    onChange={e => handleChange('gender', e.target.value)}

                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" checked={data?.gender==='female'} />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" checked={data?.gender==='male'} />
                                </RadioGroup>
                            <Button variant="outlined" color="secondary" type="submit">Submit</Button>
                        
                    </form>
                </Box>
            </Modal>
        </React.Fragment>
     );
}
 
export default EditRecord;