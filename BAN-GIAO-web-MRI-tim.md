# BÀN GIAO DỰ ÁN: Web tra cứu protocol MRI tim theo bệnh

> Cách dùng: ở nick Claude mới, mở cuộc trò chuyện mới, đính kèm file này (và PDF 2 quyển sách nếu có), rồi gõ:
> "Đây là file bàn giao dự án web tra cứu MRI tim tôi đã làm ở nick khác. Hãy đọc kỹ và tiếp tục từ phần 'Bước tiếp theo'."

---

## A. Những gì đã chốt

**Người dùng / bối cảnh**
- Tôi là người mới bắt đầu học code. Tôi muốn sửa web bằng cách gõ yêu cầu tiếng Việt (qua Claude Code trong VS Code), không phải tự viết code.
- Web chỉ dùng nội bộ cho công việc, để tiện tra cứu. Được dùng ảnh và trích nguyên văn từ sách (vẫn ghi nguồn + trang). Ảnh ca bệnh thật phải xóa tên, mã bệnh nhân, ngày chụp.

**Cách triển khai kỹ thuật**
- Site tĩnh, không cần cài đặt: bấm đúp `index.html` là chạy, dùng được không cần internet (không dùng npm/build/server).
- Nội dung tách khỏi code: mỗi bệnh, mỗi protocol là một file nội dung riêng, theo đúng khung ở mục C4–C5. Thêm bệnh = thêm một file.
- File `CLAUDE.md` ghi quy tắc dự án (khung trang bệnh, mã protocol P1–P12 và module M1–M11, cách ghi nguồn, web nội bộ, tiếng Việt kèm thuật ngữ Anh trong ngoặc) để Claude Code luôn làm đúng chuẩn.
- File `HUONG-DAN.md` liệt kê câu yêu cầu mẫu bằng tiếng Việt.
- Dùng Git để lưu phiên bản.
- Chia sẻ trong khoa bằng cách chép thư mục (USB, ổ mạng, Google Drive). Dùng trên điện thoại: đưa lên Netlify có mật khẩu (tính sau).
- Thư mục `tai-lieu/` chứa PDF tài liệu tham khảo để Claude Code đọc.

**Quy trình làm việc**
1. Chốt khung nội dung (phần C) → 2. Claude dựng project (gửi .zip hoặc ghi thẳng vào thư mục đã kết nối qua Claude desktop app) → 3. Mở thư mục trong VS Code, tiếp tục sửa bằng yêu cầu tiếng Việt qua Claude Code.

## B. Bước tiếp theo
- [ ] Tôi hoàn thiện khung (phần C), trả lời các câu hỏi ở mục C9.
- [ ] Gửi PDF 2 quyển sách để viết sẵn 5–8 bệnh mẫu.
- [ ] Claude dựng project (giai đoạn 1).

---

## C. Khung web (bản đã thống nhất)

### 1. Mục tiêu và phạm vi

Trang web giúp chọn đúng protocol MRI tim cho từng bệnh trong vài giây, kèm thông tin lâm sàng, hình ảnh và chẩn đoán phân biệt để tra cứu nhanh tại máy chụp hoặc khi đọc phim.

- **Người dùng chính:** bác sĩ chẩn đoán hình ảnh, kỹ thuật viên MRI, bác sĩ tim mạch, học viên nội trú.
- **Bối cảnh dùng:** trước khi chụp (chọn protocol, chuẩn bị bệnh nhân), trong khi chụp (thứ tự chuỗi xung, thông số), khi đọc kết quả (dấu hiệu, chẩn đoán phân biệt, mẫu kết luận).
- **Nguồn nội dung:** 2 quyển sách MRI tim (mỗi mục ghi trích dẫn sách + trang), bổ sung khuyến cáo SCMR và tiêu chuẩn chẩn đoán (Lake Louise 2018, Task Force ARVC/Padua...).
- **Ngôn ngữ:** tiếng Việt, giữ thuật ngữ tiếng Anh trong ngoặc (ví dụ: ngấm thuốc muộn – LGE).

> Cần xác nhận: tên 2 quyển sách. Đã chốt: web chỉ dùng nội bộ.

### 2. Sơ đồ trang

1. **Trang chủ** — ô tìm kiếm lớn, nút "Chọn protocol theo chỉ định", lưới các nhóm bệnh, mục xem gần đây.
2. **Tra cứu theo bệnh** — danh sách theo nhóm (mục 3) → trang chi tiết từng bệnh (mục 4).
3. **Protocol** — các protocol chuẩn (mục 5), ghép từ các module chuỗi xung.
4. **Thư viện chuỗi xung** — cine bSSFP, T2 STIR, mapping T1/T2/ECV, LGE, perfusion, flow, MRA... nguyên lý, thông số, artifact.
5. **Công cụ** — wizard chọn protocol, so sánh bệnh, bảng giá trị bình thường, tính toán (ECV, khối cơ, Qp/Qs...).
6. **Tham khảo** — tiêu chuẩn chẩn đoán, mẫu kết luận, thuật ngữ Anh–Việt, tài liệu nguồn.

**Điều hướng:** menu trên cùng + ô tìm kiếm luôn hiển thị; trang bệnh có mục lục bên trái.

### 3. Danh mục nhóm bệnh

| Nhóm | Bệnh / chỉ định | Protocol gợi ý |
| --- | --- | --- |
| 1. Bệnh tim thiếu máu cục bộ | NMCT cấp, NMCT cũ, sống còn cơ tim (viability), thiếu máu cơ tim (stress perfusion), MINOCA, biến chứng NMCT (huyết khối, phình, thông liên thất) | P2, P3, P4 |
| 2. Bệnh cơ tim | HCM, DCM, ARVC, LVNC, cơ tim hạn chế, Takotsubo, cơ tim chu sinh | P1, P6 |
| 3. Viêm cơ tim và bệnh hệ thống | Viêm cơ tim cấp/mạn, sarcoidosis, amyloidosis, Fabry, quá tải sắt (thalassemia), xơ cứng bì/lupus, độc tính hóa trị | P5, P6, P7 |
| 4. Bệnh màng ngoài tim | Viêm màng ngoài tim, tràn dịch, viêm co thắt, nang màng ngoài tim, thiếu màng ngoài tim | P8 |
| 5. Khối u và khối trong tim | Huyết khối, myxoma, u lành khác (lipoma, fibroma, papillary fibroelastoma), u ác nguyên phát, di căn, giả u | P9 |
| 6. Bệnh van tim | Hở/hẹp van ĐMC, hở/hẹp van hai lá, hở van ba lá, van ĐMP | P10 |
| 7. Tim bẩm sinh | Fallot sau mổ, thông liên nhĩ/thất, còn ống ĐM, hẹp eo ĐMC, chuyển vị đại ĐM, bất thường hồi lưu TM phổi, Fontan | P11 |
| 8. ĐMC và mạch máu lớn | Phình/bóc tách ĐMC, van ĐMC hai lá van, Marfan, Takayasu | P12 |
| 9. Tăng áp phổi và tim phải | Tăng áp ĐMP, đánh giá thất phải | P10, P11 |
| 10. Rối loạn nhịp | Nguyên nhân rối loạn nhịp thất, ngừng tim được cứu sống, trước triệt đốt rung nhĩ (TM phổi) | P1, P5 |
| 11. Tình huống đặc biệt | Thiết bị cấy (máy tạo nhịp, ICD), suy thận, thai kỳ, trẻ em, không nín thở được | ghi chú điều chỉnh |

### 4. Mẫu trang bệnh (★ = bắt buộc)

**Đầu trang (thẻ tóm tắt):** tên bệnh (Việt + Anh), nhóm, từ khóa; protocol khuyến nghị (nút sang trang protocol) + thời gian chụp + có cần thuốc tương phản/stress; 3–5 dấu hiệu MRI then chốt.

1. ★ Tổng quan — định nghĩa, dịch tễ, bệnh sinh.
2. ★ Đặc điểm lâm sàng — triệu chứng, ECG, xét nghiệm, siêu âm tim, bối cảnh.
3. ★ Chỉ định MRI tim — câu hỏi lâm sàng, mức khuyến cáo.
4. ★ Protocol chụp — chuỗi xung theo thứ tự, mặt cắt, lưu ý riêng (ví dụ TI scout khó null trong amyloid; thêm RVOT trong ARVC).
5. ★ Hình ảnh MRI — theo chuỗi xung: cine; phù (T2/STIR, T2 mapping); T1 mapping/ECV; perfusion; LGE (vị trí, kiểu phân bố); dòng chảy/mạch máu.
6. ★ Tiêu chuẩn chẩn đoán.
7. ★ Chẩn đoán phân biệt — bảng: bệnh · điểm giống · điểm khác trên MRI · gợi ý lâm sàng (liên kết trang bệnh kia).
8. Tiên lượng và phân tầng nguy cơ.
9. Hình ảnh minh họa có chú thích.
10. Bẫy và lỗi thường gặp.
11. Mẫu kết luận (dương tính và âm tính).
12. ★ Tài liệu tham khảo — mã nguồn, chương, trang.

> Chưa quyết: thêm mục "Theo dõi — khi nào chụp lại" và "Điều trị liên quan kết quả MRI"?

### 5. Protocol và module chuỗi xung

**Module**

| Mã | Module | Nội dung chính |
| --- | --- | --- |
| M1 | Định vị + chức năng thất trái | Localizer, cine bSSFP 2/3/4 buồng, trục ngắn toàn bộ thất |
| M2 | Chức năng thất phải | Cine trục ngắn, RV 2 buồng, RVOT, trục ngang |
| M3 | Mô học không thuốc | T2/STIR, T2 mapping, T1 mapping native |
| M4 | Tưới máu stress/nghỉ | Adenosine/regadenoson, first-pass perfusion |
| M5 | Ngấm thuốc muộn | TI scout, LGE (PSIR) trục ngắn + dài, T1 sau tiêm → ECV |
| M6 | Ngấm sớm | EGE, huyết khối (TI dài) |
| M7 | Dòng chảy | Phase-contrast qua van/mạch máu, Qp/Qs |
| M8 | Mạch máu | MRA có/không thuốc (3D whole-heart) |
| M9 | Mô học khối u | T1/T2 có/không xóa mỡ, perfusion khối, EGE/LGE |
| M10 | T2* | Sắt cơ tim và gan |
| M11 | Màng ngoài tim | Cine real-time khi thở, tagging |

**Protocol chuẩn**

| Mã | Protocol | Module | Thời gian |
| --- | --- | --- | --- |
| P1 | Chức năng + LGE cơ bản | M1, M5 | điền |
| P2 | Thiếu máu cục bộ cấp/NMCT | M1, M3, M6, M5 | điền |
| P3 | Stress perfusion | M1, M4, M5 | điền |
| P4 | Sống còn cơ tim | M1, M5 | điền |
| P5 | Viêm cơ tim / thâm nhiễm | M1, M3, M6, M5 | điền |
| P6 | Bệnh cơ tim | M1, M2, M3, M5 | điền |
| P7 | Quá tải sắt | M1, M10 | điền |
| P8 | Màng ngoài tim | M1, M11, M3, M5 | điền |
| P9 | Khối u tim | M1, M9, M6, M5 | điền |
| P10 | Van tim | M1, M2, M7 | điền |
| P11 | Tim bẩm sinh | M1, M2, M7, M8, M5 | điền |
| P12 | Động mạch chủ | M1, M7, M8 | điền |

**Mỗi trang protocol gồm:** chỉ định · chuẩn bị bệnh nhân (đường truyền, ECG, chống chỉ định thuốc stress, nhịn caffeine) · thứ tự chuỗi xung + thời điểm tiêm thuốc · thông số tham khảo (1.5T/3T) · liều thuốc tương phản · phương án rút gọn · checklist kỹ thuật viên.

### 6. Công cụ tra cứu
- **Wizard chọn protocol (3 bước):** chọn chỉ định/bệnh nghi ngờ → câu hỏi điều kiện (eGFR, thiết bị cấy, nín thở, nhịp đều, chống chỉ định stress) → protocol đề xuất + module thêm/bớt + lưu ý an toàn, in checklist.
- **Tìm kiếm:** theo tên bệnh (Việt/Anh/viết tắt), dấu hiệu hình ảnh, chuỗi xung.
- **Tra ngược từ dấu hiệu hình ảnh:** chọn kiểu LGE / bất thường mapping → danh sách bệnh phù hợp.
- **So sánh bệnh:** 2–3 bệnh cạnh nhau (HCM vs amyloid vs Fabry; viêm cơ tim vs NMCT).
- **Bảng giá trị bình thường:** thể tích, EF, khối cơ theo giới/tuổi; ngưỡng T1, T2, ECV (phụ thuộc máy).
- **Máy tính:** ECV, Qp/Qs, phân suất hở van.

### 7. Quản lý tài liệu tham khảo

| Mã | Tài liệu | Loại |
| --- | --- | --- |
| S1 | Sách MRI tim thứ nhất (điền tên) | Sách |
| S2 | Sách MRI tim thứ hai (điền tên) | Sách |
| G1 | SCMR Standardized Protocols | Guideline |
| G2 | Lake Louise 2018 (viêm cơ tim) | Guideline |
| B1… | Bài báo thêm sau | Bài báo |

- PDF gốc trong `tai-lieu/`; danh mục mã trong một file riêng.
- Ghi nguồn dạng "(S1, tr. 245)"; mục Tài liệu tham khảo cuối trang liệt kê đầy đủ.
- Khi các nguồn mâu thuẫn: ghi cả hai kèm năm xuất bản, đánh dấu nguồn mới hơn (chờ xác nhận).

### 8. Giao diện
- Tốt trên điện thoại/máy tính bảng; có chế độ tối.
- Mã màu theo nhóm bệnh; nhãn màu cho chuỗi xung.
- Sơ đồ 17 vùng AHA tương tác minh họa vị trí LGE.
- Nút "In / xuất PDF" cho protocol và checklist.

**Giai đoạn:** (1) khung web + 5–8 bệnh mẫu (NMCT, viêm cơ tim, HCM, DCM, amyloid) → (2) toàn bộ danh mục từ 2 sách → (3) hình minh họa, tra ngược, máy tính.

### 9. Câu hỏi còn mở
- [ ] Tên 2 quyển sách; gửi PDF để trích nội dung?
- [ ] Danh mục bệnh mục 3: thêm/bớt?
- [ ] Mẫu trang bệnh mục 4 đã đủ chưa?
- [ ] Ghi thông số máy cụ thể không (hãng, 1.5T/3T)?
- [ ] Hình minh họa: từ sách, ảnh ca bệnh của khoa, hay sơ đồ vẽ lại?
- [ ] Nhóm 5–8 bệnh nào làm trước?
- [x] Web dùng nội bộ, chạy trên máy, không cần đưa lên mạng.
