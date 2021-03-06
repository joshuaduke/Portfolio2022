const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

const helpers = {
    formatDate: function(date){
      console.log(date)
      date = new Date(date)
      console.log(date)
        return [
            padTo2Digits(monthNames[date.getMonth()]),
            padTo2Digits(date.getDate() + 1),
            date.getFullYear()
          ].join(' ');
    }
}

export default helpers;

