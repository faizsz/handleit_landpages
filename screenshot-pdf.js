import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const URL = 'https://handleit-landpages.vercel.app';
const OUTPUT_PDF = path.join(__dirname, 'handleit-landing.pdf');

(async () => {
  console.log('🚀 Membuka browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Desktop viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  console.log(`📄 Membuka ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });

  // Tunggu font dan animasi selesai
  await new Promise(r => setTimeout(r, 2500));

  // Scroll perlahan supaya lazy-load & animasi ter-trigger
  console.log('📜 Scrolling halaman...');
  await page.evaluate(async () => {
    await new Promise(resolve => {
      const distance = 300;
      const delay = 80;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  });

  // Kembali ke atas dan tunggu sebentar
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1500));

  // Export ke PDF
  console.log('💾 Menyimpan PDF...');
  await page.pdf({
    path: OUTPUT_PDF,
    format: 'A3',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`✅ Selesai! PDF tersimpan di: ${OUTPUT_PDF}`);
})();
