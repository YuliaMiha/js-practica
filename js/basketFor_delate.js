const cart = {
    items: [],
    getItems() {
        return this.items; /* отримуємо силку на items  */
    }, 
    add(product) { 
        //console.table(this.items);

        for (const item of this.items) { /* */
            if (item.name === product.name) {
                console.log("Такий продукт вже є ", product.name);
                item.quantity += 1;
                return;
            }
        }
        
        const newProduct = {/*кожний продукт у нас буде як новий обєкт */
            ...product,/*розпелили всі продукти у ньому  */
            quantity: 1,/*кастомне свойство */
        };
        this.items.push(newProduct); /*добавляємо cart.add в items */
    },
    remove(productName) {
        const { items } = this; /*деструктирізація - лежить силка на оргигінальний масив  */
        
        
        for (let i = 0; i < items.length; i += 1){/*for (let i = 0; <this.items.length; i += 1)*/
            const { name } = items[i];

            const item = items[i]; /*const item = this.items[i]; */
            console.log(item); /* виводимо окремо кожний продукт */
                
            if (productName === item.name) { /*productName === item.name */
                console.log('Найшли такий продукт', productName);
                console.log('індекс:', i);

                /* this.items.splice(i, 1);*/
                items.splice(i, 1); /*на такому індексі видали 1 елемент */
            }
        }
    },
    clear() {
        this.items = []; /*не потрібно видаялти нічого просто присвоюєм пустий масив  */
    },
    countTotalPrice() {
        const { items } = this;
        console.log(this.items); //

        let total = 0;
        for (const { price, quantity } of items) {/*for (const item of this.items) */ 
            
            total += price * quantity; /*total += item.price; */
        }
        return total;
     },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems()); /* вивести масив items  */

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'grape', price: 70 });
cart.add({ name: 'strawberry', price: 110 });

console.log(cart.getItems()); /*вивести добавленні продукти */

console.log('Total:', cart.countTotalPrice());/*виводити загальну кількість продуктів в корзині */

cart.remove('grape'); /*видалити  з масива: перебрати усіх item і з таким вказаним name   */
console.table(cart.getItems());

cart.clear(); /*очистити всю корзину: присвоїти пустий масив */
console.log(cart.getItems());

cart.increaseQuantity();
console.table(cart.getItems());

//cart.decreaseQuantity('apple');
//cart.decreaseQuantity('apple');
//console.log(cart.getItems());