/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P2",
  ten: "Nhồi máu cơ tim cấp",
  chiDinhNgan: "Sau nhồi máu cấp: kích thước nhồi máu, MVO, vùng nguy cơ, huyết khối; phân biệt MINOCA",
  thoiGian: "khoảng 40–45 phút",
  tuKhoa: ["STEMI", "NSTEMI", "acute MI", "MVO", "AMI", "nhồi máu cấp"],
  buoc: ["dinh-vi", "cine-lv", "t2-stir", {"x": "t2-map", "tuyChon": true}, {"x": "t1-native", "tuyChon": true}, {"x": "ege", "gd": true, "ghi": "1–3 phút, TI > 400 ms"}, "ti-scout", {"x": "lge", "ghi": "≥ 10 phút"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 35)
1. Giải phẫu, chức năng thất trái (và thất phải).
2. Phù: T2/STIR — **phải chụp trước thuốc**; T2 mapping nếu có.
3. Tiêm Gd → EGE 1–3 phút (TI > 400 ms) tìm MVO và huyết khối.
4. LGE ≥ 10 phút.

## Báo cáo
1. Kích thước và chức năng (chỉ số hóa BSA): thất trái và thất phải EDV, ESV, SV, EF; rối loạn vận động vùng.
2. Phù (= vùng nguy cơ).
3. Có/không và mức xuyên thành của sẹo/hoại tử.
4. Có/không và mức độ tắc nghẽn vi mạch (MVO).
5. Huyết khối thất trái (trên EGE) (S1, tr. 35).

## Mẹo
- MVO rõ nhất trên EGE với TI > 400 ms (S1, tr. 35).
- Nếu khó phân biệt máu với LGE dưới nội mạc, đối chiếu cine (S1, tr. 35).
- Thời điểm chụp thường 2–7 ngày sau nhồi máu; T2 giúp phân biệt cấp và cũ.
`,
});
