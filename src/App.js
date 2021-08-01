import "./App.css";
import Header from "./components/Header"
import Main from "./pages/Main"
import ShopProducts from "./pages/ShopProducts"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ShopProducts">
          <ShopProducts />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
