// Create the map
const map = L.map('map').setView([42.505185, -8.711013], 12);

// Add a tile layer (you can choose a different one if you prefer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Sample data from your JSON (abbreviated for brevity)
const jsonData = [
    {
        "Data": "02/06/39",
        "Hora": "18:56:33",
        "Temp": "27,2",
        "Hum": "53,9",
        "Lat": "42,493484",
        "Long": "-8,787404"
    },
    {
        "Data": "02/06/39",
        "Hora": "18:57:35",
        "Temp": "27,1",
        "Hum": "54,1",
        "Lat": "42,493481",
        "Long": "-8,787402"
    },
    {
        "Data": "02/06/39",
        "Hora": "18:58:37",
        "Temp": "27",
        "Hum": "54,2",
        "Lat": "42,494152",
        "Long": "-8,787188"
    },
    {
        "Data": "02/06/39",
        "Hora": "18:59:39",
        "Temp": "26,9",
        "Hum": "54,2",
        "Lat": "42,495216",
        "Long": "-8,785814"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:00:40",
        "Temp": "26,7",
        "Hum": "54,8",
        "Lat": "42,496555",
        "Long": "-8,781008"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:01:42",
        "Temp": "26,6",
        "Hum": "55,1",
        "Lat": "42,494717",
        "Long": "-8,777368"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:02:42",
        "Temp": "26,4",
        "Hum": "55,2",
        "Lat": "42,494915",
        "Long": "-8,773843"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:03:43",
        "Temp": "26,3",
        "Hum": "55,6",
        "Lat": "42,495045",
        "Long": "-8,770167"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:04:43",
        "Temp": "26,1",
        "Hum": "55,8",
        "Lat": "42,494461",
        "Long": "-8,765428"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:05:43",
        "Temp": "26",
        "Hum": "56,2",
        "Lat": "42,495529",
        "Long": "-8,761491"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:06:45",
        "Temp": "25,9",
        "Hum": "56,1",
        "Lat": "42,496693",
        "Long": "-8,759717"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:07:54",
        "Temp": "25,8",
        "Hum": "56,7",
        "Lat": "42,493729",
        "Long": "-8,756385"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:08:55",
        "Temp": "25,7",
        "Hum": "56,6",
        "Lat": "42,493465",
        "Long": "-8,752742"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:09:52",
        "Temp": "25,6",
        "Hum": "57,4",
        "Lat": "42,49464",
        "Long": "-8,748844"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:10:59",
        "Temp": "25,5",
        "Hum": "57,3",
        "Lat": "42,494732",
        "Long": "-8,743189"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:12:01",
        "Temp": "25,4",
        "Hum": "57,9",
        "Lat": "42,495392",
        "Long": "-8,737766"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:13:01",
        "Temp": "25,3",
        "Hum": "57,7",
        "Lat": "42,496696",
        "Long": "-8,738018"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:14:00",
        "Temp": "25,2",
        "Hum": "57,3",
        "Lat": "42,497547",
        "Long": "-8,73958"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:15:00",
        "Temp": "25,2",
        "Hum": "57,1",
        "Lat": "42,497269",
        "Long": "-8,739517"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:16:01",
        "Temp": "25,1",
        "Hum": "57,3",
        "Lat": "42,497265",
        "Long": "-8,739518"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:17:02",
        "Temp": "25,1",
        "Hum": "57,3",
        "Lat": "42,497265",
        "Long": "-8,739519"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:18:12",
        "Temp": "25",
        "Hum": "57,2",
        "Lat": "42,497269",
        "Long": "-8,739516"
    },
    {
        "Data": "02/06/39",
        "Hora": "19:19:14",
        "Temp": "25",
        "Hum": "57,2",
        "Lat": "42,497269",
        "Long": "-8,73952"
    }
];

function addTwoHours(timeStr) {
    const parts = timeStr.split(':');
    const date = new Date();
    date.setHours(+parts[0]);
    date.setMinutes(+parts[1]);
    date.setSeconds(+parts[2]);

    date.setTime(date.getTime() + (2 * 60 * 60 * 1000)); // Add two hours

    const updatedHours = date.getHours().toString().padStart(2, '0');
    const updatedMinutes = date.getMinutes().toString().padStart(2, '0');
    const updatedSeconds = date.getSeconds().toString().padStart(2, '0');

    return `${updatedHours}:${updatedMinutes}:${updatedSeconds}`;
}

// Convert your jsonData's Lat and Long fields to coordinates
const coordinates = jsonData.map(item => {
    return [
        parseFloat(item.Lat.replace(',', '.')),
        parseFloat(item.Long.replace(',', '.'))
    ];
});

// Create a routing control and add it to the map
L.Routing.control({
    waypoints: coordinates.map(coord => L.latLng(coord[0], coord[1])),
    routeWhileDragging: true,
    createMarker: function (i, waypoint, n) {
        const marker = L.marker(waypoint.latLng);
        const data = jsonData[i];
        const updatedHora = addTwoHours(data.Hora);
        marker.bindPopup(`
    <strong>Hora:</strong> ${updatedHora}<br>
    <strong>Temp:</strong> ${data.Temp}<br>
    <strong>Hum:</strong> ${data.Hum}
`);
        return marker;
    }
}).addTo(map);