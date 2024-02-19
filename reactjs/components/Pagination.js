import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
            .then((response) => response.json())
            .then((data) => {
                setTodo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [page]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>Todos</h1>
                    <ul>
                        {todo.map((item) => (
                            <li key={item.id}>
                                <p>ID: {item.id}</p>
                                <p>Title: {item.title}</p>
                                <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                    <button onClick={handleNextPage}>Next</button>
                </>
            )}
        </div>
    );
};

export default Pagination;
