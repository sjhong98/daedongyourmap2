import Logo from "./logo";
import SignInCheck from "./signInCheck";
import SearchComponent from "./search/searchComponent";

export default function Header() {
    return (
        <header className="flex items-center fixed h-[15vh] px-12 z-[120] cursor-pointer" >
            <Logo />
            <div className="flex-1" />
            <SearchComponent />
            <SignInCheck />
        </header>
    )
}