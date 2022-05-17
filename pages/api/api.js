// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function getServerData() {
   const data = await fetch("https://links.papareact.com/isz").then(res => res.json())
   return data
}
