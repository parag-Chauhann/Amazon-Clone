export const initialState = {
    cart : [],
}

const reducer=(state, action) =>{
    console.log("action" , action)

    switch(action.type){
        
        case "Add-to-Cart":
            return{
                ...state,
                cart:[...state.cart, action.item],
            };
            case "Remove-from-Cart":

            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItem)=> cartItem.id ===action.id);
              if(index >=0) {
                newCart.splice(index, 1);
                
              }else {
                console.warn(
                    "cant remove product"
                )
              }
                return{
                    ...state,
                    cart:newCart,
                };
        default:
            return state;
    }
}

export default reducer;