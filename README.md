# Portfolio Cá Nhân

> **Được xây dựng với Magic Portfolio**  
> Portfolio này dựa trên [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) của Once UI - một template portfolio hiện đại, gọn gàng dành cho developers và designers.

Website portfolio cá nhân giới thiệu công việc của mình với vai trò .NET Backend/Fullstack Developer. Hỗ trợ song ngữ (Tiếng Việt/English), blog kỹ thuật và showcase các dự án.

````carousel
![Giao diện Light Mode - Tiếng Anh](file:///d:/2026/projects/magic-portfolio/public/images/og/homepage.png)
<!-- slide -->
![Giao diện Dark Mode - Tiếng Việt](file:///d:/2026/projects/magic-portfolio/public/images/og/homepage-dark.png)
````

## Giới Thiệu Portfolio

Đây là portfolio cá nhân được xây dựng dựa trên template Magic Portfolio, được tùy chỉnh để làm nổi bật chuyên môn trong phát triển backend, kiến trúc hệ thống và fullstack engineering. Website bao gồm:

- **Nội Dung Song Ngữ**: Hỗ trợ đầy đủ Tiếng Việt và Tiếng Anh với next-intl
- **Blog Kỹ Thuật**: Các bài viết về Clean Architecture, CQRS, tối ưu hiệu năng và nhiều hơn nữa
- **Showcase Dự Án**: Các dự án thực tế thể hiện năng lực backend và fullstack
- **CV Chuyên Nghiệp**: Trình bày chi tiết kinh nghiệm và kỹ năng

## Công Nghệ Sử Dụng

- **Framework**: [Next.js](https://nextjs.org) (v18.17+)
- **Thư Viện UI**: [Once UI](https://once-ui.com)
- **Quản Lý Nội Dung**: Hệ thống MDX
- **Đa Ngôn Ngữ**: next-intl
- **Styling**: Once UI design tokens & data attributes

## Phát Triển Cục Bộ

**1. Cài đặt dependencies**
```bash
npm install
```

**2. Chạy development server**
```bash
npm run dev
```

**3. Mở trình duyệt**
```
http://localhost:3000
```

**4. Cấu hình**
- Design system: `src/resources/once-ui.config.js`
- Nội dung & bản dịch: `src/resources/content.tsx` và `messages/[locale].json`

**5. Quản lý nội dung**
- Bài viết blog: `src/app/[locale]/blog/posts/*.mdx`
- Dự án: `src/app/[locale]/work/projects/*.mdx`

## Tính Năng

### Thiết Kế & Trải Nghiệm
- Giao diện responsive tối ưu cho mọi thiết bị
- Thiết kế chuyên nghiệp, gọn gàng với các tương tác tinh tế
- Tùy chỉnh theme linh hoạt qua data attributes
- Hỗ trợ Dark mode

### Quản Lý Nội Dung
- Blog posts và project pages dựa trên MDX
- Hiển thị sections có điều kiện
- Tự động tạo social links
- Hỗ trợ bảo vệ trang bằng mật khẩu

### SEO & Hiệu Năng
- Tự động tạo Open Graph images
- Schema markup và metadata
- Tối ưu cho công cụ tìm kiếm
- Tốc độ tải trang nhanh

### Đa Ngôn Ngữ
- Hỗ trợ Tiếng Việt và Tiếng Anh
- Routes và nội dung được bản địa hóa
- Tự động nhận diện ngôn ngữ

## Cấu Trúc Dự Án

```
src/
├── app/[locale]/          # Các trang đa ngôn ngữ
│   ├── about/            # Trang giới thiệu/CV
│   ├── blog/             # Blog posts
│   ├── work/             # Showcase dự án
│   └── gallery/          # Thư viện ảnh
├── components/           # React components
├── resources/            # Config và nội dung
└── messages/             # File bản dịch
```

## Ghi Công & Giấy Phép

**Portfolio này được xây dựng với [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)** được tạo bởi **Once UI**.

### Điều Khoản Giấy Phép

Phân phối theo **Giấy Phép CC BY-NC 4.0**.

- ✅ **Bắt buộc ghi công** - Phải ghi nhận Once UI và link đến [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) gốc
- ❌ **Không cho phép sử dụng thương mại** - Giấy phép này chỉ cho phép sử dụng phi thương mại
- 🔓 **Mở rộng sang Dopler CC** - Mua giấy phép [Once UI Pro](https://once-ui.com/pricing) để mở khóa quyền sử dụng thương mại

Xem [`LICENSE.txt`](LICENSE.txt) để biết thông tin đầy đủ về giấy phép.

### Ghi Nhận

- **Template**: [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)
- **Tác Giả Gốc**: Lorant One ([Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/))
- **Thư Viện UI**: [Once UI](https://once-ui.com)
- **Framework**: [Next.js](https://nextjs.org)

---

**Lưu ý**: Đây là website portfolio cá nhân, phi thương mại. Tất cả nội dung và tùy chỉnh gốc là của riêng tôi, trong khi template nền tảng và các UI components được cung cấp bởi Once UI theo Giấy Phép CC BY-NC 4.0.