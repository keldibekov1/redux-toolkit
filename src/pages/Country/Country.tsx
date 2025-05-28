import React from "react";
import CountryForm from "./CountryForm";
import CountryWrapper from "./CountryWrapper";
import { useGetCoutriesQuery } from "../../redux/api/country.api";

const Country = () => {
  const {data} = useGetCoutriesQuery({});
  console.log(data);
  
  return (
    <div>
      <CountryForm />
      <div className="container mx-auto">
        <div>

        </div>
      </div>
      <CountryWrapper data={data} />
    </div>
  );
};

export default React.memo(Country);