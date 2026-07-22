/**
 * Thin wrapper — use apply-city-images.mjs for all cities.
 * @example node scripts/apply-paris-images.mjs
 */
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'apply-city-images.mjs');
const result = spawnSync(process.execPath, [script, 'paris'], { stdio: 'inherit' });
process.exit(result.status ?? 1);
