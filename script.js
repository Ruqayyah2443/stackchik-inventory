const inventory = []

function addProduct(id, name, price, quantity){   
    let available = inventory.some(product => product.name === name );
        if (available){
            let index = inventory.findIndex(product => product.name === name);
            inventory[index].quantity += 1;
            console.log(`Product already exist,${name} has been updated`);
            return;
        }else{
            inventory.push({
                id: id, 
                name: name, 
                price: price, 
                quantity: quantity,
                lowStock: quantity < 10  
            });
            console.log(`This product ${name} is added to the inventory`);
        }

}


function removeProduct(name) {
  let index = inventory.findIndex((product) => product.name === name);
  if (index !== -1) {
    if (inventory[index].quantity === 1) {
      const removeItem = inventory.splice(index, 1);
      console.log(`This product ${removeItem[0].name} has been removed`);
    } else {
      inventory[index].quantity -= 1;
      console.log(`We have removed one of ${name} from inventory, quantity remaining is
                ${inventory[index].quantity}`);
    }
  } else {
    console.log(`This product ${name} does not exist`);
  }
}

function updateStock(name, quantity) {
  let product = inventory.find((product) => product.name === name);
  if (product) {
    product.quantity += quantity;
    product.lowStock = quantity < 10;
    let isLowStock = product.lowStock ? "Low-stock" : "Enough-Stock";
    console.log(
      `Product inventory updated. the new quantity is ${product.quantity}Stock status is ${isLowStock}`
    );
  } else {
    console.log("Product is not in inventory");
  }
}

function generateReport() {
  let totalProducts = inventory.length;
  let totalValue = 0;
  let lowStockItems = [];

  inventory.forEach((product, index) => {
    totalValue += product.price * product.quantity;

    if (product.quantity <= product.lowStock) {
      lowStockItems.push(product.name);
    }

    console.log(`
            --- Product ${index + 1} ---
            ID: ${product.id}
            Name: ${product.name}
            Price: ${product.price}
            Quantity: ${product.quantity}
            Low Stock Threshold: ${product.lowStock}
        `);
  });

  console.log("====== Inventory Summary ======");
  console.log(`Total Products: ${totalProducts}`);
  console.log(`Total Inventory Value: $${totalValue}`);
  console.log(
    `Low Stock Items: ${
      lowStockItems.length > 0 ? lowStockItems.join(", ") : "None"
    }`
  );
}
