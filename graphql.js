import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_API,
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
