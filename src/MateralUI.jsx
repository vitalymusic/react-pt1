import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import StandardImageList from './Imagelist'


function MateralUI() {

    const openDialog = ()=>{
        setOpen(true);
    }


    return ( 
    <>
        <Button variant="outlined" size="large" sx={
           {m:'50px'}
        } onClick={openDialog}>
            Hello world
        </Button>



        <Alert icon={
            <CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
        </Alert>
        <StandardImageList />      
    </> );
}

export default MateralUI;