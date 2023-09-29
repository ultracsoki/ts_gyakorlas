export class Book
{
  name: string;
  rating: number;

  constructor(name:string,rating:number)
  {
    this.name = name;
    if(rating < 1 && rating > 10)
    {
        //console.log('hiba');
        throw new Error('Hibauzenet');
    }
    else
    {
        this.rating = rating;
    }
  }

  //toString() : string
  //{
    //return `${this.name} ; ${this.rating}`;
  //}

  //public toString = () : string => {
  //  return `${this.name} ; ${this.rating}`;
//}
}