import { Book } from "./Book";

let list :Book []= [];
let obj1 : Book =
{
  name: 'Trónok Harca',
  rating: 7,
}
let obj2 : Book =
{
  name: 'Harry Potter',
  rating: 5,
}
let obj3 : Book =
{
  name: 'Állattemető',
  rating: 11,
}

list.push(obj1);
list.push(obj2);
list.push(obj3);
//Lista automatikus feltöltése
function ListAddRandomElements()
{
  let bookName = ""
  let bookRating = 0;
  for (let i = 0; i < 27; i++) {
    bookName = "Book #" + i;
    bookRating = Math.random()*10;
    let obj : Book =
    {
      name: bookName,
      rating: bookRating,
    }
    list.push(obj);
  }
}
ListAddRandomElements();
//Összes könyv
function OsszesKonyv() : void
{
  list.forEach(element => {
    console.log(element);
  });
}
OsszesKonyv();
//7-nél nagyobb értékelés
function HetnelNagyobb() : void
{
  console.log('7-nél nagyobb értékelésűek:')
  list.forEach(element => {
    if(element.rating > 7)
    {
      console.log(element);
    }
  });
}
HetnelNagyobb();
//BestOf függvény
function BestOf(books : Book[])
{
  let max = books[0].rating;
  let index = 0;
  let i = -1;
  books.forEach(element => {
    i++;
    if(element.rating > max)
    {
      max = element.rating;
      index = i;
    }
  });
  return books[index];
}

console.log('Legjobb könyv:')
console.log(BestOf(list));

function BookAdd()
{
  let name = (document.getElementById('name')! as HTMLInputElement).value;
  let rating = parseInt((document.getElementById('rating')! as HTMLInputElement).value);
  let obj : Book =
{
  name: name,
  rating: rating,
}

list.push(obj);
console.log('Egy könyv hozzáadva:')
OsszesKonyv();
HetnelNagyobb();
console.log('Legjobb könyv:')
console.log(BestOf(list));
}

function init()
{
  document.getElementById('buttonSubmit')?.addEventListener('click',BookAdd);
}

document.addEventListener('DOMContentLoaded',init);