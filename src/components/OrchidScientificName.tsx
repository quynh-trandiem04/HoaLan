import React from 'react';
import { splitOrchidName } from '../utils/orchidNames';

interface OrchidScientificNameProps {
  value: string;
  className?: string;
}

export default function OrchidScientificName({ value, className = '' }: OrchidScientificNameProps) {
  const { scientific, authority } = splitOrchidName(value);
  const isBold = /<(b|strong)\b/i.test(value);
  return (
    <span className={`normal-case ${className}`}>
      <em className={isBold ? 'font-bold' : undefined}>{scientific}</em>
      {authority && <span className={`not-italic ${isBold ? 'font-bold' : ''}`}> {authority}</span>}
    </span>
  );
}
