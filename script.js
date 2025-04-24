// script.js
import jwt from 'jsonwebtoken';

/**
 * Generate a JWT with expiry.
 * @param {Object} payload - Data to encode in the token.
 * @param {string} secret - Secret key used to sign the token.
 * @param {string | number} expiresIn - Expiration time (e.g., '1h', '10m', 60).
 * @returns {string} - Signed JWT token.
 */
export function encrypt(payload, secret, expiresIn = '1h') {
  try {
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  } catch (error) {
    console.error('JWT generation failed:', error);
    return null;
  }
}