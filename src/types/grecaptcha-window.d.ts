/** reCAPTCHA v3 on `window` (script loaded from layout). */
interface GrecaptchaV3 {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

interface Window {
  grecaptcha?: GrecaptchaV3;
}
