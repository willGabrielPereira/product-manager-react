import Category from 'src/js/interfaces/Category';

export default interface Product {
    created_at: Date
    updated_at: Date
    created_by?: Number
    updated_by?: Number

    categories?: Category[]
    // more_info?: object
    dimensions?: object
    amount: Number
    price: Number
    
    content: string
    title: string

    id: string
}
