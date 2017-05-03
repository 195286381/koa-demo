// alert(111);
// window.onlaod = function() {
//   alert(1111);
  // setTimeout(function() {
    axios({
      method: 'get',
      url: '/Users/'
    }).then(response => {

      console.log(response.data);
      alert(response.data);
    }).catch(err => {
      console.log(err);
    });
  //   axios({
  //     method: 'get',
  //     url:"http://localhost:3000/users/"
  //   }).then(response => {
  //     const {status, data} = response;
  //     if (status === 200) {
  //       console.log(data);
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }, 2000)
// };


nodemon // ajaxDemo