'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import {
  Button,
  Dropdown,
  DropdownItem,
  Input,
  SearchContainer,
} from '@/styled-components/SearchBarStyles';
import { Product } from '@/types/Products';

export const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fetchSearchResults = async (query: string): Promise<void> => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data.results || []);
  };

  const debouncedSearch = debounce((query: string): void => {
    if (query.length > 0) {
      fetchSearchResults(query);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && results.length > 0) {
        router.push(`/Product/${results[selectedIndex].id}`);
      } else if (query.trim().length > 0) {
        router.push(
          `pages/Product/search-product/search?q=${encodeURIComponent(query)}`
        );
      }
    }
  };
  return (
    <SearchContainer ref={containerRef}>
      <>
        <Input
          type="text"
          placeholder=" Search Products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => query && fetchSearchResults(query)}>
          <FaSearch />
        </Button>
      </>

      {results.length > 0 && (
        <Dropdown isOpen={isOpen}>
          {results.map((product, index) => (
            <DropdownItem
              key={product.id}
              className={index === selectedIndex ? 'selected' : ''}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                setQuery(product.title);
                setIsOpen(false);
                router.push(`/product/${product.id}`);
              }}
            >
              {product.title}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SearchContainer>
  );
};
