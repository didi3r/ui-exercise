export const generateTagColor = (tagName: string) => {
  if (tagName === 'work') {
    return '#206CFF';
  } else if (tagName === 'travel') {
    return '#EC7000';
  }

  return null;
};
