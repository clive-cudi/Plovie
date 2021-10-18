import React from "react";
import "./App.css";
import Routing from "./components/Routing";
import { PlayerContextProvider } from "./components/contexts/bannerPlayerContext";
import { UserNameCtxProvider } from "./components/contexts/UserNameCtx";
import { WatchlistCtxProvider } from "./components/contexts/WatchListCtx";
import { DisplayWatchListCtxProvider } from "./components/contexts/WatchListCtx";
import { GenresCtxProvider } from "./components/contexts/Genres";
import { PosterModalCtxProvider } from "./components/contexts/PosterModalCtx";

function App() {
  return (
    <UserNameCtxProvider>
      <GenresCtxProvider>
        <WatchlistCtxProvider>
          <DisplayWatchListCtxProvider>
            <PlayerContextProvider>
              <PosterModalCtxProvider>
                <div className="App">
                  <div className="content">
                    <Routing />
                  </div>
                </div>
              </PosterModalCtxProvider>
            </PlayerContextProvider>
          </DisplayWatchListCtxProvider>
        </WatchlistCtxProvider>
      </GenresCtxProvider>
    </UserNameCtxProvider>
  );
}

export default App;
