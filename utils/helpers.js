module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },

  progress_bar: (donation_total, goal) => {
    var percentage;
    if (parseInt(donation_total) === 0) {
      percentage = 0;
    } else {
      percentage = (donation_total / goal) * 100;
    }

    return percentage.toFixed(2);
  }
}