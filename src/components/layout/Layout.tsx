import './Layout.css'
import Car from './car/Car';
import Goal from './goal/Goal';

export default function Layout() {

  const shots = [true, false, false, true, true, false]
  return (
    <section className="container my-2">
      {shots.map(shot => <Goal isGoal={shot}/>)}

      <hr/>

      <Car model="Mustang"/>
    </section>
  );
}