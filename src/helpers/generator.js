/**
 * @name generateId
 * @description Generates a unique id
 * @returns {Number} Unique number used for IDs within reducers
 */
export const generateId = () => {
  const max = 1000000;
  const min = 1;

  return (Date.now() + Math.floor(Math.random() * (max - min + 1) + min)).toString();
};
