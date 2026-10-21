# TIẾP TỤC DỰ ÁN — đọc file này đầu tiên khi mở phiên làm việc mới

Cập nhật: 21/10/2026 (tối) — đã sắp xếp lại giao diện. File này dành cho Claude (hoặc trợ lý AI khác) ở tài khoản mới. Quy tắc kỹ thuật nằm ở `CLAUDE.md`; file này ghi **tiến độ, các quyết định đã chốt và việc còn lại**.

## 1. Tình trạng hiện tại
- Web đã chạy được: bấm đúp `index.html`. Có 55 trang bệnh (10 nhóm), 14 protocol (P1–P14), 24 chuỗi xung, 10 trang tham khảo, 128 hình lấy từ sách, cùng 4 công cụ: chọn protocol theo chỉ định, tra ngược từ dấu hiệu, so sánh bệnh, máy tính.
- Kiểm tra lần cuối (`node cong-cu-noi-bo/kiem-tra.js`) không còn lỗi: không có liên kết hỏng, không thiếu ảnh.
- Thư mục đã dùng Git (nhánh `main`). Commit đầu tiên là "Khởi tạo phiên bản đầu tiên".
- Khung ban đầu (bản thiết kế trước khi làm web) được lưu ở `ghi-chu/khung-ban-dau.md`. Đây là tài liệu lịch sử: nhiều chỗ trong khung đã thay đổi khi làm web thật (xem mục 2).

## 2. Các quyết định người dùng đã chốt
- Web **chỉ dùng nội bộ**. Được dùng ảnh và trích nguyên văn từ sách, luôn ghi nguồn kèm trang.
- Danh mục bệnh lấy theo 2 quyển sách S1 và S2.
- Protocol tập trung vào **các xung cần chụp và lý do chụp**, không đi sâu vào thông số máy.
- Hình chủ yếu lấy từ sách; được tự vẽ thêm sơ đồ.
- Bỏ lớp "module M1–M11" của khung ban đầu: protocol ghép thẳng từ chuỗi xung.
- Repository GitHub phải để **Private** vì có ảnh sách có bản quyền. **Chưa quyết** cách đưa web lên mạng cho đồng nghiệp dùng thử. Các hướng đã bàn:
  - (1) Cloudflare Pages kèm Cloudflare Access, đăng nhập bằng email. Đây là hướng được khuyên dùng.
  - (2) GitHub Pages công khai, nhưng phải gỡ ảnh từ sách.
  - (3) Gửi file zip cho đồng nghiệp.

## 3. Việc cần làm tiếp — góp ý của người dùng (chép từ "note cần chỉnh sửa.txt")
File ghi chú gốc nằm trong thư mục nhưng **không đưa vào Git**, nên danh sách được chép lại đây. Làm xong mục nào thì đánh dấu [x].

**Giao diện / luồng sử dụng**
- [x] Sắp xếp lại theo luồng **trước chụp**: đánh giá lâm sàng, siêu âm tim, men tim → dự đoán bệnh lý nghi ngờ → chọn protocol phù hợp.
- [~] Phần **sau chụp** là bảng bệnh, gồm:
  - Với bệnh lý nghi ngờ thì cần tìm những đặc điểm gì để chẩn đoán.
  - Từ các dấu hiệu hình ảnh, có chẩn đoán phân biệt với bệnh nào không, và dấu hiệu nào giúp phân biệt.
- [x] Trình bày kiểu **mỗi ý một dòng** cho dễ xem.

**Trang bệnh**
- [ ] Thêm hình minh họa các **kiểu ngấm thuốc muộn**: dưới thượng tâm mạc, giữa thành, dưới nội tâm mạc, xuyên thành. Có thể dùng sơ đồ tự vẽ (SVG).

**Protocol**
- [ ] Chỉ cần ghi **protocol chuẩn** cộng thêm **các xung cần thiết** cho từng bệnh.
- [ ] Mỗi xung thêm phải ghi rõ **hướng chụp** (mặt cắt), **trường chụp** (vùng phủ)…
- [ ] Ghi **lý do chụp thêm xung**, tức là xung đó để đánh giá thêm điều gì.

**Công cụ**
- [ ] Tra ngược từ dấu hiệu: chưa đủ "thông minh", cần cải tiến.
- [ ] Chọn protocol theo chỉ định: chưa hợp lý, cần xem lại.
- [x] So sánh bệnh: cùng một mục của các bệnh phải nằm **cùng hàng** để dễ so sánh. Phần protocol chỉ cần chỉ ra **chỗ khác nhau**.
- [x] Máy tính: chọn phép tính nào thì chỉ hiện phép tính đó, không hiện tất cả.
- [ ] Giá trị bình thường: thêm ô **nhập thông tin bệnh nhân** (tuổi, giới, chiều cao, cân nặng…) để web tính ra **ngưỡng bình thường** tương ứng.

Ghi chú 21/10/2026: menu và trang chủ đã theo luồng Trước chụp → Đọc phim; trang bệnh chia 2 tab (Trước chụp / Đọc phim); danh mục bệnh và protocol mỗi mục một dòng; so sánh dạng bảng cùng hàng, xung chung làm mờ; máy tính hiện từng phép. Mục "sau chụp" [~] mới làm phần bố cục (tab Đọc phim); **chưa** viết thêm nội dung "cần tìm đặc điểm gì / dấu hiệu phân biệt" cho từng bệnh. Người dùng chưa xem bản giao diện mới; hỏi họ góp ý trước khi sửa tiếp.

Gợi ý thứ tự làm: so sánh bệnh và máy tính (nhỏ, dễ thấy kết quả) → protocol → luồng trước/sau chụp (thay đổi lớn, nên hỏi lại người dùng bố cục trước khi làm).

## 4. Những điểm còn thiếu sót đã biết
- Một số hình trong sách S2 chưa lấy được, vì khi xóa chữ thừa thì để lại ô trắng trên ảnh: trang PDF 449 (hình 0), 451 (hình 2), 260 (hình 0).
- **Hai file PDF sách hiện không nằm trong thư mục CMR** (kiểm tra ngày 21/10/2026). Muốn lấy thêm hình hoặc đối chiếu trang thì phải hỏi người dùng để chép lại sách vào thư mục gốc hoặc thư mục `tai-lieu/`.
- Máy người dùng **chưa cài Node.js**, nên chưa chạy được công cụ kiểm tra. Đã khuyên người dùng cài bản LTS từ nodejs.org.
- Trợ lý AI người dùng đang dùng trong VS Code có thể không phải Claude Code, nên có thể không tự đọc `CLAUDE.md`. Đầu mỗi phiên, hãy đọc `CLAUDE.md` và file này.

## 5. Về người dùng
- Là bác sĩ chẩn đoán hình ảnh, mới học code. Chỉ ra yêu cầu bằng tiếng Việt, không tự sửa code.
- Trả lời ngắn gọn bằng tiếng Việt: đã sửa gì, mở trang nào để xem. Sau mỗi thay đổi lớn, nhắc người dùng lưu phiên bản (commit).
