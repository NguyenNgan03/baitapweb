
const categories = [{
    id: 2,
    name: 'new',
    categoryType: 1,
  },{
    id: 1,
    name: 'best sale',
  },]

 const products = [{
    name: 'ten',
    price: '10.000',
    categoryType: 1,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 1,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 1,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 2,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 2,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 1,
  },{
    name: 'ten',
    price: '10.000',
    categoryType: 1,
  },]



 const getProductByCategory = (categoryType = 1) => {
    const filteredProds =products.filter((prod)=>prod.categoryType === categoryType)
    let elementCategory = document.getElementById(`category_${categoryType}`);
for(let i=0; i<filteredProds.length; i++){
  const elementProd = 
      `<div>
      <div>${filteredProds[i].name} ${i}</div>
      <div>${filteredProds[i].price}</div>
      </div>`
elementCategory.innerHTML+= (elementProd);
}
 }

 const render = () => {
    let contaner = document.getElementById('container');
    for(let i=0; i<categories.length; i++){
      const elementProd =
          `
          <div class="categoryTitle">
            ${categories[i].name}
          </div>
          <div class="category" id='category_${categories[i].id}'>
          ${categories[i].name} ${i}</div>`
    contaner.innerHTML+= (elementProd);
    getProductByCategory(categories[i].id)
    }
 }

 render()
