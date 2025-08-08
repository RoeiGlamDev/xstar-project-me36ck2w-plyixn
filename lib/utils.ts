import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Interface representing a customer in the luxury LRP cosmetics database.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    purchaseHistory: Product[];
}

/
 * Formats a price to a string with currency symbol.
 * @param price - The price to format.
 * @returns A formatted price string.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Formats a date to a readable string.
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
}

/
 * Generates a unique identifier for a product.
 * @returns A unique identifier string.
 */
export function generateProductId(): string {
    return luxury-LRP-${Math.random().toString(36).substr(2, 9)};
}

/
 * Generates a unique identifier for a customer.
 * @returns A unique identifier string.
 */
export function generateCustomerId(): string {
    return customer-LRP-${Math.random().toString(36).substr(2, 9)};
}

/
 * Capitalizes the first letter of each word in a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

/
 * Formats a product description to include luxury branding.
 * @param product - The product to format.
 * @returns A formatted product description.
 */
export function formatProductDescription(product: Product): string {
    return Indulge in the elegance of ${product.name} from luxury LRP cosmetics. ${product.description};
}

/
 * Utility function to create a luxury LRP cosmetics product.
 * @param name - The name of the product.
 * @param description - The description of the product.
 * @param price - The price of the product.
 * @param category - The category of the product.
 * @param imageUrl - The image URL of the product.
 * @returns A new product object.
 */
export function createProduct(name: string, description: string, price: number, category: string, imageUrl: string): Product {
    return {
        id: generateProductId(),
        name: capitalizeWords(name),
        description: formatProductDescription({ id: '', name: name, description: description, price: price, category: category, imageUrl: imageUrl }),
        price: price,
        category: category,
        imageUrl: imageUrl,
    };
}