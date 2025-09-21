const inventory = []

function addProduct(id, name, price, quantity){
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
}