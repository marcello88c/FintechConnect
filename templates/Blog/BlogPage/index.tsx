"use client";

import Layout from "@/components/Layout";
import Achieve from "@/components/Achieve";
import Hero from "./Hero";
import Blog from "./Blog";

const BlogPage = () => {
    return (
        <Layout lightHeader>
            <Hero />
            <Blog />
            <Achieve />
        </Layout>
    );
};

export default BlogPage;
