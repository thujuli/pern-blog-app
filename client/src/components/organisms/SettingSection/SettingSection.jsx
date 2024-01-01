import "./settingSection.css";
import profileImg from "../../../assets/images/person.jpg";
import Button from "../../atoms/Button/Button";
export default function SettingSection() {
  return (
    <section className="settingSection">
      <div className="settHeader">
        <h1 className="settTitle">Update Your Account</h1>
        <p className="settDelAct">Delete Account</p>
      </div>
      <div className="settBody">
        <form>
          <div className="wrapSettImg">
            <label htmlFor="settImgFile">
              <img src={profileImg} alt="" className="settImg" />
            </label>
            <input type="file" id="settImgFile" style={{ display: "none" }} />
          </div>
          <div className="wrapSettBody">
            <label htmlFor="name" className="labelSett">
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jhon Doe"
              className="inputSett"
            />
            <label htmlFor="email" className="labelSett">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jhondoe@mail.com"
              className="inputSett"
            />
            <label htmlFor="password" className="labelSett">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="inputSett"
            />
          </div>
          <Button type="submit" text="SUBMIT" />
        </form>
      </div>
    </section>
  );
}
