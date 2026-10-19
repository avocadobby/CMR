/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "qua-tai-sat",
  ten: "Bệnh cơ tim do quá tải sắt",
  tenEn: "Iron overload cardiomyopathy",
  vietTat: ["T2*"],
  nhom: "viem-tham-nhiem",
  thuTu: 5,
  tuKhoa: ["sắt", "thalassemia", "truyền máu", "haemochromatosis", "nhiễm sắc tố sắt", "thải sắt", "chelation", "ferritin", "R2*", "LIC", "MIC"],
  moTaNgan: "T2* cơ tim và gan: định lượng sắt, phân tầng nguy cơ suy tim, hướng dẫn thải sắt.",
  protocol: ["P7"],
  thoiGian: "15–20 phút",
  tuongPhan: false,
  dauHieu: ["**T2* cơ tim < 20 ms** = có quá tải sắt; **< 10 ms** = nguy cơ suy tim cao", "T1 native thấp (tương quan chặt với T2*)", "Gan “tối” trên mọi chuỗi xung; mất tín hiệu khu trú trên T1, T2", "Sắt tim và gan có thể không tương xứng"],
  dau: ["t2star-giam", "t1-giam", "gian-that-trai", "giam-ef"],
  tomTat: {"lamSang": "Thalassemia thể nặng, truyền máu nhiều lần, nhiễm sắc tố sắt di truyền; suy tim có thể hồi phục khi thải sắt", "hinhThai": "Thể giãn (giảm EF) hoặc thể hạn chế", "lge": "Thường không", "mapping": "T2* thấp, T1 thấp, T2 thấp", "phanBiet": "Fabry cũng có T1 thấp nhưng T2* bình thường"},
  nguon: ["S1, tr. 16, 49–50", "S2, tr. 364–374 (Myocardial iron overload)"],
  hinh: [{"src": "hinh/qua-tai-sat/s1-50.jpg", "chuThich": "Tính T2*: đường cong suy giảm tín hiệu ở cơ tim (A) và gan (B); T2* vách 16,5 ms (quá tải nhẹ), gan 2,1 ms (nặng); bảng phân loại.", "nguon": "S1, tr. 50"}, {"src": "hinh/qua-tai-sat/s2-369-1.jpg", "chuThich": "Ảnh trục ngắn giữa thất ở các thời gian echo tăng dần: cơ tim tối dần nhanh khi có sắt.", "nguon": "S2, tr. 369"}],
  noiDung: `
## Tổng quan
Sắt lắng đọng trong tế bào cơ tim (do truyền máu nhiều lần hoặc tăng hấp thu) gây độc tế bào, rối loạn chức năng tâm thu/tâm trương và rối loạn nhịp. **Có thể hồi phục** khi điều trị thải sắt hiệu quả. T2* đã được hiệu chuẩn với mô tim người và làm giảm mạnh tử vong do tim ở bệnh nhân thalassemia (S1, tr. 49; S2, tr. 364–372).

## Đặc điểm lâm sàng
- Thalassemia thể nặng, thiếu máu phụ thuộc truyền máu (hồng cầu hình liềm, loạn sản tủy…), nhiễm sắc tố sắt di truyền.
- Suy tim, rối loạn nhịp (rung nhĩ). Ferritin máu tương quan kém với sắt tim.

## Chỉ định MRI tim
Đánh giá sắt tim và gan; theo dõi định kỳ để điều chỉnh thải sắt (S1, tr. 49).

## Protocol chụp
[P7 · Quá tải sắt](#/protocol/P7), không cần thuốc tương phản: giải phẫu, chức năng hai thất, T2* một lát trục ngắn giữa thất + một lát ngang qua gan (S1, tr. 16, 49).

## Hình ảnh MRI
- Thể giãn (đa số): giãn, giảm EF. Thể hạn chế: thất không giãn, chức năng tâm thu bảo tồn, rối loạn tâm trương, nhĩ giãn.
- Dấu hiệu khác: mất tín hiệu khu trú trên T1 và T2; gan “tối” bất thường.
- Có thể chỉ tim hoặc chỉ gan bị (S1, tr. 49; S2, tr. 371).

## Tiêu chuẩn và phân loại (S1, tr. 49–50)
| T2* cơ tim (ms) | R2* (Hz) | Sắt cơ tim (mg/g khô) | T2* gan (ms) | Sắt gan (mg/g khô) | Mức |
| --- | --- | --- | --- | --- | --- |
| ≥ 20 | ≤ 50 | ≤ 1,16 | ≥ 15,4 | ≤ 2 | Không |
| 14–20 | 50–71 | 1,16–1,8 | 4,5–15,4 | 2–7 | Nhẹ |
| 10–14 | 71–100 | 1,8–2,7 | 2,1–4,5 | 7–15 | Trung bình |
| ≤ 10 | ≥ 100 | ≥ 2,7 | ≤ 2,1 | ≥ 15 | Nặng |

Nguy cơ suy tim: T2* > 20 ms thấp; 10–20 ms trung bình; < 10 ms cao (S1, tr. 49; S2, tr. 371). Dùng [máy tính T2*](#/cong-cu/may-tinh).

## Chẩn đoán phân biệt
- [Fabry](#/benh/fabry): T1 thấp nhưng T2* bình thường.
- [DCM](#/benh/dcm) khác nguyên nhân: T2* bình thường.

## Bẫy và lỗi thường gặp
- Đo ở vách liên thất (ít ảnh giả từ tĩnh mạch tim, phổi) (S1, tr. 49).
- Lát gan tránh mạch máu lớn; nín thở tốt.
- Ở 3T, T2* ngắn hơn → dùng ngưỡng của 1,5T và chụp ở 1,5T khi có thể.

## Mẫu kết luận
“T2* vách liên thất 16,5 ms (R2* 61 Hz): quá tải sắt cơ tim nhẹ, nguy cơ suy tim trung bình. T2* gan 2,1 ms: quá tải sắt gan nặng. EF thất trái 60%.”
`,
});
