/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P8",
  ten: "Màng ngoài tim",
  chiDinhNgan: "Viêm màng ngoài tim, co thắt, tràn dịch, khối/nang màng ngoài tim",
  thoiGian: "khoảng 35–45 phút",
  tuKhoa: ["pericardium", "màng ngoài tim", "constrictive", "effusion", "tràn dịch", "co thắt"],
  buoc: ["dinh-vi", {"x": "t1-bb", "ghi": "đo độ dày"}, {"x": "t2-stir", "ghi": "hoặc T2 BB"}, "cine-lv", {"x": "cine-rt", "ghi": "thở sâu, SA + 4CH"}, {"x": "tagging", "tuyChon": true}, {"x": "ti-scout", "gd": true}, {"x": "lge", "ghi": "tim + màng ngoài tim"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 67–70)
1. Giải phẫu gồm T1 và T2 (black blood) — đo độ dày màng ngoài tim (bình thường < 3 mm), tính chất dịch.
2. Chức năng thất trái, thất phải.
3. Cine real-time thở sâu: nhiều lát trục ngắn và một 4CH (vách nảy, lệch vách khi hít vào).
4. Tiêm Gd → LGE: tim và lá màng ngoài tim (viêm).
5. Tràn dịch có khối hoặc nghi ung thư: thêm [protocol khối u](#/protocol/P9).

## Báo cáo
1. Độ dày màng ngoài tim (≥ 3 mm là dày); vị trí dày khu trú.
2. Tràn dịch: có/không, lượng, phân bố, tính chất (dịch thấm/dịch tiết/máu/dưỡng chấp).
3. Kích thước, chức năng; vận động vách khi thở thường và khi thở sâu.
4. Xẹp nhĩ/thất thì tâm trương.
5. LGE ở thất trái, thất phải và màng ngoài tim (S1, tr. 67–70).
`,
});
