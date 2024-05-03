"use client";

import Layout from "@/components/Layout";
import Achieve from "@/components/Achieve";
import Hero from "./Hero";
import Advantage from "./Advantage";
import Details from "./Details";
import Services from "./Services";

const ServicesPage = () => {
    return (
        <Layout>
            <Hero />
            <Advantage />
            <Details />
            <Services />
            <Achieve />
        </Layout>
    );
};

export default ServicesPage;
