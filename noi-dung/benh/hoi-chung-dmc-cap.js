/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "hoi-chung-dmc-cap",
  ten: "Bóc tách động mạch chủ và hội chứng động mạch chủ cấp",
  tenEn: "Aortic dissection, intramural haematoma, penetrating aortic ulcer",
  vietTat: ["AAS", "IMH", "PAU"],
  nhom: "mach-mau",
  thuTu: 2,
  tuKhoa: ["bóc tách", "dissection", "Stanford", "lòng giả", "lòng thật", "tụ máu trong thành", "loét xuyên thành", "chấn thương động mạch chủ"],
  moTaNgan: "Vạt nội mạc, lòng thật – lòng giả, nhánh xuất phát từ lòng nào; tụ máu trong thành (T2 cao khi cấp).",
  protocol: ["P12"],
  thoiGian: "30–40 phút",
  dauHieu: ["**Bóc tách:** vạt nội mạc chia lòng thật (nhỏ, dòng nhanh) và lòng giả (lớn, dòng chậm, có thể huyết khối)", "Nhánh xuất phát từ lòng giả → nguy cơ thiếu máu cơ quan", "**Tụ máu trong thành:** dày thành hình liềm/vòng, không có lỗ vào, không dòng chảy; T2 cao gợi ý cấp", "**Loét xuyên thành:** ổ loét qua mảng xơ vữa vào lớp áo giữa"],
  dau: ["gian-dmc"],
  tomTat: {"lamSang": "Đau ngực/lưng dữ dội cấp; tăng huyết áp, Marfan, van hai mảnh; cấp cứu thường dùng CT", "hinhThai": "Vạt, hai lòng; dày thành", "lge": "—", "mapping": "T2 thành mạch", "phanBiet": "Giả vạt do ảnh giả dòng chảy/chuyển động"},
  nguon: ["S1, tr. 84", "S2, tr. 420–424"],
  hinh: [{"src": "hinh/hoi-chung-dmc-cap/s1-84.jpg", "chuThich": "Bóc tách type B mạn, nam 60 tuổi: vạt từ quai xuống ĐMC xuống trên T1 black blood; lòng giả lớn, huyết khối một phần; dòng nhanh ở lòng thật trên PC.", "nguon": "S1, tr. 84"}, {"src": "hinh/hoi-chung-dmc-cap/s2-422.jpg", "chuThich": "Bóc tách mạn có lòng giả huyết khối một phần sau thay ĐMC lên: cine tâm trương/tâm thu và PC (dòng thuận ở lòng thật, ứ ở lòng giả).", "nguon": "S2, tr. 422"}, {"src": "hinh/hoi-chung-dmc-cap/s2-423-1.jpg", "chuThich": "Tụ máu trong thành: dày thành hình liềm trên SSFP, tín hiệu cao trên T2 TSE (hội chứng ĐMC cấp).", "nguon": "S2, tr. 423"}],
  noiDung: `
## Tổng quan
Hội chứng động mạch chủ cấp gồm bóc tách (rách nội mạc, tách các lớp thành), tụ máu trong thành (IMH) và loét xuyên thành do xơ vữa (PAU, khoảng 5% hội chứng ĐMC cấp). Yếu tố thuận lợi: tăng huyết áp, Marfan, Loeys–Dietz, Ehlers–Danlos, Turner (S2, tr. 420–423).

## Đặc điểm lâm sàng
Đau ngực/lưng dữ dội; cấp cứu thường chụp CT. MRI dùng cho bệnh nhân ổn định, theo dõi bóc tách mạn, sau phẫu thuật/can thiệp, hoặc khi không dùng được thuốc cản quang i-ốt.

## Protocol chụp
[P12](#/protocol/P12) (S2, tr. 421): ảnh black blood và bright blood single-shot nhanh để xem hình thái, vạt; cine (vạt di động); PC (dòng trong lòng thật/giả, hở chủ); MRA (lan rộng, nhánh).

## Hình ảnh MRI
- **Bóc tách** (S1, tr. 84; S2, tr. 421–422): lòng giả thường lớn hơn, dòng chậm/ứ, có thể huyết khối một phần; lòng thật nhỏ, đập theo nhịp, tín hiệu cao trên cine, dòng nhanh trên PC. Xác định lỗ vào, lỗ ra, nhánh từ lòng nào (thận teo, giảm tín hiệu khi thiếu máu).
- **Tụ máu trong thành** (S2, tr. 422–423): dày thành hình liềm hoặc vòng, không lỗ vào, không dòng trong thành; tín hiệu T1/T2 cao gợi ý giai đoạn cấp (methemoglobin).
- **Loét xuyên thành:** ổ lồi qua mảng xơ vữa, kèm tụ máu khu trú.
- Chấn thương: giả phình sau chấn thương ở eo (S2, tr. 424).

## Phân loại
Stanford A: có ĐMC lên (phẫu thuật cấp cứu); Stanford B: chỉ ĐMC xuống sau động mạch dưới đòn trái.

## Mẫu kết luận
“Bóc tách ĐMC type B mạn: vạt từ ngay sau ĐM dưới đòn trái tới chỗ chia đôi; lòng giả lớn, huyết khối một phần ở đoạn ngực; ĐM thận trái xuất phát từ lòng giả. ĐMC xuống tối đa 44 mm (tăng 2 mm/năm).”
`,
});
