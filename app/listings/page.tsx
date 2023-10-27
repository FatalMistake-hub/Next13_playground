import React from "react";
import getListings from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import ListingTravel from "@/components/organisms/listing-content";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = async () => {
  const currentUser = await getCurrentUser();
  let listings;
  if (currentUser) {
    listings = await getListings({ userId: currentUser.id });
  }
  return (
    <>
      <ListingTravel />
    </>
  );
};

export default Listings;
