import React from 'react';
import { useDeleteCoutryMutation } from '../../redux/api/country.api';

interface Country {
  id: string;
  name: string;
  capital: string;
  image: string;
}

interface CountryWrapperProps {
  data?: Country[];
}

const CountryWrapper: React.FC<CountryWrapperProps> = ({ data }) => {
  const [deleteCountry] = useDeleteCoutryMutation();

  if (!data) {
    return <div>Empty</div>;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {data.map(({ id, name, capital, image }) => (
        <div
          key={id}
          className="border p-4 rounded flex flex-col justify-between items-center shadow-md min-h-[300px]"
        >
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-full mb-4"
          />
          <div className="text-center flex-1">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-600">Capital: {capital}</p>
          </div>
          <button
            onClick={() => deleteCountry(id)}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CountryWrapper);