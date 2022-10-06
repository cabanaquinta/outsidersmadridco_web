import {
    HeaderWrapper,
    NavList,
    NavLogoIMG,
    NavLogoWrapper,
    ShopWrapper,
    Footer,
    FooterMainWrapper,
    PagesWrapper,
    FooterNav,
    FooterSecondaryWrapper,
} from "../styles/LayOutStyle";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { useSnipcart } from "../src/useSnipcart";

export default function Layout({ children }) {
    // Pick the Cart from the Snipcart Hook
    const { cart = {} } = useSnipcart();
    return (
        <>
            <HeaderWrapper>
                <Link href={"/"}>
                    <NavLogoWrapper>
                        <NavLogoIMG
                            width={"60"}
                            height={"60"}
                            src={
                                "/medium_OUTSIDERMOTORCO_REDONDO_5a10b04f52.png"
                            }
                            alt={"nav-logo"}
                        ></NavLogoIMG>
                        <h1 style={{ letterSpacing: "0.1rem" }}>OC19</h1>
                    </NavLogoWrapper>
                </Link>
                <nav>
                    <NavList>
                        <li>
                            <Link href={"/"}>HOME</Link>
                        </li>
                        <li>
                            <Link href="/tienda">TIENDA</Link>
                        </li>
                        <li>
                            <a href="#">TOURING</a>
                        </li>
                        <li>
                            <Link href="/contact">NOSOTROS</Link>
                        </li>
                    </NavList>
                </nav>
                <ShopWrapper>
                    <button
                        className="snipcart-customer-signin"
                        style={{ border: "none", backgroundColor: "white" }}
                        aria-label="User login"
                    >
                        <BiUser
                            style={{ cursor: "pointer" }}
                            size="1.3em"
                        ></BiUser>
                    </button>
                    <div>
                        <a
                            href="#"
                            className="snipcart-checkout"
                            aria-label="Cart"
                            style={{ cursor: "pointer" }}
                        >
                            <BsCart size="1.3em" />
                        </a>
                        <p
                            className="snipcart-checkout"
                            aria-label="Trolly Price"
                            style={{
                                cursor: "pointer",
                                fontSize: "var(--fs-200)",
                            }}
                        >
                            EUR {cart.subtotal?.toFixed(2)}
                        </p>
                    </div>
                </ShopWrapper>
            </HeaderWrapper>
            <main>
                <PagesWrapper>{children}</PagesWrapper>
            </main>
            <Footer>
                <FooterMainWrapper>
                    <NavLogoWrapper>
                        <h1 style={{ letterSpacing: "0.1rem" }}>OutSiders</h1>
                    </NavLogoWrapper>
                    <FooterNav>
                        <dl>
                            <dt>Informacion</dt>
                            <dd>
                                <Link href={"/contact"}>Map</Link>
                            </dd>
                            <dd>
                                <Link href={"/"}>Devoluciones</Link>
                            </dd>
                            <dd>
                                <Link href={"/"}>Gastos de Envio</Link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Cosillas</dt>
                            <dd>
                                <Link href={"/"}>Touring</Link>
                            </dd>
                            <dd>
                                <Link href={"/tienda"}>Tienda</Link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Social</dt>
                            <dd>
                                <a href="#">
                                    <BsFacebook></BsFacebook>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <BsInstagram></BsInstagram>
                                </a>
                            </dd>
                            <dd>
                                <a href="#">
                                    <BsYoutube></BsYoutube>
                                </a>
                            </dd>
                        </dl>
                    </FooterNav>
                </FooterMainWrapper>
                <FooterSecondaryWrapper>
                    <p>&copy;Outsiders, {new Date().getFullYear()}.</p>
                    <span>Made by Alex Perez With</span>
                    <AiOutlineHeart></AiOutlineHeart>
                </FooterSecondaryWrapper>
            </Footer>
        </>
    );
}
