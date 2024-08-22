// interface to set custom middleWare erro status number
export interface middleWareError extends Error{
    status?: number;
}