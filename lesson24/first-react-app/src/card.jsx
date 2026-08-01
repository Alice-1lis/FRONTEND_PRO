function Card() {
  return (
    <div className="card bg-secondary text-light h-100">
      <div className="card-body">
        <h3>gamer 1</h3>
        <h5 className="card-title text-warning">Alice Skywalker</h5>
        <p className="card-text">
          <strong>Рік народження:</strong> 19BBY
          <br />
          <strong>Колір волосся:</strong> brown
          <br />
          <strong>Колір очей:</strong> brown
          <br />
          <strong>Стать:</strong> female
        </p>
      </div>
    </div>
  );
}
export default Card;