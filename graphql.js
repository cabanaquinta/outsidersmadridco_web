import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
    // uri: "http://localhost:1337/graphql",
    uri: process.env.NEXT_PUBLIC_BACKEND_API,
    // headers: {
    //     Authorization: `Bearer 4c48dae1021a63058b304fb4ee4bcdd3e7382b5d2f3c532e321f9d06a9e8d8af20d46155d9bec64d987eb904181517f8d297b7924ae939da037bdedf075e563fcb5b7fc7d2870b50d4a7d7ac65009fa5138262163ec76dc112692e9606f4f793fe2669a8cede752e780f86bde950bfda720c67d79f0e292c351a82488f2b45f1`,
    // },
    cache: new InMemoryCache(),
});

export const queryCategories = gql`
    query {
        categories {
            data {
                id
                attributes {
                    name
                    slug
                }
            }
        }
    }
`;

export const queryProductsByCategory = gql`
    query getProductsByCategory($slug: String!) {
        categories(filters: { slug: { eq: $slug } }) {
            data {
                id
                attributes {
                    slug
                    name
                    products {
                        data {
                            attributes {
                                title
                                description
                                slug
                                price
                                image {
                                    data {
                                        attributes {
                                            formats
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const queryProducts = gql`
    query {
        products {
            data {
                attributes {
                    title
                    description
                    slug
                    price
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const querySingleProduct = gql`
    query getProducts($slug: String!) {
        products(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    title
                    slug
                    description
                    price
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const queryFeaturedProducts = gql`
    query {
        categories(filters: { slug: { eq: "features" } }) {
            data {
                id
                attributes {
                    slug
                    name
                    products {
                        data {
                            attributes {
                                title
                                description
                                slug
                                price
                                image {
                                    data {
                                        attributes {
                                            formats
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const queryHero = gql`
    query {
        pages {
            data {
                attributes {
                    heroText
                    heroLink
                    heroSubtitulo
                    section
                    slug
                    heroMedia {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const queryContact = gql`
    query {
        locations {
            data {
                attributes {
                    address
                    email
                }
            }
        }
    }
`;
