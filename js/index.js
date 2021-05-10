
export async function getData() {
  const dataFile = await fetch("../data.json");
  const data = await dataFile.json();
  return data;
}