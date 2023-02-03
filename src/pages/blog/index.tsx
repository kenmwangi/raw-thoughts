import { allBlogs, Blog } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export async function getStaticProps() {
  const blogs: Blog[] = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { blogs } };
}

// Blog Template
function BlogCard(blog: Blog) {
  return (
    <section className="mb-8">
      <h2 className="text-xl">
        <Link
          href={blog.slug}
          className="text-indigo-500 hover:text-indigo-700 transition-colors"
        >
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className="block text-xs text-gray-800 mb-2">
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>

      <article
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </section>
  );
}

const BlogPage = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </section>
  );
};

export default BlogPage;
