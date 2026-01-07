import Button from '@mui/material/Button';
import { useState } from "react";

function Pakalpojums(props) {

    const [color, setColor] = useState("green");
    


    function handleClick(){
        setColor("red");


    }

    function mouseLeave(){
        setColor("transparent");
    }
    


    let palielinatKartinu = (e)=>{
        e.preventDefault();
        document.querySelectorAll('.pakalpojumi .card').forEach((item)=>{
            item.classList.remove('big_card');
        })
        e.target.parentNode.classList.add('big_card');
    }




    return ( 
    <>
        <div className={props.stils} style={{background:color}} onMouseOver={handleClick} onMouseLeave={mouseLeave}>
                <h5>{props.nosaukums}</h5>
                <p>{props.apraksts}</p>
                <img src={props.attels} alt={props.nosaukums+"_logo"} />

                <Button variant="outlined" onClick={palielinatKartinu} sx={{mt:3}}>
                    Skatīt pakalpojumu
                </Button>
        </div>
    
    </> );
}

export default Pakalpojums;