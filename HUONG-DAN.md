# Hướng dẫn sử dụng web tra cứu MRI tim

## 1. Mở web
- Bấm đúp file `index.html` → web mở trên trình duyệt (Chrome, Edge). Không cần cài gì, không cần mạng.
- Gõ phím `/` để tìm nhanh (gõ không dấu cũng được: “viem co tim”, “HCM”, “lake louise”).
- Menu bên trái theo thứ tự công việc: **1 Trước chụp** (chọn protocol) → **2 Đọc phim** (danh mục bệnh, tra ngược, so sánh) → **Tham khảo**. Trên điện thoại bấm nút ☰ để mở menu.
- Mỗi trang bệnh có 2 tab: **Trước chụp** (lâm sàng, chỉ định, thứ tự chụp) và **Đọc phim** (dấu hiệu, tiêu chuẩn, phân biệt, mẫu kết luận).
- Nút *Sáng / tối* ở cuối menu: đổi giao diện sáng/tối (phòng đọc phim).
- Mỗi trang bệnh và protocol có nút **In / lưu PDF**.

## 2. Sửa web bằng Claude Code trong VS Code
1. Mở VS Code → **File › Open Folder** → chọn thư mục `CMR`.
2. Mở Claude Code (tiện ích Claude Code trong VS Code). Claude Code tự đọc file `CLAUDE.md` nên đã biết quy tắc của dự án.
3. Gõ yêu cầu bằng tiếng Việt. Sau khi sửa xong, mở lại `index.html` (hoặc bấm F5 trên trình duyệt) để xem.

### Câu yêu cầu mẫu
**Thêm, sửa nội dung**
- “Thêm vào trang viêm cơ tim mục *Theo dõi — khi nào chụp lại*, lấy từ sách S2 chương Myocarditis.”
- “Trong trang HCM, thêm vào bảng chẩn đoán phân biệt bệnh Danon.”
- “Tạo trang bệnh mới: *Bệnh cơ tim chu sinh*, nhóm Bệnh cơ tim, lấy nội dung từ S2.”
- “Sửa protocol P5: thêm bước T2* tùy chọn sau T1 native.”
- “Viết lại phần Mẫu kết luận của trang amyloid cho ngắn gọn hơn.”

**Hình ảnh**
- “Lấy thêm hình ở trang 289 sách S2 cho trang bệnh không lèn chặt, viết chú thích tiếng Việt.”
- “Thêm ảnh này vào trang Takotsubo” (chép ảnh vào thư mục `hinh/takotsubo/` trước). Nhớ xóa thông tin bệnh nhân trên ảnh ca bệnh thật.

**Giá trị của khoa**
- “Cập nhật giá trị bình thường T1, T2, ECV của máy 1.5T Siemens tại khoa: T1 native 1000 ± 40 ms, …”
- “Đổi thời gian chụp ước tính của các protocol theo thực tế khoa: P1 35 phút, …”

**Tài liệu mới**
- “Tôi vừa chép file *SCMR protocols 2020.pdf* vào thư mục `tai-lieu`. Thêm vào danh mục tài liệu với mã G1, rồi đối chiếu các protocol P1–P14, chỗ nào khác thì báo tôi.”
- “Liệt kê những trang bệnh đang dùng nguồn G2.”

**Giao diện**
- “Đổi màu nhóm bệnh cơ tim sang xanh lá đậm.”
- “Cho chữ to hơn một chút.”

**Kiểm tra**
- “Kiểm tra toàn bộ web xem có liên kết hỏng hay ảnh thiếu không.”

## 3. Lưu phiên bản bằng Git (nên làm)
Git giúp quay lại bản cũ nếu một lần sửa làm hỏng web.
- Lần đầu: bảo Claude Code “Khởi tạo Git cho thư mục này và lưu phiên bản đầu tiên.”
- Sau mỗi lần sửa lớn: “Lưu phiên bản (commit) với ghi chú: thêm trang Fabry.”
- Khi sửa hỏng: “Quay lại phiên bản trước.”

Hai file sách PDF **không** đưa vào Git (file Textbook 107 MB vượt giới hạn 100 MB của GitHub). Chúng đã được loại trong `.gitignore`; hãy giữ bản sao sách ở máy hoặc ổ mạng.

## 4. Đưa lên GitHub
**Lưu ý quan trọng:** web có ảnh chụp từ sách có bản quyền, nên repository phải để **Private**.

- **Cách khuyên dùng — GitHub làm kho lưu trữ:** tạo repository Private, bảo Claude Code “Đưa thư mục này lên GitHub repository riêng tư tên mri-tim”. Ở máy khác: tải về (clone) rồi bấm đúp `index.html`. Ai cần dùng thì mời vào repository.
- **GitHub Pages (có đường link xem trên điện thoại):** theo tài liệu GitHub, gói Free chỉ bật Pages cho repository Public; các gói trả phí (Pro, Team) bật được Pages từ repository Private nhưng trang web vẫn **công khai cho ai có link**. Chỉ GitHub Enterprise Cloud mới giới hạn người xem được. Vì vậy không nên bật Pages nếu không chấp nhận ảnh sách bị công khai.
- Nếu cần xem trên điện thoại có mật khẩu: hỏi Claude Code về các dịch vụ host tĩnh có xác thực (ví dụ Cloudflare Pages kèm Cloudflare Access), hoặc đặt trên máy chủ nội bộ của bệnh viện.

## 5. Chia sẻ trong khoa không cần mạng
Chép cả thư mục web (trừ 2 file PDF nếu muốn nhẹ) vào USB, ổ mạng nội bộ hoặc Google Drive; người khác chỉ cần bấm đúp `index.html`.

## 6. Cấu trúc nội dung (để biết sửa ở đâu)
- `noi-dung/benh/` — mỗi bệnh một file.
- `noi-dung/protocol/` — 14 protocol (P1–P14).
- `noi-dung/chuoi-xung/` — 24 chuỗi xung.
- `noi-dung/tham-khao/` — giá trị bình thường, kiểu LGE, dày thất trái, đường kính động mạch chủ…
- `noi-dung/chi-dinh.js` — danh sách chỉ định cho công cụ chọn protocol.
- `hinh/` — ảnh minh họa.
Chi tiết kỹ thuật nằm trong `CLAUDE.md`.
