/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P7",
  ten: "Quá tải sắt (T2*)",
  chiDinhNgan: "Thalassemia, truyền máu nhiều lần, nhiễm sắc tố sắt; theo dõi thải sắt",
  thoiGian: "khoảng 15–20 phút",
  tuKhoa: ["iron", "sắt", "T2*", "thalassemia", "haemochromatosis"],
  buoc: ["dinh-vi", "cine-lv", {"x": "cine-rv", "tuyChon": true}, {"x": "t2star", "ghi": "vách giữa thất + gan"}, {"x": "t1-native", "tuyChon": true}],
  noiDung: `
## Chuẩn bị
Không cần thuốc tương phản. Hướng dẫn nín thở kỹ (T2* nhiều echo, nín thở lâu) (S1, tr. 16).

## Thứ tự (S1, tr. 49)
1. Giải phẫu, chức năng thất trái và thất phải.
2. T2* một lát trục ngắn giữa thất và một lát ngang qua gan.

## Báo cáo (S1, tr. 49–50)
1. Kích thước, khối cơ, chức năng hai thất (cả chức năng dọc).
2. T2* (ms), R2* (Hz) và lượng sắt khô ước tính (mg/g) của cơ tim và gan; phân loại mức độ.

## Mẹo
- Đo T2* ở vách liên thất (ít ảnh giả); sắt lắng đọng tương đối đồng đều giữa các vùng.
- T2* tương quan chặt với T1 native (cả hai cùng giảm).
- Dùng [máy tính T2*](#/cong-cu/may-tinh) để phân loại.
`,
});
