import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

// export default function snipCart() {
//     return (
//         <Html lang="es">
//             <Head>
//                 <link rel="preconnect" href="https://app.snipcart.com" />
//                 <link rel="preconnect" href="https://cdn.snipcart.com" />
//                 <link
//                     rel="stylesheet"
//                     href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
//                 />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
//                     rel="stylesheet"
//                 />
//             </Head>
//             <body className="antialiased">
//                 <Main />
//                 <NextScript />
//                 <script
//                     async
//                     src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
//                 ></script>
//                 <div
//                     id="snipcart"
//                     data-config-modal-style="side"
//                     data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
//                     hidden
//                 >
//                     <address-fields section="top">
//                         <div className="snipcart-form__field">
//                             <snipcart-label for="phone">
//                                 Phone number
//                             </snipcart-label>
//                             <snipcart-input name="phone"></snipcart-input>
//                         </div>
//                     </address-fields>
//                 </div>
//             </body>
//         </Html>
//     );
// }

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
// export class MyDocument extends Document {
//     static async getInitialProps(ctx) {
//         const sheet = new ServerStyleSheet();
//         const originalRenderPage = ctx.renderPage;

//         try {
//             ctx.renderPage = () =>
//                 originalRenderPage({
//                     enhanceApp: (App) => (props) =>
//                         sheet.collectStyles(<App {...props} />),
//                 });

//             const initialProps = await Document.getInitialProps(ctx);
//             return {
//                 ...initialProps,
//                 styles: (
//                     <>
//                         {initialProps.styles}
//                         {sheet.getStyleElement()}
//                     </>
//                 ),
//             };
//         } finally {
//             sheet.seal();
//         }
//     }
// }
