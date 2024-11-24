import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${name.toLowerCase()}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {name}
        </h3>
      </div>
    </Link>
  );
}