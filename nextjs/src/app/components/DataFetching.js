import React from 'react';

const DataFetching = ({ serverData }) => {
    console.log(serverData);
  return (
    
    <div>
      <h1>Data Fetching Example</h1>
      <h2>Server-side Data:</h2>
      <p>{serverData}</p>
      
    </div>
  );
};

export default DataFetching;

export async function getStaticProps() {
  // Fetch data from an API or any other source
  const serverData = "Data fetched at build time (using getStaticProps)";

  // Return the data as props
  return {
    props: {
      serverData
    }
  };
}

export const getServerSideProps = async () => {
  // Fetch data from an API or any other source
  const serverData = "Data fetched on each request (using getServerSideProps)";
    
  // Return the data as props
  return {
    props: {
      serverData
    }
  };
};