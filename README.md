# 🌑 Wave0084 Studio

> **"Pushing the boundaries of digital fear and creative workflow efficiency."**

Chào mừng bạn đến với kho lưu trữ chính thức của **Wave0084 Studio**. Chúng tôi là một studio phát triển game indie chuyên về thể loại kinh dị tâm lý (Psychological Horror) và cung cấp các giải pháp kỹ thuật tối ưu cho hệ sinh thái Unity & Blender.

![Wave0084 Header](https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=1200&q=80)

## 🌐 Globalization (i18n)

Trang web hỗ trợ đa ngôn ngữ để phục vụ cộng đồng toàn cầu:
- 🇺🇸 English (Default)
- 🇻🇳 Tiếng Việt
- 🇨🇳 中文 (Chinese)
- 🇯🇵 日本語 (Japanese)
- 🇮🇩 Bahasa Indonesia

---

## 🚀 Deployment Workflow

Dự án này sử dụng **Docusaurus** và được triển khai tự động lên **GitHub Pages**.

### Quy trình cập nhật (Version-based):
Hệ thống CI/CD được thiết lập để chỉ triển khai khi có sự thay đổi về phiên bản:
1. Thực hiện các thay đổi về code hoặc tài liệu.
2. Tăng số `version` trong tệp `package.json` (vd: `0.0.1` -> `0.0.2`).
3. Push code lên nhánh `main`.
4. GitHub Actions sẽ tự động Build và Deploy lên nhánh `gh-pages`.

---

## 🛠️ Phát triển cục bộ (Local Development)

```bash
# Cài đặt phụ thuộc
npm install

# Chạy môi trường Development
npm run start

# Xây dựng trang tĩnh (Build)
npm run build
```

---

## 📜 License

Bản quyền thuộc về **Wave0084 Studio**. Các tài nguyên và công cụ được cung cấp theo các điều khoản sử dụng riêng biệt được nêu trong từng trang sản phẩm.

---
*Built with 🖤 and Horror by [Deepwave Game Studio](https://github.com/deepwavegame).*
