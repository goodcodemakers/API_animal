import "./App.css";
import { useEffect, useState } from "react";
import Item from "./components/Item";

function App() {
  const API_key =
    "ZwjdolGMPlwKDKgf7%2FdwTHL5iLxRG%2Fy3e%2FsoWTXzd6eFglmK8ReAW%2BCBY0gYHK%2Bm7JJPqa0sHX1s5SnXsKbD%2Fw%3D%3D";
  const API_url = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_key}&numOfRows=10&pageNo=2&resultType=json`;
  const [animals, setAnimals] = useState([]);

  const getAnimalData = () => {
    fetch(API_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.getPetAnimalInfo.body.items.item);
        const items = data.getPetAnimalInfo.body.items.item;
        setAnimals(items);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAnimalData();
  }, []);
  return (
    <>
      <h1>부산시 동물구조 현황</h1>
      <div className="item">
        <Item animals={animals} />
      </div>
    </>
  );
}

export default App;
