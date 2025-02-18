import { Request } from 'express';

/**
 * A type that represents a user object
 */
interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}