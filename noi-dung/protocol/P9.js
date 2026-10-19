/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P9",
  ten: "Khối u và khối trong tim",
  chiDinhNgan: "Khối phát hiện trên siêu âm/CT, nghi huyết khối, u, giả u",
  thoiGian: "khoảng 45–60 phút",
  tuKhoa: ["mass", "tumour", "tumor", "khối", "u", "thrombus", "huyết khối", "myxoma"],
  buoc: ["dinh-vi", {"x": "t1-bb", "ghi": "độ phân giải cao"}, {"x": "cine-lv", "ghi": "chuẩn + mặt cắt qua khối"}, {"x": "t1-bb", "ghi": "qua khối, 2 mặt phẳng"}, {"x": "t1-bb-fs", "ghi": "qua khối"}, {"x": "t2-bb", "ghi": "qua khối"}, {"x": "t1-native", "tuyChon": true}, {"x": "tagging", "tuyChon": true}, {"x": "tuoi-mau-nghi", "gd": true, "ghi": "qua khối"}, {"x": "ege", "ghi": "huyết khối"}, "lge"],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 85)
1. Giải phẫu độ phân giải cao.
2. Cine ở mọi mặt cắt chuẩn và các mặt cắt nhắm vào khối.
3. Cân nhắc tagging.
4. Ở ít nhất 2 mặt phẳng trực giao tối ưu qua khối: T1 black blood ± xóa mỡ; T2 black blood; tưới máu lần đầu; EGE và LGE.

## Báo cáo (S1, tr. 85)
1. Vị trí và kích thước 3 chiều.
2. Liên quan với màng ngoài tim, cơ tim, van.
3. Tín hiệu trên T1, T1 xóa mỡ, T2, STIR (đồng nhất/không; tăng/đồng/giảm tín hiệu so với cơ tim).
4. Bờ: nhẵn, không đều, thâm nhiễm, có cuống.
5. Di động cùng cơ tim/màng ngoài tim.
6. Có/không, kiểu ngấm thuốc (tưới máu, EGE, LGE).
7. Tràn dịch màng ngoài tim, màng phổi.

## Mẹo
- Cân nhắc T1, T2 mapping.
- MRI cho đặc tính mô nhưng không thay được mô bệnh học (S1, tr. 85).
- Bảng tín hiệu các khối: xem [khối u tim — đặc tính mô](#/tham-khao/khoi-dac-tinh-mo).

## Sơ đồ protocol khối (S1, tr. 86–87)
![Định vị khối: chồng lát T1 ngang, cine các mặt cắt chuẩn và mặt cắt nhắm vào khối, tagging tùy chọn](hinh/protocol/s1-86.jpg)

![Đặc tính mô: T1, T2, tưới máu lần đầu, EGE, T1 sau tiêm, LGE](hinh/protocol/s1-87.jpg)
`,
});
