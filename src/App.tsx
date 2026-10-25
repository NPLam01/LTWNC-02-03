import { ProductExplorer } from "./legacy_pages/ProductExplorer";
import { ShopProvider } from "./context/ShopContext";
import "./App.css";

function App() {
  return (
    <ShopProvider>
      <ProductExplorer />
    </ShopProvider>
  );
}

export default App;
