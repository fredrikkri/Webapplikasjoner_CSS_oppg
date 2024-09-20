import Grid from "./components/Grid";

const students = [
  {id: "2", name: "Ronaldo Luiz Nazário de Lima"},
  {id: "3", name: "Edson Arantes do Nascimento"},
  {id: "4", name: "Neymar da Silva Santos Júnior"},
  {id: "5", name: "Endrick Felipe Moreira de Sousa"}
]

function App() {
  return (
    <>
  {/* <Student id="1" name="Ronaldo de Assis Moreira"/> */}
  <Grid students={students}/>
  </>)
  ;
}

export default App;