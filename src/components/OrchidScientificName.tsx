import React from 'react';
import { splitOrchidName } from '../utils/orchidNames';

interface OrchidScientificNameProps {
  value: string;
  className?: string;
}

export default function OrchidScientificName({ value, className = '' }: OrchidScientificNameProps) {
  const { scientific, authority } = splitOrchidName(value);
  return (
    <span className={className}>
      <em>{scientific}</em>
      {authority && <span className="not-italic"> {authority}</span>}
    </span>
  );
}
