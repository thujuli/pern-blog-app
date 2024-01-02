import "./writeSection.css";
import Container from "../../atoms/Container/Container";
import exampleImg from "../../../assets/images/ex-img-post.jpg";
import plusIcon from "../../../assets/images/plus-solid.svg";

export default function WriteSection() {
  return (
    <Container>
      <div className="writeSection pt-70">
        <img src={exampleImg} alt="" className="writeImg" />
        <form className="writeBody">
          <label htmlFor="file">
            <span className="wrapAddFile">
              <img src={plusIcon} alt="" className="iconAddFile" />
            </span>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            style={{ display: "none" }}
          />
          <div className="inputWrapper">
            <input
              type="text"
              className="writeInputTitle"
              placeholder="Title"
              id="title"
              name="title"
            />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="writeInputDesc"
              placeholder="Tell your story..."
            ></textarea>
          </div>
          <button type="submit" className="writeBtnSubmit">
            SUBMIT
          </button>
        </form>
      </div>
    </Container>
  );
}
