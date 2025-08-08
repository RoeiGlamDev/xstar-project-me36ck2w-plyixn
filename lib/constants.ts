export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    SITE_TITLE: "luxury LRP cosmetics - Elevate Your Beauty",
    TAGLINE: "Indulge in the Essence of Luxury",
    DESCRIPTION: "Discover the finest in luxury cosmetics with luxury LRP cosmetics. Our products are crafted to enhance your natural beauty with elegance and sophistication.",
    CONTACT_EMAIL: "contact@luxurylrpcosmetics.com",
    PHONE_NUMBER: "+1 (800) 123-4567",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    isFeatured: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export const PRODUCT_CATEGORIES = {
    MAKEUP: "Makeup",
    SKINCARE: "Skincare",
    FRAGRANCE: "Fragrance",
    ACCESSORIES: "Accessories",
};

/
 * Function to create a new product for luxury LRP cosmetics.
 * @param {Product} product - The product details to be added.
 * @returns {void}
 */
export function addProduct(product: Product): void {
    // Logic to add product to the inventory
}

/
 * Function to register a new user for luxury LRP cosmetics.
 * @param {User} user - The user details for registration.
 * @returns {void}
 */
export function registerUser(user: User): void {
    // Logic to register user
}