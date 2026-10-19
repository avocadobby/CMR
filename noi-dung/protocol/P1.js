/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P1",
  ten: "Chức năng + LGE cơ bản",
  chiDinhNgan: "Suy tim chưa rõ nguyên nhân, bệnh cơ tim giãn, đánh giá xơ hóa",
  thoiGian: "khoảng 30–40 phút",
  tuKhoa: ["basic", "cơ bản", "DCM", "suy tim", "heart failure"],
  buoc: ["dinh-vi", {"x": "t1-bb", "tuyChon": true, "ghi": "giải phẫu"}, "cine-lv", {"x": "cine-rv", "tuyChon": true}, {"x": "t2-stir", "tuyChon": true}, {"x": "t1-native", "tuyChon": true}, {"x": "t1-ecv", "gd": true, "tuyChon": true, "ghi": "≥ 15 phút"}, "ti-scout", {"x": "lge", "ghi": "≥ 10 phút"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự và thời điểm
1. Định vị, mặt cắt chuẩn; ảnh giải phẫu nếu cần.
2. Cine thất trái (2CH, 4CH, 3CH, chồng lát trục ngắn); cine thất phải khi nghi bệnh thất phải.
3. Tùy chỉ định: T2/STIR (phù), T1 native trước tiêm.
4. Tiêm Gd 0,1–0,2 mmol/kg. Có thể chụp thêm cine trong lúc chờ để tiết kiệm thời gian.
5. TI scout khoảng 10 phút, sau đó LGE trục ngắn + 3 trục dài; T1 sau tiêm ≥ 15 phút nếu tính ECV (S1, tr. 17, 24, 39).

## Báo cáo (S1, tr. 39)
- Kích thước (chỉ số hóa theo BSA) và chức năng: thất trái EDV, ESV, SV, EF, đường kính cuối tâm trương; thất phải EDV, ESV, SV, EF.
- Rối loạn vận động vùng; hở van.
- Có/không, vị trí, kiểu và mức độ LGE.

## Phương án rút gọn
Không tiêm thuốc được: cine + T2 + T1 native. Nín thở kém: cine real-time, LGE single-shot (S1, tr. 12; S2, tr. 122).
`,
});
