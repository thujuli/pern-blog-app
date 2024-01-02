import Button from "../../atoms/Button/Button";
import Container from "../../atoms/Container/Container";
import Input from "../../atoms/Input/Input";
import "./loginSection.css";
import { Link } from "react-router-dom";

export default function LoginSection() {
  return (
    <Container className="pt-70 loginSection">
      <div className="loginWrapper">
        <h1 className="loginTitle">LOGIN</h1>
        <form className="loginForm">
          <div>
            <label htmlFor="email" className="loginLabel">
              Email
            </label>
            <Input type="text" name="email" placeholder="jhondoe@mail.com" />
          </div>
          <div>
            <label htmlFor="password" className="loginLabel">
              Password
            </label>
            <Input type="password" name="password" placeholder="********" />
          </div>
          <Button type="submit" text="SUBMIT" />
        </form>
        <p className="textRedirect">
          Don't have an account?{" "}
          <Link className="link linkTo" to="/register">
            REGISTER
          </Link>
        </p>
      </div>
    </Container>
  );
}
