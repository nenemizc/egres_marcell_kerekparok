import type { KerekparType } from "../types/KerekparType";
import Kerekparok from "../data/Kerekparok";
import { useState } from "react";

const kerekparok:KerekparType[] = await Kerekparok();

function KerekparCard(props:KerekparType){
    const [hidden,setHidden] = useState(true);
    return(
        <>
            <div key={props.id} className="card">
                <div className="card-body">
                    <h3 className="card-title" style={{color: props.szin}}>{props.nev}</h3>
                    {!hidden && <p className="card-text"><em>{props.tipus}</em></p>}
                    {!hidden && <p className="card-text"><u>{props.napiDij}</u></p>}                    
                    <button className="btn btn-primary" type="button" onClick={() => setHidden(!hidden)}>Részletek</button>
                </div>
            </div>
        </>
    )

}

function Kerekpar(){
    return(
        <>
            {kerekparok.map(k => 
                <KerekparCard id={k.id}  nev={k.nev} tipus={k.tipus} napiDij={k.napiDij} szin={k.szin}/>
            )}
        </>
    )
}

export default Kerekpar;