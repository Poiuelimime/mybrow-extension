document.addEventListener('DOMContentLoaded', function() {
    let statusInput = document.getElementById('customStatus');
    let savedStatus = localStorage.getItem('rpcCustomStatus') || 'Browsing the web';
    statusInput.value = savedStatus;
});

function saveSettings() {
    let statusInput = document.getElementById('customStatus');
    localStorage.setItem('rpcCustomStatus', statusInput.value || 'Browsing the web');
    alert('Settings saved! Reload pages to apply changes.');
}