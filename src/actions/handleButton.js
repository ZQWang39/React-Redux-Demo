export const handleAddButton = (number) => {
    return{
            type:'INCREMENT',
            payload:number,
        }
}


export const handleDeleteButton = (number) => {
    return{
            type:'DECREMENT',
            payload:number,
        }
} 