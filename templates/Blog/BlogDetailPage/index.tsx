"use client";

import Layout from "@/components/Layout";
import Achieve from "@/components/Achieve";
import Hero from "./Hero";
import Articles from "./Articles";

const BlogDetailPagePage = ({ id }: any) => {
    return (
        <Layout>
            <Hero id={id} />
            <Articles />
            <Achieve />
        </Layout>
    );
};

export default BlogDetailPagePage;
