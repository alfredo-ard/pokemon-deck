export default async function getData( url: string ) {
  const data = await fetch(url);
  const posts = await data.json();
  return posts;
}
