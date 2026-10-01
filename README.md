# سئو تور (SEOTOUR.IR)

> وب‌سایت استاتیک حرفه‌ای خدمات سئو و بهینه‌سازی وب‌سایت — ساخته‌شده با تمرکز بر سئو فنی، محتوایی و کارایی بالا.

[![Deploy to GitHub Pages](https://github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/actions)

## 📋 معرفی پروژه

این پروژه یک وب‌سایت استاتیک کامل برای شرکت خدمات سئو **سئو تور** است که با هدف:

- ارائه خدمات سئو حرفه‌ای
- گرفتن سفارش از طریق فرم تماس
- آموزش سئو از طریق بلاگ
- نمایش نمونه کار به مشتریان

طراحی و پیاده‌سازی شده است. خود این وب‌سایت به عنوان یک نمونه کار سئو عملی است و تمام اصول سئو فنی، محتوایی و تکنیکال در آن رعایت شده است.

## ✨ ویژگی‌ها

### طراحی و UX
- ✅ طراحی حرفه‌ای، مدرن و واکنش‌گرا (Responsive)
- ✅ پشتیبانی کامل از RTL و فونت Vazirmatn
- ✅ انیمیشن‌های ظریف با Intersection Observer
- ✅ تجربه کاربری عالی در موبایل و دسکتاپ
- ✅ Dark Hero با گرادیان و افکت‌های شیشه‌ای

### سئو فنی (Technical SEO)
- ✅ HTML معنایی و Semantic
- ✅ متاتگ‌های کامل: title, description, keywords, canonical
- ✅ Open Graph و Twitter Card برای همه صفحات
- ✅ Structured Data (JSON-LD) برای Organization, WebSite, Service, Article, BreadcrumbList
- ✅ `robots.txt` بهینه
- ✅ `sitemap.xml` کامل با همه صفحات
- ✅ `site.webmanifest` برای PWA
- ✅ HTTPS محور و امن
- ✅ سرعت بالا (بدون فریم‌ورک، HTML/CSS/JS خالص)
- ✅ بدون رندر سمت کلاینت (کاملاً Static)
- ✅ Core Web Vitals بهینه

### سئو محتوایی
- ✅ محتوای فارسی حرفه‌ای و عمیق
- ✅ ساختار هدینگ صحیح (H1 → H6)
- ✅ استفاده از LSI Keywords به صورت طبیعی
- ✅ لینک‌سازی داخلی استراتژیک
- ✅ مقالات با حداقل ۱۷۰۰ کلمه
- ✅ چک‌لیست‌ها و جدول‌های مقایسه‌ای

### کارایی (Performance)
- ✅ بدون Build Step — فایل‌های HTML آماده استفاده
- ✅ CSS و JS مینیمال و بهینه
- ✅ تصاویر SVG (بدون کاهش کیفیت و حجم کم)
- ✅ Lazy loading انیمیشن‌ها
- ✅ Preconnect به CDN فونت
- ✅ Caching-friendly با GitHub Pages

### دسترس‌پذیری (Accessibility)
- ✅ ARIA labels و roles
- ✅ Skip to content link
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Color contrast استاندارد WCAG

## 📁 ساختار پروژه

```
seotour/
├── index.html                      # صفحه اصلی
├── services.html                   # صفحه خدمات
├── about.html                      # درباره ما
├── blog.html                       # لیست بلاگ
├── contact.html                    # تماس و فرم
├── privacy.html                    # حریم خصوصی
├── 404.html                        # صفحه خطا
├── robots.txt                      # دستورالعمل موتورهای جستجو
├── sitemap.xml                     # نقشه سایت
├── site.webmanifest                # manifest برای PWA
├── CNAME                           # تنظیم دامنه سفارشی GitHub Pages
├── README.md                       # این فایل
├── .nojekyll                       # غیرفعال‌سازی Jekyll برای GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css               # استایل اصلی (سیستم طراحی)
│   ├── js/
│   │   └── main.js                 # تعاملات و انیمیشن‌ها
│   └── img/
│       ├── favicon.svg             # فاوآیکون
│       └── og-image.svg            # تصویر Open Graph
└── blog/
    ├── technical-seo-checklist.html       # مقاله چک‌لیست سئو فنی
    ├── wordpress-seo-guide.html           # راهنمای سئو وردپرس
    ├── keyword-research-guide.html        # راهنمای تحقیق کلمه
    ├── on-page-seo-guide.html             # راهنمای سئو On-Page
    └── link-building-strategies.html      # استراتژی‌های لینک بیلدینگ
```

## 🚀 نصب و راه‌اندازی

### اجرای محلی

این یک وب‌سایت استاتیک خالص است و نیازی به نصب هیچ وابستگی ندارد. کافی است فایل‌ها را روی هر وب‌سرور استاتیکی قرار دهید.

#### روش ۱: باز کردن مستقیم
فایل `index.html` را در مرورگر باز کنید. (برای تست ساده)

#### روش ۲: Python HTTP Server
```bash
cd seotour
python3 -m http.server 8000
```
سپس آدرس `http://localhost:8000` را در مرورگر باز کنید.

#### روش ۳: Node.js (http-server)
```bash
npx http-server seotour -p 8000
```

### استقرار روی GitHub Pages

#### مراحل:
1. یک ریپو روی GitHub بسازید (مثلا `seotour`)
2. فایل‌های این پروژه را push کنید:
   ```bash
   cd seotour
   git init
   git add .
   git commit -m "Initial commit - seotour.ir website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/seotour.git
   git push -u origin main
   ```
3. در GitHub به مسیر **Settings → Pages** بروید
4. در بخش **Source**، گزینه **Deploy from a branch** را انتخاب کنید
5. برنچ `main` و پوشه `/ (root)` را انتخاب کنید
6. **Save** را بزنید

#### تنظیم دامنه سفارشی (seotour.ir):
1. فایل `CNAME` در ریشه پروژه وجود دارد با محتوای `seotour.ir`
2. در تنظیمات DNS دامنه خود، رکوردهای زیر را اضافه کنید:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   USERNAME.github.io
   ```
3. در **Settings → Pages → Custom domain** آدرس `seotour.ir` را وارد کنید
4. گزینه **Enforce HTTPS** را فعال کنید

## 🔧 شخصی‌سازی

### تغییر اطلاعات تماس
در همه فایل‌های HTML، به دنبال این موارد بگردید و تغییر دهید:
- `info@seotour.ir` → ایمیل شما
- `@seotour` → آیدی تلگرام شما
- آدرس و شماره تماس در `contact.html`

### تغییر رنگ‌ها
فایل `assets/css/style.css` را باز کنید و در بخش `:root` متغیرهای رنگ را تغییر دهید:
```css
:root {
  --color-primary: #0A2540;   /* رنگ اصلی */
  --color-accent: #00D4FF;    /* رنگ تأکیدی */
  /* ... */
}
```

### افزودن مقاله بلاگ جدید
1. یک فایل HTML در پوشه `blog/` بسازید (مثلا `new-article.html`)
2. از یکی از مقالات موجود به عنوان الگو کپی کنید
3. محتوای خود را جایگزین کنید
4. در `blog.html` یک کارت جدید اضافه کنید
5. در `sitemap.xml` یک `<url>` جدید اضافه کنید

## 📊 سئو چک‌لیست (تحقق شده)

### فنی
- [x] HTTPS فعال
- [x] سرعت بارگذاری < ۳ ثانیه
- [x] Core Web Vitals (LCP, CLS, INP) سبز
- [x] Mobile-Friendly
- [x] robots.txt معتبر
- [x] sitemap.xml معتبر
- [x] بدون خطای کنسول جستجو
- [x] Canonical tags در همه صفحات
- [x] Structured Data بدون خطا

### محتوایی
- [x] عنوان منحصر به فرد برای هر صفحه
- [x] توضیحات متا بهینه
- [x] هدینگ H1 منفرد در هر صفحه
- [x] ساختار هدینگ درست (H1 → H2 → H3)
- [x] محتوای حداقل ۶۰۰ کلمه در صفحات اصلی
- [x] مقالات بلاگ ۱۷۰۰+ کلمه
- [x] تصاویر با alt text

### روی صفحه (On-Page)
- [x] URL ساختاریافته
- [x] لینک‌سازی داخلی
- [x] Breadcrumbs در همه صفحات
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Favicon

## 🛠 تکنولوژی‌ها

- **HTML5** — ساختار معنایی
- **CSS3** — Custom Properties، Grid، Flexbox، Fluid Typography
- **Vanilla JavaScript** — بدون وابستگی خارجی
- **Vazirmatn** — فونت فارسی از CDN
- **SVG** — تصاویر و آیکون‌ها

## 📈 ابزارهای تست سئو

پس از استقرار، وب‌سایت را با این ابزارها تست کنید:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 📞 پشتیبانی و تماس

- **وب‌سایت:** [seotour.ir](https://seotour.ir)
- **ایمیل:** info@seotour.ir
- **تلگرام:** @seotour

## 📄 لایسنس

این پروژه برای استفاده تجاری شرکت سئو تور توسعه داده شده است. © ۱۴۰۳ سئو تور. تمام حقوق محفوظ است.

---

**ساخته‌شده با ❤️ برای کسب‌وکارهای ایرانی**
