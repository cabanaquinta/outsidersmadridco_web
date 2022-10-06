import { PrintfulClient } from "printful-request";

export const printful = new PrintfulClient(
    process.env.NEXT_PUBLIC_PRINTFUL_API_KEY
);
