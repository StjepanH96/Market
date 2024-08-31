"use client";
import React, { useEffect,  useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import {
  Button,
  SearchBarDropdown,
  SearchDropdownItem,
  Input,
  SearchContainer,
} from "../styled-components";
import { useDataState } from "@/lib";

export const SearchBar = () => {
  const {
    results,
    setResults,
    query,
    setQuery,
    isOpen,
    setIsOpen,
    containerRef,
    selectedIndex,
    setSelectedIndex,
  } = useDataState();
  const router = useRouter();

  const fetchSearchResults = async (query: string): Promise<void> => {
    try {
      const res = await fetch(`/api/search?q=${query}`);
      if (!res.ok) {
        throw new Error("Failed to fetch results");
      }
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query: string): void => {
      if (query.length > 0) {
        fetchSearchResults(query);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 200),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [debouncedSearch, query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && results.length > 0) {
        router.push(`/product/${results[selectedIndex].id}`);
        setIsOpen(false);
      } else if (query.trim().length > 0) {
        router.push(
          `pages/product/search-product/search?q=${encodeURIComponent(query)}`
        );
        setIsOpen(false);
      }
    }
  };

  return (
    <SearchContainer ref={containerRef}>
      <>
        <Input
          type="text"
          placeholder="Search Products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => query && fetchSearchResults(query)}>
          <FaSearch />
        </Button>
      </>

      {results.length > 0 && (
        <SearchBarDropdown isOpen={isOpen}>
          {results.map((product, index) => (
            <SearchDropdownItem
              key={product.id}
              className={index === selectedIndex ? "selected" : ""}
              onMouseDown={() => {
                setQuery(product.title);
                setIsOpen(false);
                setSelectedIndex(-1);
                router.push(`/product/${product.id}`);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {product.title}
            </SearchDropdownItem>
          ))}
        </SearchBarDropdown>
      )}
    </SearchContainer>
  );
};
