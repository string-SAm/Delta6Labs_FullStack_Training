import React, { useEffect, useState } from "react";

function ErrorHandling() {
  const [data, setData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
;
  return (
    <div>
      {error ? (
        <p>An error occurred: {error.message}</p>
      ) : data ? (
        <div>
          <h2>Data fetched successfully:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ErrorHandling;
