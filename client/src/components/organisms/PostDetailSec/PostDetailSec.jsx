import "./postDetailSec.css";
import postImg from "../../../assets/images/bg-hero.jpg";
import editIcon from "../../../assets/images/pen-to-square.svg";
import deleteIcon from "../../../assets/images/trash-can.svg";

export default function PostDetailSec() {
  return (
    <section className="postDetailSec">
      <img src={postImg} alt="Illustration for Post" className="postImg" />
      <div className="postHeader">
        <h1 className="postTitle">Lorem Ipsum dolor sit amet</h1>
        <div className="postSettings">
          <img src={editIcon} alt="" className="postSetIcon" />
          <img src={deleteIcon} alt="" className="postSetIcon" />
        </div>
      </div>
      <div className="postCreated">
        <span>
          Author: <b>thujuli</b>
        </span>
        <span>1 day ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue
        nulla, efficitur eget justo ac, iaculis pretium lorem. Donec tempus
        vestibulum erat, commodo laoreet magna laoreet id. Nulla ut nunc
        fringilla, pellentesque dolor at, convallis quam. Maecenas congue tellus
        ante. Vestibulum efficitur consectetur elementum. Curabitur tellus nunc,
        maximus vitae scelerisque at, sodales ac eros. Aliquam nec imperdiet
        ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam erat volutpat. Ut tincidunt rhoncus mi, nec faucibus libero
        blandit vitae. Aenean ac libero euismod, tristique nunc a, commodo
        felis. Aliquam commodo ante sed magna vehicula, nec ullamcorper est
        suscipit. Nulla facilisi. Suspendisse pharetra odio vel dolor aliquet,
        ac efficitur tellus gravida. Mauris consectetur erat mi, in lobortis ex
        mattis quis. Mauris semper metus eget augue rutrum, quis suscipit lorem
        dignissim. Praesent a est quis dolor auctor varius. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aliquam vel tincidunt nisi. In vel velit nec quam finibus dictum. Donec
        at leo sollicitudin, iaculis dui laoreet, suscipit libero. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Maecenas volutpat dolor et ipsum gravida, vitae dapibus ipsum
        volutpat. Donec scelerisque imperdiet sollicitudin. Aenean sed facilisis
        ligula. Nunc sagittis eu urna vitae ullamcorper. Curabitur ultrices non
        tortor sed commodo. Donec ac risus libero. Ut condimentum feugiat
        sagittis. Maecenas in magna vel lectus accumsan dignissim eu non ex.
        Quisque eu elit dictum, posuere justo sit amet, dapibus dolor.
      </p>
    </section>
  );
}
