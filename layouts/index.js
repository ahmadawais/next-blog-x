import Layout from "../components/layout.js";
import Author from "../components/author.js";
import styles from "../components/markdown.module.css";
import PostMeta from "../components/post_meta";

export default function BlogLayout(frontmatter) {
  return ({ children: content }) => {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl">{frontmatter.title}</h1>
          <PostMeta post={frontmatter} />
          <div className="my-8">
            <img src={frontmatter.image} alt="" />
          </div>
          <div className={styles["markdown"]}>{content}</div>

          <Author className="mt-32" />
        </div>
      </Layout>
    );
  };
}