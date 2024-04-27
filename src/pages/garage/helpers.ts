// apiService.js

import { BASE_URL } from "../../utils/constants";

export const getCars = (page, limit) => {
  let totalItems = 0;

  return fetch(`${BASE_URL}/garage?_page=${page}&_limit=${limit}`)
    .then((response) => {
      totalItems = Number(response.headers.get("X-Total-Count"));
      return response.json();
    })
    .then((items) => ({ items, totalItems }));
};

export const createCar = (name, color) => {
  const url = `${BASE_URL}/garage`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, color }),
  };

  return fetch(url, requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create car");
    }
    return response.json();
  });
};

export const updateCar = (id, name, color) => {
  const url = `${BASE_URL}/garage/${id}`;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, color }),
  };

  return fetch(url, requestOptions).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create car");
    }
    return response.json();
  });
};

export const deleteCar = (id) => {
  return fetch(`${BASE_URL}/garage/${id}`, { method: "DELETE" }).then(
    (response) => {
      if (!response.ok) throw new Error("Failed to create car");
      return response.json();
    }
  );
};

export const startStopEngine = (id, status) => {
  const url = `${BASE_URL}/engine?id=${id}&status=${status}`;

  return fetch(url, { method: "PATCH" }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to start/stop engine");
    }
    return response.json();
  });
};
