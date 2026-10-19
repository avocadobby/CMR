/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P13",
  ten: "Bệnh cơ tim thất phải gây loạn nhịp (ARVC)",
  chiDinhNgan: "Nghi ARVC, nhanh thất dạng block nhánh trái, giãn thất phải",
  thoiGian: "khoảng 45 phút",
  tuKhoa: ["ARVC", "ARVD", "thất phải", "RV", "arrhythmogenic"],
  buoc: ["dinh-vi", "cine-lv", {"x": "cine-rv", "ghi": "ngang 6–8 mm, không khoảng cách + RVOT"}, {"x": "t1-bb", "tuyChon": true, "ghi": "ngang"}, {"x": "t1-bb-fs", "tuyChon": true, "ghi": "ngang"}, {"x": "ti-scout", "gd": true}, {"x": "lge", "ghi": "cùng mặt cắt, null theo thất phải"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 58)
1. Giải phẫu; chức năng thất trái.
2. Chức năng thất phải: chồng lát ngang và RVOT, dày 6–8 mm không khoảng cách.
3. T1 black blood ngang (tùy chọn); T1 black blood xóa mỡ (tùy chọn).
4. LGE cùng hướng cắt; chọn TI xóa nền cho thất phải.

## Báo cáo (S1, tr. 58)
1. Kích thước, khối cơ, chức năng hai thất (cả chức năng dọc); rối loạn vận động vùng thất phải (đường vào, mỏm, đường ra).
2. Bất thường hình thái thất phải (phình, túi nhỏ).
3. Thâm nhiễm mỡ thất phải hoặc thất trái.
4. Có/không và mức độ xơ hóa (LGE), cả thất trái.

## Mẹo
- Tập trung vào thể tích và chức năng thất phải; đối chiếu ngưỡng Task Force 2010 (S1, tr. 58, 60).
- Giãn thất phải: loại trừ luồng thông, bất thường tĩnh mạch phổi (S1, tr. 58).
`,
});
