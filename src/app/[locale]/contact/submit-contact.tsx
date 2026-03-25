// app/actions/contact.ts
'use server';

import { createHmac } from 'crypto';
import { time } from 'node:console';
import crypto from 'node:crypto';

export async function submitContact(prevState: any, formData: FormData) {
    //import env var
    const secret = process.env.N8N_HMAC_SECRET!;
    const url = process.env.N8N_WEBHOOK_URL!;

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!name || !email || !message) {
        return { error: 'Missing required fields' };
    }

    const payload = { name, email, company, message };
    const body = JSON.stringify(payload);

    // Headers for HMAC
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const nonce = crypto.randomUUID();
    const algo = 'sha256';
    const bodyHash = crypto.createHash(algo).update(Buffer.from(body)).digest('hex');

     // canonicalize query
    const { URL } = await import('node:url');
    const u = new URL(url);
    const query = [...u.searchParams.entries()]
        .sort(([a],[b]) => a.localeCompare(b))
        .map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');

    // Compute HMAC signature (order must match n8n configuration)
    const base = ['POST', u.pathname, query, timestamp, nonce, bodyHash].join('\n');
    const signatureHex = crypto.createHmac(algo, secret).update(base).digest('hex');

    // Send to n8n webhook
    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-timestamp': timestamp,
            'x-nonce': nonce,
            'x-signature': `${algo}=${signatureHex}`,
        },
        body,
        });

     console.log(response.status, await response.text());
    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n error:', response.status, errorText);
      return { error: `Failed to send: ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error('Request failed:', error);
    return { error: 'Network error – please try again later' };
  }
}