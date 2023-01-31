import Header from "./components/Header"
import Contents from "./components/Contents"
import Total from "./components/Total"


function App() {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },{
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
    }
  return (
    <div className="App">
      <Header course={course.name} />
      <Contents parts={course.parts} />
      <Total parts={course.parts}/>
    </div>

    
  );

}

export default App;
