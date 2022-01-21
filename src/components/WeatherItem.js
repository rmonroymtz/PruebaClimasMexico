const WeatherItem = (props) => {
  const { _id, cityid, name, probabilityofprecip, state, relativehumidity } =
    props;
  const dateInsert = new Date(Date(props["date-insert"]));
  const date = `${dateInsert.getFullYear()}/${dateInsert.getMonth < 9 ? 1 : 0}${
    dateInsert.getMonth() + 1
  }/${dateInsert.getDate()}`;
  const precip = probabilityofprecip > 60 || relativehumidity > 50 ? "Llueve" : "No llueve";
  return (
    <tr>
      <td>{_id}</td>
      <td>{cityid}</td>
      <td>{name}</td>
      <td>{state}</td>
      <td>{probabilityofprecip}</td>
      <td>{relativehumidity}</td>
      <td>{date}</td>
      <td>{precip}</td>
    </tr>
  );
};

export default WeatherItem;
