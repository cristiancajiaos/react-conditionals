import './Car.css'

export default function Car(props) {
  return (
    <>
      {props.model && <h1>My car is a {props.model}</h1>}
    </>
  );
}