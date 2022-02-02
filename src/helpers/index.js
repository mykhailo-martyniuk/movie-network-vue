

const checkPaginationCondition = (i, currentPage, endPage) => {
  if (
    i === 1 ||
    i === endPage ||
    i === endPage - 1 ||
    i === currentPage ||
    i === currentPage - 1 ||
    i === currentPage + 1
  )
    return true;
};

export const paginationArray = (currentPage, totalPages) => {
  let isDotStart = false;
  let isDotEnd = false;
  let indexDot = 0;

  return [...Array(totalPages)].map((_, i) => {
    if (checkPaginationCondition(i + 1, currentPage, totalPages)) return i + 1;
    else if (!isDotStart && i < currentPage) {
      isDotStart = true;
      indexDot = i;
      return '...';
    } else if (!isDotEnd && indexDot + 2 !== i && i > currentPage) {
      isDotEnd = true;
      return '...';
    }
  }).filter(el => el);
};

export const removeSpaces = (str) => str.replace(/\s+/g, ' ').trim();

export const conditionForIncrement = ({currentPage,totalPages}, value) => {
  if (value > 0)
    return (
      currentPage + value <=
      totalPages
    );
  else if (value < 0) return currentPage + value >= 1;
};

export const isPropertyOfObjectInArray = (property, value, arr) => {
  return arr.some((e) => e[property] === value);
};

export const findElByProperty = (property, value, arr) => {
  return arr.find((el) => el[property] === value);
};

export const LS = (property, value) => {
  if (!value) return JSON.parse(localStorage[property]);
  localStorage[property] = JSON.stringify(value);
};

export const getGenres = (genres, movie) => {
  return movie.genre_ids.map((id) => {
    return genres.find((genre) => genre.id === id).name;
  });
}
