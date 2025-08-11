document.addEventListener('DOMContentLoaded', function() {
    let statusElement = document.getElementById('status');
    let rpcEnabled = localStorage.getItem('rpcEnabled') !== 'false';
    statusElement.textContent = rpcEnabled ? 'RPC is ON' : 'RPC is OFF';
});

function toggleRPC() {
    let rpcEnabled = localStorage.getItem('rpcEnabled') !== 'false';
    localStorage.setItem('rpcEnabled', !rpcEnabled);
    let statusElement = document.getElementById('status');
    statusElement.textContent = !rpcEnabled ? 'RPC is ON' : 'RPC is OFF';
    console.log('MyBrow-DiscordRPC: RPC toggled to ' + (!rpcEnabled ? 'ON' : 'OFF'));
}

function openOptions() {
    window.location.href = 'options.html';
}