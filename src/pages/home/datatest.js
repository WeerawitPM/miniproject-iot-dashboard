import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      // const headers = {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // };
      const url = "https://backend-embedded.herokuapp.com/";
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setErrors(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <span>
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.Date}</span>
          </div>
        )
      })}
    </span>

    // <div>Has error: {JSON.stringify(hasError)}
    //   <br />
    //   <span>{JSON.stringify(data)}</span>
    // </div>
  );
};
export default useFetch;