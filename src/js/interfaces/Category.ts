export default interface Category {
    created_at: Date
    updated_at: Date
    created_by?: Number
    updated_by?: Number

    description: string
    parent_id?: Number
    id: string
}
