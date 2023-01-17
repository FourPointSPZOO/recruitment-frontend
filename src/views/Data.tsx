import { useEffect, useState } from 'react';
import { API_URLS, BASE_URL } from '../app/apiUrls';

export const Data = () => {
  const fetchData = async () => {
    const sessionKey = localStorage.getItem('token') ?? '';
    const response = await fetch(BASE_URL + API_URLS.data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionKey}`,
      },
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
};
