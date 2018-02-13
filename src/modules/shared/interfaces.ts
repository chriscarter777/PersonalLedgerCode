export interface Account {
    id: number;
    balance: number;
    acctType: string;
    defaultAcct?: number;
    defaultAmt?: number;
    defaultCat?: number;
    institution: string;
    interest: number;
    limit?: number;
    name: string;
    number: string;
    owned: boolean;
}

export interface Category {
    id: number;
    name: string;
    tax: boolean;
    type: string;
}

export interface Transaction {
    id: number;
    amount: number;
    category: number;
    crAcct: number;
    date: string;
    drAcct: number;
    tax: boolean;
}

export interface User {
    admin: boolean;
    id: string;
    userName: string
}
