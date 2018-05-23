import { Ability} from './Ability';

export class Hero
{
    name: String;
    id: Number;
    picture: String
    type: Number;

    //List of Abilities 
    myAbilities: Ability[];
    
    
    //Initializing our Hero when we first create it 
    constructor ()
    {
    }
}

