export default async function getData( url: string ) {
  try {
    const data = await fetch(url);
  const posts = await data.json();
  return posts;
  } catch (error) {
    return null
  }
}
