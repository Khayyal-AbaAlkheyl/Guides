import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const SECRET_FILE = 'publish-secret.txt';

export function parseSecretFile(root) {
  const filePath = path.join(root, SECRET_FILE);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  const out = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const i = trimmed.indexOf('=');
    if (i === -1) continue;
    out[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
  }
  return out;
}

export function ensureSecretFile(root) {
  let cfg = parseSecretFile(root);
  if (cfg?.SECRET && cfg?.OWNER_PASSWORD) {
    return cfg;
  }

  const secret = crypto.randomBytes(32).toString('hex');
  const ownerPassword = crypto.randomBytes(5).toString('hex');
  const body = [
    '# Local only — never commit this file',
    '# Changing SECRET changes all sell links',
    `SECRET=${secret}`,
    `OWNER_PASSWORD=${ownerPassword}`,
    ''
  ].join('\n');
  fs.writeFileSync(path.join(root, SECRET_FILE), body, 'utf8');
  cfg = { SECRET: secret, OWNER_PASSWORD: ownerPassword };
  console.log('\nCreated publish-secret.txt');
  console.log('Owner password:', ownerPassword);
  console.log('Keep this file safe — it controls all guide URLs.\n');
  return cfg;
}

export function cityToken(secret, city) {
  return crypto
    .createHash('sha256')
    .update(`${secret}:guide:${city}`, 'utf8')
    .digest('hex')
    .slice(0, 20);
}

export function ownerCatalogDir(secret) {
  return (
    '_o' +
    crypto
      .createHash('sha256')
      .update(`${secret}:owner-catalog`, 'utf8')
      .digest('hex')
      .slice(0, 10)
  );
}

export function passwordSha256(password) {
  return crypto.createHash('sha256').update(password, 'utf8').digest('hex');
}
