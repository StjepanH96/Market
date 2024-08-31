import { Product } from '@/types/products';
import { useRef, useState} from 'react';

export const useDataState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  return {
    isOpen,
    setIsOpen,
    isMobile,
    setIsMobile,
    isCartOpen,
    setIsCartOpen,
    query,
    setQuery,
    results,
    setResults,
    selectedIndex,
    setSelectedIndex,
    containerRef,
    isModalOpen,
    setIsModalOpen,
    selectedProduct,
    setSelectedProduct,
    currentPage,
    setCurrentPage,
    loaderRef
  };
};
