import { useState } from "react";
import Aniaml from "./components/Animal"


function App(){
  const animals=[
  {id:1 , Aname:"گربه" , sound:"میو میو!"},
  {id:1 , Aname:"سگ" , sound:"واق واق!"},
  {id:1 , Aname:"مرغ" , sound:"قد قد قدا!"},
  {id:1 , Aname:"گاو" , sound:" مموووو!"}
];
  const [randomAnimal, setrandomAnimal]=useState("");

  function RandomSound(){
    const rnd= Math.floor(Math.random()*animals.length);
    setrandomAnimal(animals[rnd])
  }
return (
  <div>
    <h1>لیست حیوانات</h1>
    {animals.map((animal)=>(
      <Aniaml key={animal.id}
      Aname={animal.Aname}
      sound={animal.sound}/>
    ))}
    <button onClick={RandomSound}>پخش تصادفی</button>
    {randomAnimal && (
      <p>{randomAnimal.sound}</p>
    )}
  </div>
);
}
export default App;