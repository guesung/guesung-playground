import { fetchData } from "./data.js";

export default function Albums({ artistId }) {
  const albums = use(fetchData(`/${artistId}/albums`));
  console.log(albums);
  return (
    <ul>
      {/* {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))} */}
    </ul>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    console.log(promise.reason);
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
        console.log(reason);
      }
    );
    throw promise;
  }
}
