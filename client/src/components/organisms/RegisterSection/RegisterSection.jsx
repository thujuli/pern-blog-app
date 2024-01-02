import Button from "../../atoms/Button/Button";
import Container from "../../atoms/Container/Container";
import Input from "../../atoms/Input/Input";
import "./registerSection.css";
import { Link } from "react-router-dom";

export default function RegisterSection() {
  return (
    <Container className="pt-70 registerSection">
      <div className="registerWrapper">
        <h1 className="registerTitle">Register</h1>
        <form className="registerForm">
          <div>
            <label htmlFor="email" className="registerLabel">
              Email
            </label>
            <Input type="text" name="email" placeholder="jhondoe@mail.com" />
          </div>
          <div>
            <label htmlFor="password" className="registerLabel">
              Password
            </label>
            <Input type="password" name="password" placeholder="********" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="registerLabel">
              Confirm Password
            </label>
            <Input
              type="confirmPassword"
              name="confirmPassword"
              placeholder="********"
            />
          </div>
          <Button type="submit" text="SUBMIT" />
        </form>
        <p className="textRedirect">
          Already have an account?{" "}
          <Link className="link linkTo" to="/login">
            LOGIN
          </Link>
        </p>
      </div>
    </Container>
  );
}
