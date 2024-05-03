"use client";

import Layout from "@/components/Layout";
import Achieve from "@/components/Achieve";
import Hero from "./Hero";
import Details from "./Details";
import Investor from "./Investor";
import Achievement from "./Achievement";
import Team from "./Team";

const AboutUsPage = () => {
    return (
        <Layout>
            <Hero />
            <Details />
            <Investor />
            <Achievement />
            <Team />
            <Achieve />
        </Layout>
    );
};

export default AboutUsPage;
