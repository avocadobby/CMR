/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P3",
  ten: "Tưới máu gắng sức thuốc giãn mạch",
  chiDinhNgan: "Đau ngực ổn định, nghi bệnh mạch vành: thiếu máu cảm ứng + sẹo",
  thoiGian: "khoảng 45–60 phút",
  tuKhoa: ["adenosine", "regadenoson", "stress", "ischaemia", "thiếu máu", "CAD"],
  buoc: ["dinh-vi", {"x": "tuoi-mau-stress", "gd": "Thuốc giãn mạch + Gd", "ghi": "chụp thử trước"}, "cine-lv", {"x": "tuoi-mau-nghi", "gd": "Gd lần 2", "tuyChon": true, "ghi": "sau ≥ 10 phút"}, "ti-scout", "lge"],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).
- **Nhịn caffeine** (cà phê, trà, sô-cô-la, nước tăng lực) 12–24 giờ; ngừng dipyridamole; hỏi tiền sử hen, block nhĩ thất.
- Hai đường truyền nếu dùng adenosine (một cho adenosine, một cho Gd), máy đo huyết áp, theo dõi ECG.

## Thứ tự (S1, tr. 28)
1. Giải phẫu.
2. Tưới máu “dummy” không thuốc (kiểm tra vị trí, ảnh giả).
3. Tưới máu **gắng sức**: adenosine 140 µg/kg/phút ≥ 3 phút (hoặc regadenoson 0,4 mg) rồi bolus Gd.
4. Chức năng thất trái (trong lúc chờ).
5. Tưới máu **nghỉ** (tùy chọn).
6. LGE.

## Thuốc và chống chỉ định
- Adenosine 140 µg/kg/phút; tăng 170–210 nếu đáp ứng chưa đủ. Regadenoson 0,4 mg. Dipyridamole 0,56 mg/kg/4 phút.
- Chống chỉ định: dị ứng, block nhĩ thất độ II/III, bệnh phổi tắc nghẽn hồi phục nặng (S1, tr. 28).
- Thuốc đối kháng tác dụng phụ: ngừng truyền adenosine (bán thải vài giây); aminophylline khi cần.

## Báo cáo (S1, tr. 28)
1. Kích thước, chức năng, vận động vùng (17 vùng).
2. Sẹo: có/không, mức xuyên thành ≤ 25%, 26–50%, 51–75%, 76–100%.
3. Khuyết tưới máu gắng sức: có/không, mức xuyên thành, số vùng.
4. Đối chiếu khuyết tưới máu với sẹo.
5. Nhận xét khả năng có lợi khi tái thông (thiếu máu và cơ tim còn sống).
6. Vị trí ảnh giả nếu có.

## Mẹo
- Lách “tắt sáng” (splenic switch-off) gợi ý đủ tác dụng adenosine; regadenoson không gây dấu hiệu này.
- Dobutamine cũng dùng được nhưng gây nhịp nhanh và thiếu máu (S1, tr. 28) — xem [P4](#/protocol/P4).
`,
});
