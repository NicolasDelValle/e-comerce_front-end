import axiosInstance from "./axios";

async function getProducts() {
  const products = await axiosInstance({
    method: "get",
    url: "/products",
  });
  return products;
}

async function getProduct(slug) {
  const product = await axiosInstance({
    method: "get",
    url: "/products/" + slug,
  });

  return product;
}

export { getProducts, getProduct };

// json.data.forEach(function(item){
//   var sum=item.jobTasks.reduce(function(sum,elem){
//      return sum+elem.cost.amountString;
//   },0);
//    console.log('jobNumber'+item.jobNumber+' '+sum);const output = apiJson.data.map(d=>({
//   jobNumber : d.jobNumber,
//   tasksCost : d.jobTasks.reduce((a,b)=>a.cost.amountString+b.cost.amountString)
// }));
