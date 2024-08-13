import { useRouteError } from "react-router-dom";

export default function Trips() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Erro ao carregar a página</p>
      <p><i>{error.status} {error.statusText}</i></p>
      <p><i>{error.data}</i></p>
    </div>
  )
}
