import Vue from "vue";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const formatDate = inputDate => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day}.${months[month]} ${year}`;
};
const dateFilter = value => formatDate(value);

Vue.filter("date", dateFilter);
