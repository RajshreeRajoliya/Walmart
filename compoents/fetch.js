/** @format */

async function fetchdata(url) {
  try {
    let ds = await fetch(url);
    let data = await ds.json();
    console.log(data);
    return data;
  } catch {
    console.log('qsq');
  }
}

export { fetchdata };
