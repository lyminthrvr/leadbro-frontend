import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

const usePagingData = (data, itemsPerPage = 15) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Получаем номер текущей страницы из query параметров
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page')) || 1; // Если нет параметра, то первая страница

  // Рассчитываем общее количество страниц
  const totalItems = data.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Получаем данные для текущей страницы
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  // Функция для перехода на другую страницу
  const handlePageChange = (page) => {
    debugger;
    navigate({
      pathname: location.pathname,
      search: `?page=${page}`,
    });
  };
  debugger;

  return {
    currentPage,
    totalPages,
    totalItems,
    paginatedData,
    itemsPerPage,
    handlePageChange,
  };
};

export default usePagingData;
