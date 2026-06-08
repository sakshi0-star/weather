async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "a3ea08f82562fc917599fd8a3b8c346f";

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML =
          `Temperature: ${data.main.temp} °C`;

    } catch(error) {
        console.log(error);
    }
}