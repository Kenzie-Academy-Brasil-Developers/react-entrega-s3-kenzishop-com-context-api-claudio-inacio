import Global from "./styles/global";
import Routes from "./routes/routes";
import { CatalogProvider } from "./providers/productsCatalog";
function App() {
  return (
    <div className="App">
      <Global />
      <CatalogProvider>
        <Routes />
      </CatalogProvider>
    </div>
  );
}

export default App;
