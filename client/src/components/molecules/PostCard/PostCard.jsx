import "./postCard.css";
export default function PostCard({
  cardImg,
  cardAlt,
  categories,
  cardTitle,
  timestamp,
  children,
}) {
  return (
    <div className="postCard">
      <img src={cardImg} alt={cardAlt} className="postCardImg" />
      <div className="postCardBody">
        <div className="postCardCats">
          {categories.map((item, index) => (
            <span key={index} className="postCardCat">
              {item}
            </span>
          ))}
        </div>
        <h2 className="postCardTitle">{cardTitle}</h2>
        <p className="postCardTimestamp">{timestamp}</p>
        <p className="postCardDesc">{children}</p>
      </div>
    </div>
  );
}
