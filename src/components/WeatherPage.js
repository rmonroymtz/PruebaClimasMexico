import useWeather from "./useWeather";
import classes from "./WeatherPage.module.scss";
import WeatherItem from "./WeatherItem";
const WeatherPage = () => {
  const { loading, error, data, nextPage, prevPage, pagination } = useWeather();

  if (loading && !data) return <p> Cargando datos del clima...</p>;

  if (error) return <p> Error al consultar la pagina</p>;

  const consults = !!data
    ? data.map((item) => <WeatherItem {...item} key={item._id} />)
    : null;

  const classesPrev = pagination > 1 ? classes.button : classes.buttonDisabled;
  const classesNext = data.length >= 10 ? classes.button : classes.buttonDisabled;
  return (
    <div className={classes.root}>
      <h1>Listado de climas</h1>

      <div className={classes.buttonContainer}>
        <button className={classesPrev} onClick={prevPage}>
          Pagina Anterior
        </button>
        <button className={classesNext} onClick={nextPage}>
          Pagina Siguiente
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>ID Ciudad</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Probabilidad de lluvia</th>
            <th>Humedad</th>
            <th>Ultimo Reporte</th>
            <th>Llueve</th>
          </tr>
        </thead>
        {consults && <tbody>{consults}</tbody>}
      </table>
    </div>
  );
};

export default WeatherPage;
