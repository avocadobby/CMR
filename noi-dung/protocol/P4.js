/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P4",
  ten: "Gắng sức dobutamine",
  chiDinhNgan: "Sống còn cơ tim, thiếu máu khi chống chỉ định thuốc giãn mạch; bất thường gốc mạch vành",
  thoiGian: "khoảng 45–60 phút",
  tuKhoa: ["dobutamine", "DSMR", "viability", "sống còn", "hibernation"],
  buoc: ["dinh-vi", {"x": "cine-lv", "ghi": "nghỉ: 3 SA + 2–3 trục dài"}, {"x": "dobutamine", "ghi": "10/20/30/40 µg/kg/ph ± atropine"}, {"x": "tuoi-mau-stress", "tuyChon": true, "gd": true, "ghi": "ở đỉnh gắng sức"}, {"x": "ege", "tuyChon": true}, "ti-scout", "lge"],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).
- Ngừng chẹn beta 24–48 giờ nếu được (theo chỉ định của bác sĩ lâm sàng).
- Trang bị cấp cứu, theo dõi huyết áp mỗi mức, ECG liên tục; có người theo dõi cine trực tiếp.

## Thứ tự (S1, tr. 31)
1. Giải phẫu.
2. Chức năng thất trái lúc nghỉ: 3 lát trục ngắn (“3 trong 5”), 2–3 trục dài.
3. Dobutamine mỗi 3 phút: 10 / 20 / 30 / 40 µg/kg/phút; nhịp đích = 0,85 × (220 − tuổi); atropine 0,5 mg × 2 nếu cần. Lặp lại cine ở mỗi mức.
4. LGE.

## Dừng khi
Rối loạn vận động vùng mới, tác dụng phụ nặng, hoặc đạt nhịp đích.

## Báo cáo (S1, tr. 31)
1. Kích thước, chức năng, vận động vùng 17 vùng: cải thiện khi liều thấp (= còn sống); cải thiện rồi xấu đi khi liều cao (đáp ứng hai pha = thiếu máu).
2. Sẹo và mức xuyên thành.
3. Tóm tắt: chức năng lúc nghỉ, dự trữ co bóp, chỉ số vận động thành, thiếu máu theo vùng mạch vành.
4. Nhận xét hở van có nặng lên không.
`,
});
