// apiService.js
export const fetchUser = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data;
};