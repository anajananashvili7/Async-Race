import { useCallback, useState } from "react";
import Navigation from "./components/navigation";
import Garage from "./pages/garage";
import WinnersTable from "./pages/winners";


function App() {
  const [page, setPage] = useState(null);
  const [winners, setWinners] = useState([]);
  const onChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  

  return (
    <>
      <header>
        {/* TODO: add onchange */}
        <Navigation onChange={onChange} />
      </header>

      {page === "garage" && <Garage />}
      {page === "winners" && <WinnersTable winners={winners} />}
    </>
  );
}

export default App;