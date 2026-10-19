/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "fabry",
  ten: "Bệnh Anderson–Fabry",
  tenEn: "Anderson–Fabry disease",
  vietTat: ["AFD", "FD"],
  nhom: "viem-tham-nhiem",
  thuTu: 4,
  tuKhoa: ["Fabry", "lysosome", "globotriaosylceramide", "Gb3", "alpha-galactosidase", "T1 thấp", "lọc máu", "enzyme thay thế", "ERT"],
  moTaNgan: "T1 native vách liên thất thấp; LGE giữa thành thành dưới bên đoạn đáy.",
  protocol: ["P5"],
  thoiGian: "35–45 phút",
  dauHieu: ["**T1 native thấp** ở vách (< 940 ms ở 1,5T) — dấu hiệu gần như đặc hiệu", "Phì đại đồng tâm giống HCM (thường muộn: thập niên 3 ở nam, 4 ở nữ)", "LGE **giữa thành/dưới thượng tâm mạc thành dưới bên đoạn đáy–giữa** (khoảng 50%)", "Vùng có sẹo: T1 giả bình thường hoặc tăng"],
  dau: ["t1-giam", "day-that-trai", "lge-giua-thanh", "lge-duoi-thuong-tam-mac", "ecv-giam"],
  lgeVung: [5, 11],
  lgeGhi: "Giữa thành thành dưới bên đoạn đáy–giữa",
  tomTat: {"lamSang": "Liên kết X (nam nặng hơn); đau chi, không ra mồ hôi, protein niệu/suy thận, đột quỵ; “HCM khởi phát muộn”", "hinhThai": "Dày đồng tâm, cơ nhú to, thất phải dày", "lge": "Giữa thành thành dưới bên đoạn đáy", "mapping": "T1 native thấp (lipid), ECV bình thường/thấp", "phanBiet": "HCM, amyloid, tăng huyết áp: T1 tăng; amyloid: LGE lan tỏa"},
  nguon: ["S1, tr. 18, 47–48, 96", "S2, tr. 354–363"],
  hinh: [{"src": "hinh/fabry/s1-48.jpg", "chuThich": "Fabry, 34 tuổi: LGE thành dưới bên và thành dưới đoạn đáy (A); T1 native vách thấp (780 ms), hiển thị màu xanh (B).", "nguon": "S1, tr. 48"}, {"src": "hinh/fabry/s2-356.jpg", "chuThich": "Fabry: sẹo thành dưới bên đoạn đáy trên mô học; in vivo T1 native thấp (xanh) trừ vùng sẹo (đỏ).", "nguon": "S2, tr. 356"}, {"src": "hinh/fabry/s2-362.jpg", "chuThich": "Chẩn đoán Fabry mới ở bệnh nhân nam 40 tuổi nhờ MRI (T1 thấp, LGE thành dưới bên).", "nguon": "S2, tr. 362"}],
  noiDung: `
## Tổng quan
Bệnh dự trữ lysosome đa hệ, liên kết X (nam nặng hơn nữ), do thiếu enzyme alpha-galactosidase A gây tích tụ globotriaosylceramide trong nội mạc mạch, tế bào cơ tim, thận, não → thiếu máu và nhồi máu cơ quan. Thường chẩn đoán muộn khoảng 10 năm sau triệu chứng đầu (S1, tr. 47; S2, tr. 356).

## Đặc điểm lâm sàng
- Đau rát đầu chi, không chịu nóng, ít mồ hôi, rối loạn tiêu hóa; protein niệu, suy thận tới lọc máu; đột quỵ.
- Tim: đau ngực, khó thở, rối loạn nhịp; phì đại thất trái không giải thích được.
- Bệnh hay bị bỏ sót: gặp ở bệnh nhân lọc máu, “HCM khởi phát muộn” (S1, tr. 47).
- Có điều trị đặc hiệu (enzyme thay thế, chaperone) → phát hiện sớm rất quan trọng.

## Chỉ định MRI tim
Phì đại thất trái chưa rõ nguyên nhân; tầm soát bệnh nhân Fabry/người thân; theo dõi điều trị.

## Protocol chụp
[P5](#/protocol/P5) (S1, tr. 47): giải phẫu, chức năng thất trái, **T1 mapping** (chuỗi quan trọng nhất), LGE; ECV nếu có.

## Hình ảnh MRI (S1, tr. 47–48; S2, tr. 357–359)
- Phì đại đồng tâm (vách vẫn hơi dày hơn nhưng không gấp 1,5 lần thành bên); cơ nhú to, thất phải dày. Nữ dị hợp sớm có thể giống HCM mỏm.
- **T1 native thấp** ở vách (< 940 ms ở 1,5T), có thể thấp 6 SD; khoảng 50% bệnh nhân **chưa phì đại** đã có T1 thấp. Khoảng 15% bệnh nhân phì đại có T1 bình thường.
- **LGE** khoảng 50%: giữa thành hoặc dưới thượng tâm mạc thành dưới bên đoạn giữa–đáy; có thể xuyên thành và mỏng thành ở giai đoạn muộn.
- Vùng sẹo: T1 giả bình thường/tăng (xơ hóa bù trừ tác dụng của mỡ).
- ECV bình thường hoặc giảm (tích tụ trong tế bào).

## Chẩn đoán phân biệt
| Bệnh | T1 native | LGE |
| --- | --- | --- |
| Fabry | **Thấp** | Thành dưới bên đoạn đáy |
| [HCM](#/benh/hcm) | Tăng nhẹ | Giữa thành vùng phì đại, điểm nối thất phải |
| [Amyloidosis](#/benh/amyloidosis) | Rất cao | Dưới nội mạc lan tỏa, khó null |
| Tim tăng huyết áp | Tăng nhẹ | Ít, không đặc hiệu |
| [Tim vận động viên](#/benh/tim-van-dong-vien) | Giảm nhẹ (1–2 SD) | Không |

Các bệnh khác có LGE thành dưới bên: [viêm cơ tim](#/benh/viem-co-tim), [ARVC thể trái](#/benh/arvc), [loạn dưỡng cơ](#/benh/loan-duong-co) (S2, tr. 358). T1 thấp còn gặp trong [quá tải sắt](#/benh/qua-tai-sat) (T2* thấp) và mỡ.

## Bẫy và lỗi thường gặp
- Đặt ROI T1 ở vách giữa, tránh vùng sẹo thành dưới bên.
- Giá trị T1 phụ thuộc máy và chuỗi xung → so với giá trị tham chiếu của khoa.

## Mẫu kết luận
“Phì đại đồng tâm thất trái (vách 16 mm, thành bên 13 mm), EF 65%. T1 native vách 860 ms (giảm rõ). LGE giữa thành thành dưới bên đoạn đáy. Kết luận: gợi ý mạnh bệnh Anderson–Fabry; đề nghị định lượng enzyme alpha-galactosidase A/xét nghiệm gen.”
`,
});
