let Shoppinglist = ['Pop Tarts', 'Ramen Noodles', 'Chips', 'Salsa', 'Coffee'];
Shoppinglist.push('Fruit Loops');
function updateObjectInArray(array, id, Shoppinglist) {
    return array.map((obj) => {
      if (obj.id === id) {
        return { ...obj, ...Shoppinglist };
      }
      return obj;
    });
  }
  
  const originalArray = [
    { id: 1, name: "Pop Tarts" },
    { id: 2, name: "Ramen Noodles" },
    { id: 3, name: "Chips" },
    { id: 4, name: "Salsa" },
    { id: 5, name: "Coffee" },
    { id: 6, name: "Fruit Loops" }
  ];
  
  const updatedArray = updateObjectInArray(originalArray, 5, { name: "Fair Trade Coffee" });
  
  console.log(updatedArray);
  Shoppinglist.splice(2, 3, 'Rice', 'Beans');
  let Shoppingcart = []

  console.log(Shoppinglist) 
  let lastItem = Shoppinglist.pop()
Shoppingcart.push(lastItem)

let firstItem = Shoppinglist.shift()
Shoppingcart.push(firstItem)
while (Shoppinglist.length > 0){
    let item = Shoppinglist.shift()
    Shoppingcart.push(item)
}

Shoppingcart.sort()

Shoppingcart.reverse()
console.log(Shoppingcart)
