/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "crt",
  ten: "Đánh giá trước tái đồng bộ tim (CRT)",
  tenEn: "CMR before cardiac resynchronization therapy",
  vietTat: ["CRT"],
  nhom: "dac-biet",
  thuTu: 3,
  tuKhoa: ["tái đồng bộ", "CRT", "dây điện cực thất trái", "LV lead", "sẹo thành bên", "block nhánh trái", "dyssynchrony"],
  moTaNgan: "Sẹo tại vị trí đặt điện cực thất trái và gánh nặng sẹo dự báo không đáp ứng, tử vong.",
  protocol: ["P1"],
  thoiGian: "35–45 phút",
  dauHieu: ["Đặt điện cực thất trái **trên sẹo** (nhất là xuyên thành) → tăng tử vong tim mạch > 6 lần", "Gánh nặng sẹo lớn: không đáp ứng CRT", "DCM có **xơ hóa giữa thành**: nguy cơ tử vong tim mạch và đột tử cao dù có CRT", "Sẹo xuyên thành 26–75%: dự báo nhanh thất gây được"],
  dau: ["lge-duoi-noi-mac", "lge-xuyen-thanh", "lge-giua-thanh", "giam-ef", "gian-that-trai"],
  tomTat: {"lamSang": "Suy tim EF thấp, QRS rộng (block nhánh trái)", "hinhThai": "Giãn thất trái, EF giảm", "lge": "Vị trí, mức xuyên thành sẹo", "mapping": "—", "phanBiet": "—"},
  nguon: ["S2, tr. 191, 375–386 (CMR in CRT)"],
  hinh: [{"src": "hinh/crt/s2-191-0.jpg", "chuThich": "Tỉ lệ đáp ứng CRT 6 tháng theo vùng tạo nhịp và có/không sẹo tại vị trí tạo nhịp.", "nguon": "S2, tr. 191"}],
  noiDung: `
## Tổng quan
CRT giảm tử vong ở suy tim EF thấp có QRS rộng; khoảng 30% không đáp ứng. Lợi ích rõ khi QRS ≥ 140 ms, ít chắc chắn khi 120–140 ms, không có khi QRS < 120 ms dù có mất đồng bộ cơ học (S2, tr. 375–377).

## Vai trò của MRI (S2, tr. 377–381)
- **Mất đồng bộ cơ học:** nhiều chỉ số nghiên cứu (tagging, strain) nhưng chưa được xác nhận để chọn bệnh nhân.
- **Sẹo (LGE):** gánh nặng sẹo cao ở người không đáp ứng; vùng đặt điện cực không có sẹo đáp ứng tốt nhất (S2, tr. 191).
- **Vị trí điện cực thất trái:** đặt trên sẹo có nguy cơ tử vong tim mạch cao hơn > 6 lần so với trên cơ tim sống; sẹo xuyên thành xấu hơn sẹo dưới nội mạc.
- **DCM có xơ hóa giữa thành:** tăng 18,5 lần nguy cơ tử vong tim mạch khi đặt CRT-P; 15% đột tử trong 8,7 năm → cân nhắc CRT-D.
- **Nguy cơ rối loạn nhịp:** sẹo xuyên thành 26–75% dự báo nhanh thất gây được, độc lập với EF.

## Protocol chụp
[P1](#/protocol/P1): cine trục ngắn đủ (EF, thể tích), LGE trục ngắn và trục dài; báo cáo sẹo theo 17 vùng, đặc biệt thành bên và sau bên (vùng thường đặt điện cực qua xoang vành).

## Mẫu kết luận
“EF 22%, EDVi 160 ml/m². LGE xuyên thành 76–100% ở thành dưới bên đoạn đáy – giữa (vùng mạch vành LCx); thành trước bên không sẹo. Kết luận: tránh đặt điện cực thất trái ở thành dưới bên; thành trước bên là vị trí phù hợp hơn.”
`,
});
