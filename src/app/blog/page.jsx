import TextReveal from "@/components/motion/reveal/TextReveal";

const BlogPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className="text-6xl uppercase">
        <TextReveal>Our Blog</TextReveal>
      </h1>
    </div>
  );
};

export default BlogPage;
