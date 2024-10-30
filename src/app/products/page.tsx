export default async function Products() {
  await new Promise((resolve)=>{
    setTimeout(resolve,5000);
 });
  return (
    <main className="container bg-green-200 mx-auto p-4">
      <h1 className="text-5xl text-green-900 bg-green-300 px-3 py-3 border-green-500 border-4 rounded-xl font-bold">Products Page</h1><br></br>
      <h2 className="text-3xl  text-green-900 bg-green-300 px-3 py-3 border-green-500 border-4 rounded-xl">Check out our products.</h2><br></br>
      <button className="text-1xl text-green-900 rounded-xl hover:border-red-900 hover:bg-red-400 hover:text-red-700 pl-5 pr-5 bg-green-300 t border-green-500 border-4 " >Here</button>
    </main>
  );
}
