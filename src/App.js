import { makeStyles } from "@material-ui/core";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Coins from "./Pages/Coins";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coins />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
