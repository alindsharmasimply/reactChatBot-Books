import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Suggestion from "./suggestions/Suggestion";
import Header from "./Header";
import Chatbot from "./chatbot/Chatbot";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/suggestion" component={Suggestion} />
          <Chatbot />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
