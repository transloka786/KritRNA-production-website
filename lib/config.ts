export const ORG_PHONE = '+91'; // <-- EDIT ME

export const CONTACT_CONFIG = {
  email: process.env.CONTACT_TO || 'trnaativetransloka@gmail.com',
  from: process.env.CONTACT_FROM || 'KritRNA Website <no-reply@kritrna.ai>',
};

export const SMTP_CONFIG = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
};