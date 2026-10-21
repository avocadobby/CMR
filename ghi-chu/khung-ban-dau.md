# Khung web tra cứu protocol MRI tim theo bệnh

Oct 18, 2026 · @Hiếu NHM

## 1. Mục tiêu và phạm vi

Trang web giúp chọn đúng protocol MRI tim cho từng bệnh trong vài giây, kèm thông tin lâm sàng, hình ảnh và chẩn đoán phân biệt để tra cứu nhanh tại máy chụp hoặc khi đọc phim.

- **Người dùng chính:** bác sĩ chẩn đoán hình ảnh, kỹ thuật viên MRI, bác sĩ tim mạch, học viên nội trú.
- **Bối cảnh dùng:** trước khi chụp (chọn protocol, chuẩn bị bệnh nhân), trong khi chụp (thứ tự chuỗi xung, thông số), khi đọc kết quả (dấu hiệu, chẩn đoán phân biệt, mẫu kết luận).
- **Nguồn nội dung:** 2 quyển sách MRI tim của bạn (mỗi mục ghi trích dẫn sách + trang), bổ sung khuyến cáo SCMR protocol và tiêu chuẩn chẩn đoán (Lake Louise 2018, Task Force ARVC/Padua...) nếu bạn muốn.
- **Ngôn ngữ:** tiếng Việt, giữ thuật ngữ tiếng Anh trong ngoặc (ví dụ: ngấm thuốc muộn – LGE).

> Cần bạn xác nhận: tên 2 quyển sách. Đã chốt: web chỉ dùng nội bộ, được dùng ảnh và trích nguyên văn từ sách (vẫn ghi nguồn và trang); ảnh ca bệnh thật phải xóa thông tin bệnh nhân.

## 2. Sơ đồ trang

Web có 6 khu vực chính; trang bệnh là trung tâm, liên kết hai chiều với protocol, chuỗi xung và chẩn đoán phân biệt.

1. **Trang chủ** — ô tìm kiếm lớn, nút "Chọn protocol theo chỉ định", lưới các nhóm bệnh, mục xem gần đây.
2. **Tra cứu theo bệnh** — danh sách theo nhóm (mục 3) → trang chi tiết từng bệnh (mục 4).
3. **Protocol** — các protocol chuẩn (mục 5), mỗi protocol ghép từ các module chuỗi xung.
4. **Thư viện chuỗi xung** — cine bSSFP, T2 STIR, mapping T1/T2/ECV, LGE, perfusion, flow, MRA... giải thích nguyên lý, thông số, lỗi ảnh giả (artifact).
5. **Công cụ** — wizard chọn protocol, so sánh bệnh, bảng giá trị bình thường, tính toán (ECV, khối cơ, Qp/Qs...).
6. **Tham khảo** — tiêu chuẩn chẩn đoán, mẫu kết luận, thuật ngữ Anh–Việt, tài liệu nguồn.

**Điều hướng:** thanh menu trên cùng + ô tìm kiếm luôn hiển thị; trong trang bệnh có mục lục bên trái (nhảy nhanh tới từng phần).

## 3. Danh mục nhóm bệnh

Đề xuất 11 nhóm, khoảng 45 bệnh; bạn thêm/bớt theo nội dung 2 quyển sách. Cột "Protocol gợi ý" tham chiếu mã ở mục 5.

| Nhóm | Bệnh / chỉ định | Protocol gợi ý |
| --- | --- | --- |
| 1. Bệnh tim thiếu máu cục bộ | NMCT cấp, NMCT cũ, đánh giá sống còn cơ tim (viability), thiếu máu cơ tim (stress perfusion), MINOCA, biến chứng NMCT (huyết khối, phình, thông liên thất) | P2, P3, P4 |
| 2. Bệnh cơ tim | Cơ tim phì đại (HCM), cơ tim giãn (DCM), ARVC, cơ tim không lèn chặt (LVNC), cơ tim hạn chế, Takotsubo, cơ tim chu sinh | P1, P6 |
| 3. Viêm cơ tim và bệnh hệ thống | Viêm cơ tim cấp/mạn, sarcoidosis tim, amyloidosis tim, Fabry, quá tải sắt (thalassemia), xơ cứng bì/lupus, độc tính hóa trị | P5, P6, P7 |
| 4. Bệnh màng ngoài tim | Viêm màng ngoài tim, tràn dịch, viêm co thắt, nang màng ngoài tim, thiếu màng ngoài tim | P8 |
| 5. Khối u và khối trong tim | Huyết khối, myxoma, u lành khác (lipoma, fibroma, papillary fibroelastoma), u ác nguyên phát, di căn, giả u | P9 |
| 6. Bệnh van tim | Hở/hẹp van động mạch chủ, hở/hẹp van hai lá, hở van ba lá, van động mạch phổi | P10 |
| 7. Tim bẩm sinh | Tứ chứng Fallot sau mổ, thông liên nhĩ/thất, còn ống động mạch, hẹp eo ĐMC, chuyển vị đại động mạch, bất thường hồi lưu tĩnh mạch phổi, Fontan | P11 |
| 8. Động mạch chủ và mạch máu lớn | Phình/bóc tách ĐMC, van ĐMC hai lá van, Marfan, viêm động mạch Takayasu | P12 |
| 9. Tăng áp phổi và tim phải | Tăng áp động mạch phổi, đánh giá thất phải | P10, P11 |
| 10. Rối loạn nhịp | Đánh giá nguyên nhân rối loạn nhịp thất, ngừng tim được cứu sống, trước triệt đốt rung nhĩ (tĩnh mạch phổi) | P1, P5 |
| 11. Tình huống đặc biệt | Bệnh nhân có thiết bị cấy (máy tạo nhịp, ICD), suy thận, thai kỳ, trẻ em, bệnh nhân không nín thở được | ghi chú điều chỉnh |

## 4. Mẫu trang bệnh

Mỗi bệnh dùng chung một khung 12 mục, để người dùng luôn biết thông tin nằm ở đâu. Mục đánh dấu ★ là bắt buộc; còn lại điền khi sách có.

**Đầu trang (thẻ tóm tắt)**

- Tên bệnh (Việt + Anh), nhóm bệnh, từ khóa/tên gọi khác.
- Protocol khuyến nghị (nút bấm sang trang protocol) + thời gian chụp ước tính + có cần thuốc tương phản/stress không.
- 3–5 dấu hiệu MRI then chốt ("nhìn là nghĩ tới").

**Nội dung chi tiết**

1. ★ **Tổng quan** — định nghĩa, dịch tễ, cơ chế bệnh sinh (ngắn gọn).
2. ★ **Đặc điểm lâm sàng** — triệu chứng, ECG, xét nghiệm (troponin, NT-proBNP...), siêu âm tim, bối cảnh thường gặp.
3. ★ **Chỉ định MRI tim** — câu hỏi lâm sàng mà MRI cần trả lời; mức khuyến cáo nếu có.
4. ★ **Protocol chụp** — các chuỗi xung theo thứ tự, mặt cắt, điểm cần lưu ý riêng cho bệnh này (ví dụ: TI scout khó "null" cơ tim trong amyloid; cine thêm mặt cắt RVOT trong ARVC).
5. ★ **Hình ảnh MRI** — theo từng chuỗi xung:
   - Hình thái và chức năng (cine): kích thước, độ dày, EF, rối loạn vận động.
   - Phù (T2/STIR, T2 mapping).
   - T1 mapping / ECV.
   - Tưới máu (perfusion).
   - Ngấm thuốc muộn (LGE): vị trí, kiểu phân bố (dưới nội mạc, giữa thành, dưới thượng tâm mạc, xuyên thành, lan tỏa).
   - Dòng chảy / mạch máu nếu liên quan.
6. ★ **Tiêu chuẩn chẩn đoán** — ví dụ Lake Louise 2018, tiêu chuẩn Task Force/Padua cho ARVC, ngưỡng độ dày thành HCM.
7. ★ **Chẩn đoán phân biệt** — bảng: bệnh · điểm giống · điểm khác biệt trên MRI · gợi ý lâm sàng (liên kết sang trang bệnh kia).
8. **Tiên lượng và phân tầng nguy cơ** — vai trò của LGE (% khối cơ), giá trị mapping...
9. **Hình ảnh minh họa** — ảnh từng chuỗi xung có chú thích, mũi tên đánh dấu tổn thương.
10. **Bẫy và lỗi thường gặp** — artifact, chẩn đoán nhầm, mẹo kỹ thuật.
11. **Mẫu kết luận** — câu mẫu để copy vào phiếu kết quả (có cả dạng dương tính và âm tính).
12. ★ **Tài liệu tham khảo** — sách 1/sách 2, chương, trang.

> Cần bạn quyết định: có muốn thêm mục "Theo dõi — khi nào chụp lại" và "Điều trị liên quan đến kết quả MRI" không?

## 5. Protocol và module chuỗi xung

Protocol được ghép từ các module dùng chung, theo cách tiếp cận của SCMR; sửa một module thì mọi protocol dùng nó cập nhật theo.

**Module (khối chuỗi xung)**

| Mã | Module | Nội dung chính |
| --- | --- | --- |
| M1 | Định vị + chức năng thất trái | Localizer, cine bSSFP 2/3/4 buồng, trục ngắn toàn bộ thất |
| M2 | Chức năng thất phải | Cine trục ngắn, RV 2 buồng, RVOT, trục ngang |
| M3 | Mô học không thuốc | T2/STIR, T2 mapping, T1 mapping native |
| M4 | Tưới máu stress/nghỉ | Thuốc stress (adenosine/regadenoson), first-pass perfusion |
| M5 | Ngấm thuốc muộn | TI scout, LGE (PSIR) trục ngắn + trục dài, T1 mapping sau tiêm → ECV |
| M6 | Ngấm sớm | EGE, đánh giá huyết khối (TI dài) |
| M7 | Dòng chảy | Phase-contrast qua van/mạch máu, Qp/Qs |
| M8 | Mạch máu | MRA có thuốc / không thuốc (3D whole-heart) |
| M9 | Mô học khối u | T1/T2 có/không xóa mỡ, perfusion khối, EGE/LGE |
| M10 | T2\* | Định lượng sắt cơ tim và gan |
| M11 | Màng ngoài tim | Cine thời gian thực (real-time) khi thở, tagging |

**Protocol chuẩn**

| Mã | Protocol | Module | Thời gian ước tính |
| --- | --- | --- | --- |
| P1 | Chức năng + LGE cơ bản | M1, M5 | điền |
| P2 | Thiếu máu cục bộ cấp/NMCT | M1, M3, M6, M5 | điền |
| P3 | Stress perfusion | M1, M4, M5 | điền |
| P4 | Sống còn cơ tim | M1, M5 | điền |
| P5 | Viêm cơ tim / bệnh thâm nhiễm | M1, M3, M6, M5 | điền |
| P6 | Bệnh cơ tim | M1, M2, M3, M5 | điền |
| P7 | Quá tải sắt | M1, M10 | điền |
| P8 | Màng ngoài tim | M1, M11, M3, M5 | điền |
| P9 | Khối u tim | M1, M9, M6, M5 | điền |
| P10 | Van tim | M1, M2, M7 | điền |
| P11 | Tim bẩm sinh | M1, M2, M7, M8, M5 | điền |
| P12 | Động mạch chủ | M1, M7, M8 | điền |

**Mỗi trang protocol gồm:** chỉ định · chuẩn bị bệnh nhân (đường truyền, ECG, chống chỉ định thuốc stress, nhịn caffeine) · thứ tự chuỗi xung có thời điểm tiêm thuốc · thông số tham khảo (1.5T / 3T) · liều thuốc tương phản · phương án rút gọn khi bệnh nhân không hợp tác · checklist cho kỹ thuật viên.

> Cần bạn cung cấp: thông số máy (hãng, 1.5T hay 3T) nếu muốn ghi thông số cụ thể.

## 6. Công cụ tra cứu

**Wizard chọn protocol (3 bước)**

1. Chọn chỉ định/câu hỏi lâm sàng (ví dụ: đau ngực + troponin tăng, mạch vành bình thường) hoặc chọn bệnh nghi ngờ.
2. Trả lời vài câu điều kiện: chức năng thận (eGFR), có thiết bị cấy, có thể nín thở, nhịp tim đều không, có chống chỉ định thuốc stress.
3. Kết quả: protocol đề xuất + các module thêm/bớt + lưu ý an toàn → nút mở trang protocol hoặc in checklist.

**Tìm kiếm** — tìm theo tên bệnh (Việt/Anh/viết tắt), theo dấu hiệu hình ảnh (ví dụ: "LGE giữa thành", "ECV tăng"), theo chuỗi xung.

**Tra ngược từ dấu hiệu hình ảnh** — chọn kiểu phân bố LGE / bất thường mapping → danh sách bệnh phù hợp. Đây là công cụ hữu ích nhất khi đọc phim.

**So sánh bệnh** — chọn 2–3 bệnh, hiển thị cạnh nhau (ví dụ: HCM vs amyloid vs Fabry; viêm cơ tim vs NMCT).

**Bảng giá trị bình thường** — thể tích, EF, khối cơ theo giới/tuổi; ngưỡng T1, T2, ECV (ghi rõ phụ thuộc máy và chuỗi xung).

**Máy tính nhỏ** — ECV từ T1 + hematocrit, Qp/Qs, phân suất hở van.

## 7. Quản lý tài liệu tham khảo

Web nhận thêm bao nhiêu tài liệu cũng được; mỗi tài liệu có một mã ngắn và mọi thông tin đều ghi nguồn theo mã + trang.

| Mã | Tài liệu | Loại |
| --- | --- | --- |
| S1 | Sách MRI tim thứ nhất (điền tên) | Sách |
| S2 | Sách MRI tim thứ hai (điền tên) | Sách |
| G1 | SCMR Standardized Protocols | Guideline |
| G2 | Tiêu chuẩn Lake Louise 2018 (viêm cơ tim) | Guideline |
| B1… | Bài báo thêm sau | Bài báo |

- File gốc (PDF) để trong thư mục `tai-lieu/`; danh mục mã nằm trong một file riêng.
- Ghi nguồn trong trang bệnh dạng "(S1, tr. 245)"; mục Tài liệu tham khảo cuối trang liệt kê đầy đủ.
- Khi các nguồn mâu thuẫn: ghi cả hai kèm năm xuất bản, đánh dấu nguồn mới hơn (chờ bạn xác nhận).

## 8. Cách triển khai (đã chốt)

Web làm cho người mới bắt đầu: sửa bằng yêu cầu tiếng Việt qua Claude Code trong VS Code, không phải viết code.

- Site tĩnh, không cần cài đặt: bấm đúp `index.html` là chạy, dùng được không cần internet.
- Mỗi bệnh, mỗi protocol là một file nội dung riêng theo khung ở mục 4–5.
- File `CLAUDE.md` ghi quy tắc dự án (khung trang bệnh, mã protocol, cách ghi nguồn, web nội bộ) để Claude Code luôn làm đúng chuẩn.
- File `HUONG-DAN.md` liệt kê câu yêu cầu mẫu.
- Dùng Git để lưu phiên bản, sửa hỏng thì quay lại bản trước.
- Chia sẻ trong khoa bằng cách chép thư mục (USB, ổ mạng, Google Drive); muốn dùng trên điện thoại thì đưa lên Netlify có mật khẩu (tính sau).

## 9. Giao diện và việc cần quyết định

**Giao diện đề xuất**

- Dùng tốt trên điện thoại/máy tính bảng (tra cứu tại phòng máy), có chế độ tối cho phòng đọc phim.
- Mã màu theo nhóm bệnh; nhãn màu cho chuỗi xung (cine, T2, mapping, LGE...).
- Sơ đồ 17 vùng AHA tương tác để minh họa vị trí LGE.
- Nút "In / xuất PDF" cho trang protocol và checklist.

**Cách làm nội dung**

- Giai đoạn 1: khung web + 5–8 bệnh hay gặp làm mẫu (ví dụ NMCT, viêm cơ tim, HCM, DCM, amyloid).
- Giai đoạn 2: bổ sung toàn bộ danh mục từ 2 quyển sách.
- Giai đoạn 3: hình ảnh minh họa, công cụ tra ngược và máy tính.

**Câu hỏi cho bạn**

- [ ] Tên 2 quyển sách; bạn sẽ gửi file (PDF) để tôi trích nội dung không?
- [ ] Danh mục bệnh ở mục 3: thêm/bớt bệnh nào?
- [ ] Các mục trong mẫu trang bệnh (mục 4) đã đủ chưa?
- [ ] Có ghi thông số máy cụ thể không (hãng, 1.5T/3T)?
- [ ] Hình minh họa lấy từ sách, ảnh ca bệnh của khoa, hay sơ đồ vẽ lại?
- [ ] Đã chốt: web dùng nội bộ, chạy trên máy, không cần đưa lên mạng
- [ ] Nhóm 5–8 bệnh nào làm trước?
