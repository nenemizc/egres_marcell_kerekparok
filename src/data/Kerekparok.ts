import type { KerekparType } from "../types/KerekparType";

async function Kerekparok(){
    const response = await fetch('kerekparok.json');
    const kerekparok:KerekparType[] = await response.json();

    return kerekparok;
}

export default Kerekparok;