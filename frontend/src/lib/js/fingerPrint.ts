
async function getWebGLContext(): Promise<WebGLRenderingContext | null> {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return gl instanceof WebGLRenderingContext ? gl : null;
}


function getCanvasFingerprint(): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return 'Cannot obtain Canvas rendering context';
    }
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('Hello, world!', 2, 15);
    return canvas.toDataURL();
}

async function getWebRTCIPs(): Promise<string[]> {
    const ips: string[] = [];
    const pc = new RTCPeerConnection({ iceServers: [] }); // Empty ICE servers
    pc.onicecandidate = event => {
        if (event.candidate) {
            const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9:]+:[a-f0-9:]+)/g;
            const ipMatches = event.candidate.candidate.match(ipRegex);
            if (ipMatches && !ips.includes(ipMatches[0])) {
                ips.push(ipMatches[0]);
            }
        }
    };
    await pc.createOffer().then(offer => pc.setLocalDescription(offer));
    return new Promise(resolve => {
        setTimeout(() => {
            pc.close();
            resolve(ips);
        }, 1000); // Close after 1000 milliseconds
    });
}


export async function collectFingerprint(): Promise<TS.FingerprintData> {
    const gl = await getWebGLContext();
    let webglVendor: string | undefined = undefined;
    let webglRenderer: string | undefined = undefined;

    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            webglVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) ?? undefined;
            webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) ?? undefined;
        }
    }

    const localIPs = await getWebRTCIPs();

    return {
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        webglVendor,
        webglRenderer,
        canvasFingerprint: getCanvasFingerprint(),
        localIPs
    };
}
