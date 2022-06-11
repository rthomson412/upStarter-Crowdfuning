async function donationFormHandler(event) {
    event.preventDefault();
    console.log('hello');
    
    const amount = parseInt(document.querySelector('#donation-amount').value.trim());
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

 
    if (amount > 0){

      const response = await fetch(`/api/donations`, {
      method: 'POST',
      body: JSON.stringify({
        amount,
        project_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log(response);
      document.location.replace('/projects');
      getAmountArr();
      donation_total();
    } else {
      alert('Failed to make a donation');
    }
  }
}

function getAmountArr(){
    const amountArr = [];
    db.query(`SELECT * FROM donation WHERE project_id=${id}`,  (err, res) => {
      if (err) throw err
      for (var i = 0; i < res.length; i++) {
        amountArr.push(res[i].amount);
      }
  
    })
    return amountArr;
  }
function donation_total(){
let donation_total;
let amountArr;
      for (var i = 0; i < amountArr.length; i++) {
          donation_total += amountArr[i];
          return donation_total;
      };
}
  document.querySelector('.donate-button').addEventListener('click', donationFormHandler);