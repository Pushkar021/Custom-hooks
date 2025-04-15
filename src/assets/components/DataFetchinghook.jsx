import React from "react";
import useData from "../../hooks/userData";

const C1 = () => {
  const { data, loading } = useData(5);

  return loading ? (
    <>Loading....</>
  ) : (
    <div>
      This is main component
      {data.map((user, index) => (
        <Display key={index} data={user} />
      ))}
    </div>
  );
};

function Display({ data }) {
  return <p>{data.firstname}</p>;
}

export default C1;
