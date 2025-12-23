import Pakalpojums from './Pakalpojums'
import './Pakalpojumi.css'

function Pakalpojumi() {
    return ( 
    <>
        <h3>Pakalpojumi</h3>
        <div className="pakalpojumi">
            <Pakalpojums 
                nosaukums="Web lapu izstrāde" apraksts="Mājaslapu izstrāde ar 10 gadu pieredzi"
                attels="https://picsum.photos/id/67/300"
                adrese="#"
                stils="card"
                key="1"
            />
            <Pakalpojums 
                nosaukums="Mājaslapu uzturēšana" apraksts="Piedāvājam hostinga pakalpojumus"
                attels="https://picsum.photos/id/77/300"
                adrese="#"
                 stils="card accent"
                 key="2"
            />
            <Pakalpojums 
                nosaukums="Lietotņu programmēšana" apraksts="Lietotņu programmēšana ar C#, ASP.net, PHP"
                attels="https://picsum.photos/id/99/300"
                adrese="#"
                 stils="card"
                 key="3"
            />
            

        </div>
    
    </> );
}

export default Pakalpojumi;