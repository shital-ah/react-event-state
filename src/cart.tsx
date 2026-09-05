export default
    function Cart() {

        let counter = 0
              
        const handleAddToCart = () => {
            counter= counter + 1;
        }


        return (
            <div>
                <h2>Shopping Cart</h2>
                <p>Your cart is empty.
                   <br></br> item in the cart:{counter}
                </p>

                <button onClick={handleAddToCart}>Add to Cart</button>
                    

            </div>
        )
    }