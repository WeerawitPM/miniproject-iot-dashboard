import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      const url = "https://jsonplaceholder.typicode.com/todos";
      const res = await axios.get(url, { headers });
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
            <span>{item.title}</span>
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