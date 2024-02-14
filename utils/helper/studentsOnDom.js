// Create a new ID for the students
const studentsOnDom = (houses) => {
  if (houses.length) {
    const idArray = houses.map((house) => house.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};
export default studentsOnDom;
