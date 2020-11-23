window.onload = setInterval(function cpuTemperature() {

  axios.get("/api/cputem")
  .then(res => {
    console.log(res.data);
    document.getElementById("cputemperature").innerHTML = res.data;

  })
  .catch(err => {
    console.log(err);
  })

}, 1000)
