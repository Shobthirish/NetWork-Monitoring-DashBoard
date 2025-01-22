// Simulated data
function getRandomSpeed() {
    return (Math.random() * 100).toFixed(2);
}

function getPingStatus() {
    return Math.random() > 0.5 ? 'Online' : 'Offline';
}

function getRandomDevices() {
    const devices = [
        { name: 'Device 1', status: 'Online' },
        { name: 'Device 2', status: 'Online' },
        { name: 'Device 3', status: Math.random() > 0.5 ? 'Online' : 'Offline' },
        { name: 'Device 4', status: 'Online' },
        { name: 'Device 5', status: Math.random() > 0.5 ? 'Online' : 'Offline' }
    ];
    return devices.slice(0, Math.floor(Math.random() * devices.length) + 1);
}

// Update Bandwidth Usage
function updateBandwidth() {
    document.getElementById('downloadSpeed').textContent = `${getRandomSpeed()} Mbps`;
    document.getElementById('uploadSpeed').textContent = `${getRandomSpeed()} Mbps`;
}

// Update Ping Status
function updatePing() {
    document.getElementById('pingStatus').textContent = getPingStatus();
}

// Update Connected Devices
function updateDevices() {
    const deviceList = document.getElementById('deviceList');
    deviceList.innerHTML = ''; // Clear existing list
    getRandomDevices().forEach(device => {
        const li = document.createElement('li');
        li.textContent = `${device.name}: ${device.status}`;
        deviceList.appendChild(li);
    });
}

// Real-Time Updates
setInterval(updateBandwidth, 2000); // Update every 2 seconds
setInterval(updatePing, 3000); // Update every 3 seconds
setInterval(updateDevices, 5000); // Update every 5 seconds
