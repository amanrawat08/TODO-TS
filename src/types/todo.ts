 
export interface Todo{
    id:string;
    title:string;
    completed:boolean
}

export type Filter = "ALL" | "PENDING" | "COMPLETED"