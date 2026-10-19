/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P5",
  ten: "Mô học cơ tim (viêm, thâm nhiễm)",
  chiDinhNgan: "Viêm cơ tim, sarcoidosis, Takotsubo, amyloidosis, Fabry, bệnh hệ thống",
  thoiGian: "khoảng 40–50 phút",
  tuKhoa: ["tissue characterisation", "myocarditis", "viêm cơ tim", "sarcoid", "amyloid", "mapping", "Lake Louise"],
  buoc: ["dinh-vi", "cine-lv", {"x": "cine-rv", "tuyChon": true}, "t2-stir", "t2-map", "t1-native", {"x": "ege", "gd": true, "tuyChon": true}, "ti-scout", "lge", {"x": "t1-ecv", "ghi": "≥ 15 phút"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 65; G2)
1. Giải phẫu, chức năng thất trái (và thất phải).
2. **Trước tiêm:** T2 STIR và/hoặc T2 mapping; T1 native mapping (3 lát trục ngắn + trục dài khi cần).
3. Tiêm Gd; EGE (tùy chọn, tiêu chuẩn Lake Louise 2009).
4. TI scout → LGE trục ngắn + trục dài.
5. T1 sau tiêm ≥ 15 phút và hematocrit để tính ECV.

## Điều chỉnh theo bệnh nghi ngờ
- **Amyloidosis:** khó chọn TI → dùng PSIR; chú ý tín hiệu cơ xương; đo vách liên nhĩ, tràn dịch (S1, tr. 43).
- **Fabry:** T1 native vách liên thất là chuỗi quan trọng nhất (S1, tr. 47).
- **Sarcoidosis:** LGE kỹ vách liên thất đáy và thành thất phải; ghi nhận hạch rốn phổi (S1, tr. 51).
- **Takotsubo:** cine đủ trục dài để thấy kiểu phình (S1, tr. 53).

## Báo cáo
1. Kích thước, chức năng, vận động vùng.
2. Phù: có/không, vị trí (T2 / STIR / T2 mapping).
3. LGE: vị trí, kiểu (dưới thượng tâm mạc, giữa thành…), mức độ.
4. Giá trị T1, T2, ECV so với giá trị bình thường của khoa.
5. Tràn dịch / ngấm thuốc màng ngoài tim (S1, tr. 65).
`,
});
