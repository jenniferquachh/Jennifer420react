import p1 from '../images/project1.jpg';

export default function Projects() {
  return (
    <div className="App">
      <header className="headerpg">
        <h1>My Projects</h1>
        <p>about my projects</p>
        <div className="imgflex"> 
          <img className="imgspace" src={p1}/>
          <p>some text about project</p>
          <img className="imgspace" src={p1}/>
          <p>some text about project</p>
          <img className="imgspace" src={p1}/>
          <p>some text about project</p>
        </div>
      </header>
    </div>
  );
}