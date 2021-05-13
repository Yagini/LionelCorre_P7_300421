import { createMedia } from "./media.js";

async function getData() {
  const dataFile = await fetch("./data.json");
  const data = await dataFile.json();
  return data;
}

getData().then(data => {
  createMedia(data)
});