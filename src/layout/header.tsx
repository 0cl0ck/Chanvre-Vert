import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          Accueil
        </Link>
        <Link href="/about" passHref>
          À Propos
        </Link>
        <Link href="/contact" passHref>
          Contact
        </Link>
        {/* Autres liens */}
      </nav>
    </header>
  );
};

export default Header;
