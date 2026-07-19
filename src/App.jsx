import { useState } from "react";
import Animal from "./components/Animal";

function App() {

  const animals = [
    { id: 1, Aname: "گربه", sound: "میو میو!" },
    { id: 2, Aname: "سگ", sound: "واق واق!" },
    { id: 3, Aname: "مرغ", sound: "قد قد قدا!" },
    { id: 4, Aname: "گاو", sound: "مموووو!" }
  ];


  const [randomAnimal, setrandomAnimal] = useState("");

  const [catCount, setCatCount] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  const [chickenCount, setChickenCount] = useState(0);
  const [cowCount, setCowCount] = useState(0);


  function RandomSound() {

    const rnd = Math.floor(Math.random() * animals.length);

    setrandomAnimal(animals[rnd]);


    if (animals[rnd].id === 1) {
      setCatCount(catCount + 1);
    }

    if (animals[rnd].id === 2) {
      setDogCount(dogCount + 1);
    }

    if (animals[rnd].id === 3) {
      setChickenCount(chickenCount + 1);
    }

    if (animals[rnd].id === 4) {
      setCowCount(cowCount + 1);
    }

  }


  return (
    <div>

      <h1>لیست حیوانات</h1>

      {animals.map((animal) => (
        <Animal
          key={animal.id}
          Aname={animal.Aname}
          sound={animal.sound}
        />
      ))}


      <button onClick={RandomSound}>
        پخش تصادفی
      </button>


      {randomAnimal && (
        <p>{randomAnimal.sound}</p>
      )}


      <h3>تعداد پخش صداها</h3>

      <p>صدای گربه: {catCount}</p>
      <p>صدای سگ: {dogCount} </p>
      <p>صدای مرغ: {chickenCount} </p>
      <p>صدای گاو: {cowCount} </p>


    </div>
  );
}

export default App;