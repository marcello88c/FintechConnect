import BlogDetailPage from "@/templates/Blog/BlogDetailPage";

const BlogDetail = ({ params }: { params: { id: string } }) => {
    return <BlogDetailPage id={params.id} />;
};

export default BlogDetail;
