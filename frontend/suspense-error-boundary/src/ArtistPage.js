import { Suspense } from "react";
import Albums from "./Albums.js";
import Biography from "./Biography.js";
import Panel from "./Panel.js";
import RetryErrorBoundary from "./components/RetryErrorBoundary.js";

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>

      <Suspense fallback={<BigSpinner />}>
        <Biography artistId={artist.id} />
        <RetryErrorBoundary>
          <Suspense fallback={<AlbumsGlimmer />}>
            <Panel>
              <Albums artistId={artist.id} />
            </Panel>
          </Suspense>
        </RetryErrorBoundary>
      </Suspense>
    </>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

function AlbumsGlimmer() {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line" />
      <div className="glimmer-line" />
      <div className="glimmer-line" />
    </div>
  );
}
