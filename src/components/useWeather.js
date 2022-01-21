import { useState, useEffect, useCallback } from "react";

const useWeather = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [pagination, setPagination] = useState(1);

  const consultPage = (pagination) => {
    fetch(
      `https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${pagination}&pageSize=10`
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError({
          error: true,
          message: err,
        });
      })
      .then((response) => {
        setLoading(false);
        setData(response.results);
      });
  };

  useEffect(() => {
    consultPage(pagination);
  }, [pagination]);

  const nextPage = useCallback(() => {
    setLoading(true);
    setPagination(pagination + 1);
  }, [pagination]);

  const prevPage = useCallback(() => {
    if (pagination === 1) return;
    setLoading(true);
    setPagination(pagination - 1);
  }, [pagination]);

  return {
    data,
    loading,
    error,
    nextPage,
    prevPage,
    pagination
  };
};

export default useWeather;
