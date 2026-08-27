import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearSwapiData } from "../store/swapi";

const BASE_URL = "https://swapi.py4e.com/api/";
const SwapiList = () => {
  const [endpoint, setEndpoint] = useState("people/1");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);
  const handleGetInfo = () => {
    if (!endpoint.trim()) return;
    dispatch(fetchSwapiData(endpoint.trim()));
  };
  const handleClear = () => {
    dispatch(clearSwapiData());
  };
  return (
    <div className="swapi-box">
      <div className="swapi-inputs">
        <input value={BASE_URL} readOnly className="swapi-base" />
        <input
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="people/1"
          className="swapi-endpoint"
        />
        <button onClick={handleGetInfo}>Get info</button>
      </div>
      {loading && <p>Завантаження...</p>}
      {error && <p className="swapi-error">Помилка: {error}</p>}
      {data && (
        <pre className="swapi-json">{JSON.stringify(data, null, 2)}</pre>
      )}
      <button className="swapi-clear" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default SwapiList;
