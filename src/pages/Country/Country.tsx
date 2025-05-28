import React, { useState } from "react";
import CountryForm from "./CountryForm";
import CountryWrapper from "./CountryWrapper";
import { useGetCoutriesQuery } from "../../redux/api/country.api";
import EditCountry from "./EditCountry";

const Country = () => {
  const { data } = useGetCoutriesQuery({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = (country: any) => {
    setSelectedCountry(country);
    setIsEditOpen(true);
  };

  const handleClose = () => {
    setSelectedCountry(null);
    setIsEditOpen(false);
  };

  return (
    <div>
      <CountryForm />
      <CountryWrapper data={data} onEdit={handleEdit} />
      <EditCountry
        open={isEditOpen}
        onClose={handleClose}
        defaultValues={selectedCountry}
      />
    </div>
  );
};

export default React.memo(Country);
