

flatpickr("#date", {
    mode: "range",
    inline: true,
    showMonths: 3,
    locale: "ja",
    dateFormat: "Y年m月d日",
    onChange: function(selectedDates, dateStr) {
      let rangeStartElm = document.getElementById('rangeStart');
      let rangeEndElm = document.getElementById('rangeEnd');
      if (!~dateStr.indexOf('から')) {
        rangeStartElm.value = dateStr;
      } else {
        let splitDates = dateStr.split(' から ');
        rangeStartElm.value = splitDates[0];
        rangeEndElm.value = splitDates[1];
      }
    },
  });


const openModal = () => {
document.getElementById('modal').classList.add('show');
};
const closeModal = () => {
document.getElementById('modal').classList.remove('show');
};