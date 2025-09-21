function updateStock(name, quantity){
let product = inventory.find(product => product.name === name);
if(product){
    product.quantity += quantity;
    product.lowStock = quantity < 10;
    let isLowStock= product.lowStock ? "Low-stock" : "Enough-Stock";
    console.log(`Product inventory updated. the new quantity is ${product.quantity}Stock status is ${isLowStock}`);
}
else{
    console.log("Product is not in inventory");
}
}