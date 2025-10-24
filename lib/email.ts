import nodemailer from 'nodemailer';
import { SMTP_CONFIG } from './config';

export function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.port === 465,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
  });
}