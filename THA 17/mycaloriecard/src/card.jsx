export default function Card({ title, calorie }) {
  return (
    <div className="Card">
      <h1>{title}</h1>
      <h2>You have consumed {calorie} calories.</h2>
    </div>
  );
}