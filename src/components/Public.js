import { Link } from "react-router-dom";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>Welcome to La Vida!</h1>
      </header>
      <main>
        <p>
          Located in the Beautiful Lagos City, La vida is where all the city
          life happens
        </p>
        <address>
          La Vida <br />
          555 Antony Drive <br />
          Victoria Island, LG 12345 <br />
          <a href="tel:+2345555555555">(555) 555-5555</a>
        </address>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
};

export default Public;
