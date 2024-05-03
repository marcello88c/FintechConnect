"use client";

import Layout from "@/components/Layout";
import Achieve from "@/components/Achieve";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <AboutUs />
            <Services />
            <Achieve />
        </Layout>
    );
};

export default HomePage;
