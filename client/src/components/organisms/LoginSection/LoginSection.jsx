import Button from "../../atoms/Button/Button";
import Container from "../../atoms/Container/Container";
import "./loginSection.css";

export default function LoginSection() {
  return (
    <Container className="pt-70 loginSection">
      <div className="loginWrapper">
        <h1 className="loginTitle">LOGIN</h1>
        <form className="loginForm">
          <div className="inputWrapper">
            <label htmlFor="email" className="loginLabel">
              Email
            </label>
            <input
              type="email"
              className="loginInput"
              id="email"
              name="email"
              placeholder="jhondoe@mail.com"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password" className="loginLabel">
              Password
            </label>
            <input
              type="password"
              className="loginInput"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
          <Button type="submit" text="SUBMIT" />
        </form>
      </div>
    </Container>
  );
}
