import { useState, useEffect } from "react";

const useFetch = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    // <span>
    //   {data && data.map((item, index) => {
    //     return (
    //       <div key={index}>
    //         <span>{item.title}</span>
    //       </div>
    //     )
    //   })}
    // </span>
    <div>Has error: {JSON.stringify(hasError)}
      <br />
      <span>{JSON.stringify(data)}</span>
    </div>
  );
};
export default useFetch;