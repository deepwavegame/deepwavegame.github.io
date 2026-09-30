# Wave0084 Studio

> **"Pushing the boundaries of digital fear and creative workflow efficiency."**

Kho lưu trữ chính thức của website **Wave0084 Studio** — studio game indie kinh dị (analog horror) và các công cụ Unity/Blender. Website dùng **Docusaurus 3** và được triển khai lên **GitHub Pages**.

## Phát triển cục bộ

```bash
npm install
npm run start   # dev server tại http://localhost:3000
npm run build   # build tĩnh vào thư mục build/
npm run serve   # xem thử bản build
```

Yêu cầu Node.js >= 20.

## Cấu trúc

```
docs/               tài liệu Markdown/MDX của từng gói Unity (sidebar khai báo trong sidebars.js)
blog/               devlog
src/
  css/              custom.css (token, Infima, nền tảng) · shell.css (navbar, footer) · docs.css (docs, blog)
  components/       các thành phần dùng chung: PageHead, Entry, FeatureList, SpecList, ProductPage, GamePage...
  data/             nội dung sản phẩm: tools.js, games.js, assets.js, studio.js
  lib/              brands.js (mọi liên kết ngoài), seo.js (JSON-LD sản phẩm)
  pages/            trang chủ, /games, /tools, /assets, /privacy, /terms
  theme/            chỉ một wrapper nhỏ: MDXComponents (bảng cuộn được bằng bàn phím)
static/fonts/       font tự host (Big Shoulders Display, Atkinson Hyperlegible Next)
```

- Thêm công cụ mới: thêm một mục vào `src/data/tools.js`, tạo `src/pages/tools/<id>.js` (2 dòng, xem các trang có sẵn) và thêm sidebar tài liệu nếu có.
- Font được khai báo và preload trong `docusaurus.config.js` (`headTags`), không nằm trong CSS.

## Triển khai

CI/CD chỉ triển khai khi số `version` trong `package.json` thay đổi:

1. Thực hiện các thay đổi về code hoặc tài liệu.
2. Tăng `version` trong `package.json` (vd: `1.0.7` -> `1.1.0`).
3. Push lên nhánh `main`.
4. GitHub Actions sẽ build và deploy lên nhánh `gh-pages`.

## License

Bản quyền thuộc về **Wave0084 Studio**. Các tài nguyên và công cụ được cung cấp theo các điều khoản sử dụng riêng biệt được nêu trong từng trang sản phẩm.
