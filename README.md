# Hào Khí Việt Nam 🇻🇳

Website tĩnh lấy cảm hứng từ bố cục album/landing page trong ảnh tham khảo: hình ảnh lớn bên trái, danh sách nhân vật bên phải, nền tối, hạt bụi ánh sáng, cursor vòng tròn và nút nhạc nổi.

## Chạy local

Không cần framework.

- Mở `index.html` trực tiếp, hoặc
- chạy một static server trong thư mục này.

## Đưa lên GitHub

```bash
git init
git add .
git commit -m "Create Hao Khi Viet Nam website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hao-khi-viet-nam.git
git push -u origin main
```

## Deploy Vercel

1. Đăng nhập Vercel.
2. Chọn **Add New → Project**.
3. Import repository GitHub `hao-khi-viet-nam`.
4. Framework Preset: **Other** (hoặc để Vercel tự nhận static project).
5. Build Command: để trống.
6. Output Directory: để trống.
7. Deploy.

## Nhạc Sounds of Vietnam

Album **Sounds of Vietnam** của LASZH/Aurora Music Vietnam được phát hành năm 2026; các track gồm *Vietnam Dynasty, Vietnam Flute, Vietnam Pagoda, Vietnam Blossom, Vietnam Wind*. Website không tự tải/re-host bản nhạc có bản quyền.

Nếu bạn có file âm thanh và quyền sử dụng, đặt file đã được cấp phép tại:

`music/sounds-of-vietnam.mp3`

Sau đó nút tròn góc phải sẽ phát/tạm dừng nhạc sau khi người dùng bấm. Nếu không có file local, nút sẽ đưa người dùng tới trang album.

## Tùy biến nhân vật

Danh sách nhân vật nằm ở đầu `script.js` trong mảng `characters`. Bạn có thể đổi tên, niên đại, vai trò và câu mô tả.
