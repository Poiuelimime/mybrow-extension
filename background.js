console.log('MyBrow-DiscordRPC: ');
setInterval(() => {
    let rpcEnabled = localStorage.getItem('rpcEnabled') !== 'false';
    let customStatus = localStorage.getItem('rpcCustomStatus') || 'Browsing the web';
    console.log(`MyBrow-DiscordRPC: RPC ${rpcEnabled ? 'enabled' : 'disabled'}, Status: ${customStatus}`);
}, 5000);