import React, { useEffect } from 'react';
import { useProductActions } from '@/redux/reducers/products/productStateManagement';
import {
  FiltersContainer,
  Label,
  Select,
  SelectWrapper,
} from '@/styled-components/FilterComponent';
import { useProductData, useProductFilter } from '@/lib';

export const FilterComponent = () => {
  const { initializeProductsByCategoryListState } = useProductActions();
  const { productsCategoryList } = useProductData();

  return (
    <FiltersContainer>
      <SelectWrapper>
        <Label>Category:</Label>
        <Select
          value={selectedGenreId}
          onChange={(e) => setSelectedGenreId(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Year:</Label>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Year</option>
          <option value="">Select Year</option>
          {Array.from({ length: 125 }, (_, i) => 2024 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Score:</Label>
        <Select
          value={selectedScore}
          onChange={(e) => setSelectedScore(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Score</option>
          <option value="">Select Score</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((score) => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </Select>
      </SelectWrapper>
    </FiltersContainer>
  );
};
