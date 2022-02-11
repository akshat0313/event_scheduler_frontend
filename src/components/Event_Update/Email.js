import React from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { InputLabel } from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';
import TimePicker from '@mui/lab/TimePicker';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
const Email = () => {
    const style = {
        width: '100%',
        maxWidth: 1200,
        bgcolor: 'background.paper',
        marginTop: '25px'
      };
      const Modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        boxShadow: 24,
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openlink, setOpenlink] = React.useState(false);
    const handleOpenlink = () => setOpenlink(true);
    const handleCloselink = () => setOpenlink(false);
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);

    return(
        <div className='flex flex-col'style={{width:'100%'}}>
            <div className='flex flex-col align-middle' style={{width:'100%', justifyContent:'space-between',marginTop:'20px'}}>
                <Typography variant="h3">Registration Email</Typography>
                <div className="flex flex-row shadow-lg rounded-lg p-4 mt-4">
                    <div style={{color:'gray',marginRight:'30px'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet placerat. Fusce vestibulum venenatis purus, eu vestibulum mi sagittis et.
                    </div> 
                    <div>
                            <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} onClick={handleOpenlink}>
                                <CreateIcon />
                            </Button>
                            <Modal
                                open={openlink}
                                onClose={handleCloselink}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={Modalstyle}>
                                    <div className="flex flex-col" style={{maxWidth:'500px',margin:'0 auto'}}>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'40px'}}><Typography variant="h4">Share Registration Email Link</Typography></div>
                                        <div className="flex flex-row justify-between align-middle mb-10">
                                            <div style={{width:'80%'}}>
                                                <input type="text" className='rounded-sm w-full' placeholder='Paste Link' style={{border:'solid gray 1px',borderRadius: '6px',height:'50px',marginTop:'2px',padding:'2px'}}/>
                                            </div>
                                            <div>
                                                <Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} >Upload</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                    </div>
                </div>
            </div>
            <div className='flex flex-row' style={{width:'100%', justifyContent:'space-between',marginTop:'40px'}}>
                <div><Typography variant="h3">Scheduled Email</Typography></div>
                <div><Button variant="contained" sx={{borderRadius:'100px', backgroundColor:'#3D55BE'}} onClick={handleOpen}>+ New</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={Modalstyle}>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between" style={{backgroundColor:'#C1C1FF'}}>
                                <div style={{height:'65px',display:'flex',alignItems:'center',marginLeft:'20px'}}><Typography variant="h6" sx={{color:'white'}}>New Announcment</Typography></div>
                                 <div><IconButton aria-label="delete" onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton></div>
                            </div>
                            <div style={{margin:'0 auto'}}>
                            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',marginLeft:'25px',marginTop:'25px',padding:'4px',boxShadow:'gray 0px 1px 5px',borderRadius: '6px',border:'4px solid white'}}>
                                <div className="flex flex-col"> <Typography variant='h6'>Recipients</Typography></div>
                                <div>
                                    <input type="text" className='rounded-sm w-full' placeholder='Enter Recipients' style={{border:'solid white',borderRadius: '6px',height:'50px',marginTop:'2px'}}/>
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',marginLeft:'25px',marginTop:'25px',padding:'4px',boxShadow:'gray 0px 1px 5px',borderRadius: '6px',border:'4px solid white'}}>
                                <div className="flex flex-col"> <Typography variant='h6'>Subject</Typography></div>
                                <div>
                                    <input type="text" className='rounded-sm w-full' placeholder='Enter Recipients' style={{border:'solid white',borderRadius: '6px',height:'50px',marginTop:'2px'}}/>
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',marginLeft:'25px',marginTop:'25px',padding:'4px',boxShadow:'gray 0px 1px 5px',borderRadius: '6px',border:'4px solid white'}}>
                                <div className="flex flex-col"> <Typography variant='h6'>Body Text</Typography></div>
                                <div>
                                    <input type="text" className='rounded-sm w-full' placeholder='Enter Text' style={{border:'solid white',borderRadius: '6px',height:'50px',marginTop:'2px'}}/>
                                </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',marginLeft:'25px',marginTop:'25px',padding:'4px',boxShadow:'gray 0px 1px 5px',borderRadius: '6px',border:'4px solid white'}}>
                                <div className="flex flex-col"> <Typography variant='h6'>When to send the mail</Typography></div>
                                <div className="flex flex-row">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Select Date"
                                        value={date}
                                        onChange={(newDate) => {
                                        setDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Select Time"
                                        value={time}
                                        onChange={(newTime) => {
                                        setTime(newTime);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                                </div>
                            </div>
                            <div>
                            <Button variant="contained" startIcon={<SendIcon />} sx={{borderRadius:'100px', backgroundColor:'#3D55BE',marginLeft:'25px',marginTop:'20px',marginBottom:'50px'}}> Send </Button>
                            </div>
                            </div>
                        </div>
                    </Box>
                </Modal></div>
            </div>
            <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <Divider />
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                <ListItem sx={{height:'72px'}} secondaryAction={
                    <Button aria-label="delete" variant="contained" sx={{borderRadius:'100px', backgroundColor:'#EB5757'}}>
                      <DeleteIcon />
                    </Button>
                  } button divider>
                    <ListItemText primary="Event Name" />
                </ListItem>
                
            </List>
            </div>
        </div>
    );
}
export default Email;