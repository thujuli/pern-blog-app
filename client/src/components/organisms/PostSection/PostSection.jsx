import PostCard from "../../molecules/PostCard/PostCard";
import "./postSection.css";
import postImg from "../../../assets/images/ex-img-post.jpg";

const posts = [
  {
    img: postImg,
    alt: "Illustration for post",
    categories: ["music", "life"],
    timestamp: "1 day ago",
    title: "Lorem Ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati odit animi odio veritatis ea. Accusantium doloribus quos iure asperiores doloremque, accusamus soluta delectus officiis quasi, numquam quam aut. Vero ipsum dolorem harum. Soluta adipisci aspernatur minima praesentium officiis libero non, a ducimus dolores at sit ratione quo! Quaerat, cupiditate rerum.",
  },
  {
    img: postImg,
    alt: "Illustration for post",
    categories: ["music", "life"],
    timestamp: "1 day ago",
    title: "Lorem Ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati odit animi odio veritatis ea. Accusantium doloribus quos iure asperiores doloremque, accusamus soluta.",
  },
  {
    img: postImg,
    alt: "Illustration for post",
    categories: ["music", "life"],
    timestamp: "1 day ago",
    title: "Lorem Ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem maxime odit nihil ipsum totam, laboriosam quam obcaecati est quas rem ut, et accusantium magni aliquid odio qui aspernatur voluptatum minima sunt officiis tempora? Temporibus qui laborum nam dolor, hic, voluptatem pariatur id fugiat repellendus velit optio odit distinctio sit sapiente cumque magnam veniam? Dicta iusto rerum officia inventore? Eius, dolorem laborum? Error debitis recusandae totam laudantium, minima rem excepturi aliquam.",
  },
];

export default function PostSection() {
  return (
    <main className="posts">
      {posts.map((item, index) => (
        <PostCard
          key={index}
          cardImg={item.img}
          cardAlt={item.alt}
          cardTitle={item.title}
          timestamp={item.timestamp}
          categories={item.categories}
        >
          {item.desc}
        </PostCard>
      ))}
    </main>
  );
}
