import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import "./basicStyles.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const MainComponent: React.FC = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </RecoilRoot>
      </ApolloProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MainComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
