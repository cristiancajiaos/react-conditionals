import './Goal.css'
import MadeGoal from './made-goal/MadeGoal';
import MissedGoal from './missed-goal/MissedGoal';

export default function Goal(props) {
  const isGoal = props.isGoal;

  if (isGoal) {
    return <MadeGoal/>
  }

  return <MissedGoal/>
}