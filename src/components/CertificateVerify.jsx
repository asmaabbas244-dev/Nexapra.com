import React, { useState } from 'react';
import './CertificateVerify.css';

export default function CertificateVerify() {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://script.google.com/macros/s/AKfycbyTYtUbWwj6PYzdFcfOMeZKqxnO3UuERf2RCOcBz0io2BYn_T3ITQmqKdMXR3SegQc/exec';

  // Helper function jo ID ko dono taraf se perfectly clean kar dega
  const normalizeId = (str) => {
    if (!str) return '';
    return str.toString().toUpperCase().replace(/ID\s*:\s*/g, '').replace(/\s+/g, ' ').trim();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const cleanInput = normalizeId(certId);
    if (!cleanInput) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}?id=${encodeURIComponent(certId)}`, {
        method: 'GET',
        redirect: 'follow',
      });
      
      const rawText = await response.text();
      const jsonResponse = JSON.parse(rawText);

      setLoading(false);

      if (jsonResponse && jsonResponse.success && Array.isArray(jsonResponse.data)) {
        
        // Dono IDs ko normalize karke accurate match karna
        const matchedCert = jsonResponse.data.find(item => {
          if (!item.certificateId) return false;
          return normalizeId(item.certificateId) === cleanInput;
        });

        if (matchedCert) {
          const programName = matchedCert.internshipCertificate || 
                              matchedCert.employeeCertificate || 
                              matchedCert.program || 
                              matchedCert.course || 
                              'Intern / Employee';

          setResult({
            status: 'success',
            name: matchedCert.fullName || 'N/A',
            course: programName,
            date: matchedCert.issuanceDate || 'N/A',
            id: matchedCert.certificateId,
          });
        } else {
          setResult({
            status: 'error',
            message: 'Invalid Certificate ID. Please check and try again.',
          });
        }
      } else {
        setResult({
          status: 'error',
          message: 'Invalid response from server.',
        });
      }

    } catch (error) {
      console.error('API Error:', error);
      setLoading(false);
      setResult({
        status: 'error',
        message: 'Failed to connect to the server. Please try again.',
      });
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2>Certificate Verification</h2>
        <p className="verify-subtitle">
          Enter your unique Certificate ID provided by NexAppra to verify its authenticity.
        </p>

        <form onSubmit={handleVerify} className="verify-form">
          <input
            type="text"
            placeholder="e.g. WBR (NXA) - 26/0002"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            className="verify-input"
          />
          <button type="submit" disabled={loading} className="verify-btn">
            {loading ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </form>

        {result && (
          <div className={`result-box ${result.status}`}>
            {result.status === 'success' ? (
              <div>
                <h3>✔ Verified Certificate</h3>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Program:</strong> {result.course}</p>
                <p><strong>Issue Date:</strong> {result.date}</p>
                <span className="cert-id-tag">ID: {result.id}</span>
              </div>
            ) : (
              <p className="error-msg">{result.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}