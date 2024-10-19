import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader", 
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

  
    scanner.render(
      (decodedText, decodedResult) => {
        setScanResult(decodedText);  
        scanner.clear();  
      },
      (error) => {
        console.warn(`QR Code scan error: ${error}`);  
      }
    );

    // Cleanup on unmount
    return () => {
      scanner.clear().catch((error) => {
        console.warn("Failed to clear scanner:", error);
      });
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>QR Code Scanner</h2>

      {/* QR Scanner Area */}
      <div id="qr-reader" style={{ width: '300px', margin: 'auto' }}></div>

      {/* Display Scan Result */}
      {scanResult && (
        <div>
          <h3>Scanned Result:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
