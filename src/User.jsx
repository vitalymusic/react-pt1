import {useParams} from 'react-router-dom';



export default function User(){

    
     const { username } = useParams();



    return (
        <>
            <h1>UserName {username}</h1>
        
        </>

    )

}