import { Product, Category, User } from './models';

/
 * Represents a cosmetic product in the luxury LRP cosmetics line.
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Detailed description of the product.
 * @property {number} price - Price of the product in USD.
 * @property {string} imageUrl - URL of the product image.
 * @property {Category} category - Category to which the product belongs.
 * @property {boolean} isFeatured - Indicates if the product is featured.
 */
export interface LuxuryLRPProduct extends Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: Category;
    isFeatured: boolean;
}

/
 * Represents a category of products in the luxury LRP cosmetics line.
 * @interface Category
 * @property {string} id - Unique identifier for the category.
 * @property {string} name - Name of the category.
 * @property {string} description - Description of the category.
 */
export interface LuxuryLRPCategory extends Category {
    id: string;
    name: string;
    description: string;
}

/
 * Represents a user in the luxury LRP cosmetics application.
 * @interface User
 * @property {string} id - Unique identifier for the user.
 * @property {string} username - Username of the user.
 * @property {string} email - Email address of the user.
 * @property {string} password - Password for user authentication.
 * @property {boolean} isAdmin - Indicates if the user has admin privileges.
 */
export interface LuxuryLRPUser extends User {
    id: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

/
 * Represents the shopping cart for luxury LRP cosmetics.
 * @interface ShoppingCart
 * @property {LuxuryLRPProduct[]} items - Array of products in the cart.
 * @property {number} totalPrice - Total price of all items in the cart.
 */
export interface LuxuryLRPShoppingCart {
    items: LuxuryLRPProduct[];
    totalPrice: number;
}

/
 * Represents an order placed by a user in the luxury LRP cosmetics application.
 * @interface Order
 * @property {string} id - Unique identifier for the order.
 * @property {LuxuryLRPUser} user - User who placed the order.
 * @property {LuxuryLRPProduct[]} products - Products included in the order.
 * @property {number} totalAmount - Total amount for the order.
 * @property {Date} orderDate - Date when the order was placed.
 */
export interface LuxuryLRPOrder {
    id: string;
    user: LuxuryLRPUser;
    products: LuxuryLRPProduct[];
    totalAmount: number;
    orderDate: Date;
}