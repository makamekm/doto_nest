
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Author {
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export interface Expenses {
    id: string;
    date?: string;
    amount?: number;
    merchant?: string;
    currency?: string;
    categoryName?: string;
    parentId?: string;
    status?: ExpensesStatus;
}

export interface ExpensesStatus {
    stage: string;
}

export interface Post {
    id: number;
    title: string;
    votes?: number;
}

export interface IQuery {
    author(id: number): Author | Promise<Author>;
    expenses(): Expenses[] | Promise<Expenses[]>;
}
