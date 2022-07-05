import { createContext, useState  } from "react";
export const CartContext = createContext();

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //Metodo Some - ItemDetail - Si el producto a agregar ya está en el carrito o no (true/false)
    const isInCart = (id) => {
        return cart.some((detail) => detail.id === id);
    }

    //ItemDetail - Se encarga de agregar el producto seleccionado al cart, sin pisar 
    const addToCart = (detail, count, id) => {
        const newItem = {
            ...detail,
            count,
            id,
        };

            if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].count += count;
            setCart (auxArray);
    } else {
            setCart([...cart, newItem]);
        }
    }

    const storageCart = () => {
        let arrayOfValues = Object.values(localStorage);
        if (arrayOfValues.length > 0) {
            let arrayOfProducts = [];
            for (let i = 0; i < arrayOfValues.length; i++) {
                arrayOfProducts.push(JSON.parse(arrayOfValues[i]));
            }
            setCart(arrayOfProducts);
        }    
    }
        //Vaciar el carrito con botón
    const emptyCart = () => {setCart([])     
                
}

//Filter - Cart - Retorna array sin el prod. seleciconado (id)
    const removeFromCart = (id) => {
        const newCart = (cart.filter((element) => element.id !== id));
        setCart(newCart);
}

//Reduce - Productos en total
    const getItemQuantity  = () => {
        return cart.reduce((acc, x) => acc += x.count, 0);
    }

    //Reduce - Cart - Precio total del carrito
    const getCartTotal  = () => {
        return cart.reduce((acc, x) => acc += x.count * x.price , 0);
    }

    return (
    <CartContext.Provider value={{cart, isInCart, addToCart, emptyCart, removeFromCart, getItemQuantity, getCartTotal, storageCart }}> 
    {children}
    </CartContext.Provider>
    )
}

export default MyProvider