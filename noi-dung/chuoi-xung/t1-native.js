/* Chuỗi xung. Sửa phần noiDung (Markdown). loai: dinhvi, giaiphau, cine, t2, map, t2star, perf, stress, ege, lge, flow, angio, tag. */
CMR.xung({
  id: "t1-native",
  ten: "T1 mapping native (trước tiêm)",
  tenEn: "Native T1 mapping (MOLLI / ShMOLLI / SASHA)",
  ngan: "T1 native",
  loai: "map",
  moTaNgan: "Định lượng T1 trước tiêm: tăng khi phù, xơ, amyloid; giảm khi mỡ (Fabry), sắt.",
  tuKhoa: ["T1", "MOLLI", "ShMOLLI", "SASHA", "native T1", "mapping"],
  noiDung: `
## Mục đích
Đặc tính mô không cần thuốc tương phản (S1, tr. 18–19):

| T1 native tăng | T1 native giảm |
| --- | --- |
| Phù (nhồi máu cấp, viêm) | Mỡ / quá tải lipid (Fabry, mỡ thay thế sau nhồi máu, u mỡ) |
| Tăng khoảng kẽ: xơ hóa, sẹo, amyloid | Quá tải sắt |

## Cách chụp
1. Định vị như cine thất trái.
2. Chuỗi xung T1 mapping theo khuyến cáo của hãng (MOLLI, ShMOLLI, SASHA…).
3. Trục ngắn: 1 lát giữa thất hoặc 3 lát theo kỹ thuật “3 trong 5”.
4. Mỗi lần nín thở một lát (S1, tr. 17).

## Mẹo
- Giá trị T1 lặp lại tốt nhưng thay đổi theo cường độ từ trường (3T dài hơn), hãng máy và chuỗi xung.
- Kiểm tra bản đồ do máy tạo xem có ảnh giả hô hấp không; nếu có, đổi kích thước voxel, fold-over hoặc thêm SENSE để rút ngắn thời gian nín thở.
- Giữ nguyên FOV và kích thước voxel giữa trước và sau tiêm để tạo được bản đồ ECV (S1, tr. 17).
- Đặt ROI ở vách liên thất giữa, tránh bờ máu.

Tham khảo: (S2, tr. 133–145).
`,
});
