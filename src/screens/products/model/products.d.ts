import { LOADING,SUCCESS,FAILED,IDLE } from "../../../utils/AppConstant";

type Status = LOADING | SUCCESS | FAILED | IDLE;

type Product = {
    id: Number,
    title: String,
    description: String,
    price: any
}

  export type ProductRootState = {
    products: {
        status: Status, 
        message:String,
        products: Product[]
    },
    addProduct: {
        status: Status, 
        message:String,
        product: Product | null
    }
}