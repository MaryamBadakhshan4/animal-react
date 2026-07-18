import Aniaml from "./components/Animal"

function App(){
  const animals=[
  {id:1 , Aname:"گربه" , sound:"میو میو!"},
  {id:1 , Aname:"سگ" , sound:"واق واق!"},
  {id:1 , Aname:"مرغ" , sound:"قد قد قدا!"},
  {id:1 , Aname:"گاو" , sound:" مموووو!"}
];
return (
  <div>
    <h1>لیست حیوانات</h1>
    {animals.map((animal)=>(
      <Aniaml key={animal.id}
      Aname={animal.Aname}
      sound={animal.sound}/>
    ))}
  </div>
);
}
export default App;