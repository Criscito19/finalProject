import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './ui/NavBar/NavBar';
import Loader from '../HOCs/Loader';
import Footer from './ui/Footer/Footer';
import ScrollToTopButton from './ui/ScrollToTopButton/ScrollToTopButton';


export default function Layout(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симуляция загрузки данных
    const loadData = async () => {
      try {
        // Загрузка данных, например, с API
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Пример ожидания
        setIsLoading(false); // Когда данные загружены, убираем лоадер
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    loadData();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: 'calc(100vh - 120px)',
            }}
          >
            <NavBar />
            <Outlet />

            <ScrollToTopButton />
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
}
