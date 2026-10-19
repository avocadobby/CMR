/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "hep-van-dmc",
  ten: "Hẹp van động mạch chủ",
  tenEn: "Aortic stenosis",
  vietTat: ["AS"],
  nhom: "van-tim",
  thuTu: 4,
  tuKhoa: ["hẹp chủ", "vôi hóa", "van hai mảnh", "bicuspid", "TAVI", "planimetry", "vận tốc đỉnh", "xơ hóa", "amyloid ẩn"],
  moTaNgan: "Planimetry diện tích lỗ van, vận tốc đỉnh bằng PC vuông góc luồng phụt; LGE giữa thành = tiên lượng xấu.",
  protocol: ["P10"],
  thoiGian: "40–50 phút",
  dauHieu: ["Planimetry diện tích lỗ van (chính xác nhất) trên chồng lát song song vòng van", "Vận tốc đỉnh bằng PC vuông góc luồng phụt (có thể đo thấp)", "Nặng: diện tích < 1,0 cm² (< 0,6 cm²/m²), chênh áp trung bình > 40 mmHg", "Phì đại đồng tâm; **LGE giữa thành dạng đốm** = yếu tố tiên lượng xấu"],
  dau: ["day-that-trai", "lge-giua-thanh", "lge-dom", "t1-tang", "ecv-tang", "gian-dmc"],
  tomTat: {"lamSang": "Thoái hóa (người già), van hai mảnh (< 40 tuổi), hiếm khi thấp tim; khó thở, đau ngực, ngất", "hinhThai": "Phì đại đồng tâm tương xứng mức hẹp", "lge": "Giữa thành dạng đốm không đặc hiệu", "mapping": "T1, ECV tăng", "phanBiet": "Amyloid ATTR ẩn kèm hẹp chủ ở người già: LGE lan tỏa, ECV rất cao"},
  nguon: ["S1, tr. 77, 79, 101", "S2, tr. 445, 448–449, 361"],
  hinh: [{"src": "hinh/hep-van-dmc/s1-79.jpg", "chuThich": "Hẹp chủ thoái hóa: planimetry trên chồng lát song song vòng van; đặt mặt phẳng PC vuông góc luồng phụt trên 3CH và LVOT đứng ngang, vận tốc đỉnh 4,5 m/s.", "nguon": "S1, tr. 79"}, {"src": "hinh/hep-van-dmc/s2-448-0.jpg", "chuThich": "Hẹp chủ nặng trên 3CH: lá van hạn chế, luồng phụt tốc độ cao (mũi tên).", "nguon": "S2, tr. 448"}, {"src": "hinh/hep-van-dmc/s2-448-2.jpg", "chuThich": "Chồng lát cine nín thở ở 2 mặt phẳng trực giao để xác định mức đầu lá van cho planimetry.", "nguon": "S2, tr. 448"}],
  noiDung: `
## Tổng quan
Nguyên nhân: thoái hóa – vôi hóa (thường gặp nhất, người già), van hai mảnh (thường gặp nhất ở người < 40 tuổi; van hai mảnh gặp 1–2% dân số), hiếm khi thấp tim ở nước phát triển (S1, tr. 79; S2, tr. 444).

## Đặc điểm lâm sàng
Khó thở gắng sức, đau thắt ngực, ngất — thường muộn. Phì đại thất trái làm giảm dự trữ tưới máu (S2, tr. 445).

## Chỉ định MRI tim
- Cửa sổ siêu âm kém, kết quả không thống nhất (hẹp chủ dòng thấp chênh áp thấp).
- Đánh giá xơ hóa cơ tim (LGE, ECV), động mạch chủ lên (van hai mảnh), trước TAVI.
- Tìm amyloid ẩn ở người già hẹp chủ (S2, tr. 361).

## Protocol chụp
[P10](#/protocol/P10): cine LVOT 2 mặt phẳng, chồng lát trục ngắn song song vòng van (planimetry); PC vuông góc luồng phụt ở tầm co thắt (vena contracta) với VENC cao (≥ 400 cm/s); LGE, T1/ECV (S1, tr. 77, 79; S2, tr. 448–449).

## Hình ảnh MRI
- Lá van dày, hạn chế mở; dòng phụt tốc độ cao trên cine LVOT (lõi trắng dòng thẳng, viền đen dòng xoáy) (S2, tr. 448).
- Phì đại đồng tâm tương xứng mức hẹp; tắc nghẽn đường ra hiếm.
- **LGE giữa thành dạng đốm** kèm phì đại là dấu hiệu tiên lượng xấu; T1 native và ECV tăng (S1, tr. 79, 101).
- Van hai mảnh: tìm giãn động mạch chủ lên, hẹp eo kèm theo.

## Định lượng (S1, tr. 79; S2, tr. 448)
| Thông số | Hẹp nặng (tiêu chuẩn siêu âm) |
| --- | --- |
| Diện tích lỗ van | < 1,0 cm² |
| Diện tích chỉ số hóa | < 0,6 cm²/m² |
| Chênh áp trung bình | > 40 mmHg |

- Planimetry là phương pháp chính xác nhất; đo diện tích giải phẫu (lớn hơn diện tích hiệu dụng của phương trình liên tục).
- PC có thể đo thấp vận tốc đỉnh do thể tích từng phần, độ phân giải thời gian thấp.

## Chẩn đoán phân biệt (dày thất trái)
Xem [HCM](#/benh/hcm), [amyloidosis](#/benh/amyloidosis), tim tăng huyết áp — hẹp chủ gây phì đại đồng tâm tương xứng mức hẹp, giảm sau thay van (S1, tr. 101).

## Bẫy và lỗi thường gặp
- Đặt lát PC không vuông góc luồng phụt → đo thấp; dùng in-plane để định hướng (S1, tr. 79).
- Vôi hóa gây mất tín hiệu, khó planimetry.

## Mẫu kết luận
“Van động mạch chủ ba lá vôi hóa, mở hạn chế; diện tích lỗ van planimetry 0,8 cm² (0,45 cm²/m²); vận tốc đỉnh PC 4,5 m/s. Phì đại đồng tâm (vách 15 mm), EF 60%. LGE giữa thành dạng đốm vách đáy. ECV 30%. Kết luận: hẹp chủ nặng, có xơ hóa cơ tim khu trú.”
`,
});
