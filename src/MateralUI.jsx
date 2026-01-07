import Button from '@mui/material/Button';
import FormasDialogs from './FormasDialogs';





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


        <FormasDialogs openFunc={openDialog}/>
    
    </> );
}

export default MateralUI;