/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P6",
  ten: "Bệnh cơ tim phì đại",
  chiDinhNgan: "HCM, dày thất trái chưa rõ nguyên nhân, tắc nghẽn đường ra",
  thoiGian: "khoảng 40–50 phút",
  tuKhoa: ["HCM", "LVH", "dày thất", "SAM", "LVOT", "hypertrophy"],
  buoc: ["dinh-vi", "cine-lv", "cine-lvot", {"x": "pc-flow", "ghi": "trong và qua LVOT"}, {"x": "t1-native", "tuyChon": true}, {"x": "tagging", "tuyChon": true}, {"x": "ti-scout", "gd": true}, "lge", {"x": "t1-ecv", "tuyChon": true}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 41)
1. Giải phẫu; chức năng thất trái.
2. Cine LVOT (2 mặt cắt trực giao).
3. PC trong mặt phẳng và qua mặt phẳng LVOT.
4. T1 mapping (tùy chọn); tagging 3 lát trục ngắn + 4CH (tùy chọn).
5. LGE.

## Báo cáo (S1, tr. 41)
1. Kích thước, khối cơ (chỉ số hóa BSA), chức năng: EDV, ESV, SV, EF, khối cơ.
2. Độ dày và chức năng từng vùng; độ dày thành lớn nhất (đo trên trục ngắn cuối tâm trương).
3. Tắc nghẽn đường ra lúc nghỉ; SAM.
4. LGE: có/không, vị trí, mức độ (% khối cơ nếu định lượng).

## Mẹo
- Đo độ dày thành trên trục ngắn, vuông góc thành, không tính bè cơ thất phải và dải cơ.
- Thành trước bên và mỏm dễ bị bỏ sót trên siêu âm; kiểm tra kỹ trên MRI.
- Hở hai lá và bất thường bộ máy van (cơ nhú, lá van dài).
`,
});
