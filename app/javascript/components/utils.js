
/*
class Formatter {
  formatDate = (date) => {
    moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
}

export default Formatter
*/

/*
export function formatDate(date) {
    console.log('formatDate', date);
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
*/

export let formatDate = (date) => {
  console.log('util.js formatDate', date);
  return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

