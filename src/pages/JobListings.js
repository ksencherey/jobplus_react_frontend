import React from "react";
import Hero from "../components/Hero";
import ListingFilter from "../components/ListingFilter";
import Listing from '../components/Listing';

export default function JobListings(props) {
 const listings = [<Listing />];

  return (
    <>
      <Hero labelColor="primary" heroType="plain" />
      <ListingFilter components={listings} />
    </>
  );
}
