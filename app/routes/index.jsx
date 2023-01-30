import { useLoaderData } from "react-router";
function index() {
  const data= useLoaderData;
  return (
    <div>
      <h1>{data.city}</h1>
      <h2>{data.type}</h2>
      <h3>Temperature: {data.temp} °C</h3>
    </div>
  );
}

export default index;