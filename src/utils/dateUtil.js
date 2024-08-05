export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleString("en-US", dateOptions);

  return formattedDate;
};
