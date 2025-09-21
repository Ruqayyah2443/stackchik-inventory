
function removeProduct(name){
    let index = inventory.findIndex(product => product.name === name )
    if(index !== -1){
        if(inventory[index].quantity === 1){
            const removeItem = inventory.splice(index, 1)
            console.log(`This product ${removeItem[0].name} has been removed`);
        }
        else{
            inventory[index].quantity -= 1;
            console.log(`We have removed one of ${name} from inventory, quantity remaining is
                ${inventory[index].quantity}`);
        }
        
    }
    else{
        console.log(`This product ${name} does not exist`);
    }
}