import Kerekparok from "../data/Kerekparok";
import type { KerekparType } from "../types/KerekparType";
import Kerekpar from "./Kerekpar";

const kerekparok:KerekparType[] = await Kerekparok();

function getMin(){
    let min = 999999999999999999999999;
    for (const kerekpar of kerekparok){
        if (kerekpar.napiDij < min){
            min = kerekpar.napiDij;
        }
    }
    return min;
}

function getMax(){
    let max = 0;
    for (const kerekpar of kerekparok){
        if (kerekpar.napiDij > max){
            max = kerekpar.napiDij;
        }
    }
    return max;
}


export default function KerekparLista(){
    document.title = "Kiadó kerékpárok";    

    return(
        <>
            <div className="container">
                <div className="row mb-3 mt-2">
                    <div className="text-center">
                        <h1>Kiadó Kerékpárok</h1>
                    </div>
                </div>
                <div className="row mb-3 mt-2">
                    <div className="col-sm-4">
                        <p>A kerékpárok száma: {kerekparok.length}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>A legolcsóbb kerékpár bérleti díja: {getMin()}</p>
                    </div>
                    <div className="col-sm-4">
                        <p>A legdrágább kerékpár bérleti díja: {getMax()}</p>
                    </div>
                </div>
                <div className="row"><Kerekpar/></div>
            </div>
        </>
    )
}