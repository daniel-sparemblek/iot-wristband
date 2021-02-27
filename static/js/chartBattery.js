$.ajax({
    url: "http://iot-wristband.westeurope.cloudapp.azure.com:80/api/telemetry/get",
    data: {
        "DeviceId": '1',
        "SensorName": "Battery",
        "dateFrom": "2021-02-01",
        "dateTo": "2022-02-25"
    },
    cache: false,
    type: "GET",
    success: function (response) {
        values = [];
        captions = [];
        for (var i = 0; i < response.length; i++) {
            captions[i] = response[i]["CreatedOn"];
            values[i] = response[i]["SensorValue"];
        }

        var ctx = document.getElementById("Mychart");
        var mychart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: captions,
                datasets: [
                    {
                        data: values,
                        label: "Battery",
                        borderColor: "#ff0000",
                        color: "#ff0000",
                        fill: false
                    },
                ]
            }
        });
    },
    error: function (xhr) {
        console.log("Ajax error!");
        console.log(xhr);
    }
});