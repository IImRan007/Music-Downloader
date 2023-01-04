import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMusicData = async () => {
      const url = "https://music-api-nu-ten.vercel.app/";

      const response = await axios.get(url);
      const data = response.data;

      setData(data);
    };

    getMusicData();
  }, []);

  return (
    <>
      <div className="flex justify-around flex-row flex-wrap p-4">
        {data && data.map((value) => <Card value={value} key={value.ID} />)}
      </div>
    </>
  );
};

export default Home;
