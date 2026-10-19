/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "minoca",
  ten: "Nhồi máu cơ tim không tắc nghẽn mạch vành (MINOCA)",
  tenEn: "Myocardial infarction with non-obstructive coronary arteries",
  vietTat: ["MINOCA"],
  nhom: "thieu-mau",
  thuTu: 4,
  tuKhoa: ["troponin tăng", "mạch vành bình thường", "co thắt mạch vành", "tắc mạch", "nứt mảng xơ vữa"],
  moTaNgan: "MRI xác định nguyên nhân: viêm cơ tim, Takotsubo, nhồi máu thật, hay bình thường.",
  protocol: ["P2", "P5"],
  thoiGian: "45–50 phút",
  dauHieu: ["**Kiểu nhồi máu:** LGE dưới nội mạc/xuyên thành theo vùng mạch vành → nhồi máu thật (co thắt, tắc mạch, nứt mảng)", "**Kiểu viêm cơ tim:** LGE dưới thượng tâm mạc/giữa thành + phù", "**Kiểu Takotsubo:** phình mỏm/giữa thất, phù, không LGE", "MRI bình thường: cân nhắc chẩn đoán khác"],
  dau: ["t2-tang", "lge-duoi-noi-mac", "lge-duoi-thuong-tam-mac", "rlvd-vung", "phinh-mom", "lge-khong"],
  tomTat: {"lamSang": "Nhồi máu cơ tim theo định nghĩa toàn cầu, chụp mạch vành không hẹp ≥ 50%; thường trẻ, nữ", "hinhThai": "Tùy nguyên nhân", "lge": "Kiểu nhồi máu, kiểu viêm, hoặc không có", "mapping": "Phù khi tổn thương cấp", "phanBiet": "MRI là xét nghiệm then chốt để phân loại nguyên nhân"},
  nguon: ["S2, tr. 222–227 (MINOCA)"],
  hinh: [{"src": "hinh/minoca/s2-224.jpg", "chuThich": "Phân loại chẩn đoán sau MRI ở bệnh nhân MINOCA (theo Pasupathy 2015).", "nguon": "S2, tr. 224"}],
  noiDung: `
## Tổng quan
MINOCA là hội chứng có tiêu chuẩn nhồi máu cơ tim (troponin tăng/giảm + triệu chứng hoặc ECG/hình ảnh thiếu máu) nhưng chụp mạch vành không có hẹp tắc đáng kể. Chiếm khoảng 6–10% nhồi máu; bệnh nhân thường trẻ hơn và là nữ. Tiên lượng không lành tính như từng nghĩ: tử vong 12 tháng khoảng 4,7% (S2, tr. 222).

## Đặc điểm lâm sàng
Nguyên nhân chia nhóm (S2, tr. 222–223):
- **Thượng tâm mạc:** co thắt mạch vành, nứt/loét mảng xơ vữa không gây hẹp, tắc mạch vành (rung nhĩ, van nhân tạo, huyết khối trong thất, viêm nội tâm mạc, lỗ bầu dục), bóc tách mạch vành tự phát.
- **Vi mạch:** Takotsubo, viêm cơ tim (nguyên nhân thường gặp nhất trên MRI, khoảng 33%), co thắt vi mạch.
- Cần loại trừ nguyên nhân không phải tim (thuyên tắc phổi, suy thận…).

## Chỉ định MRI tim
MRI là xét nghiệm then chốt sau chụp mạch vành và thất trái đồ để xác định nguyên nhân, nên chụp sớm (trong vài ngày) để không bỏ sót phù (S2, tr. 223–224).

## Protocol chụp
Kết hợp [P2](#/protocol/P2) và [P5](#/protocol/P5): cine đầy đủ trục dài (kiểu vận động), T2 STIR/T2 mapping, T1 native, EGE, LGE, ECV.

## Hình ảnh MRI — phân loại sau MRI (S2, tr. 223–224)
| Kiểu trên MRI | Gợi ý | Bước tiếp theo |
| --- | --- | --- |
| Phù ± LGE dưới nội mạc/xuyên thành theo vùng mạch vành | Nhồi máu thật (co thắt, tắc mạch, nứt mảng) | Xem lại phim chụp mạch; IVUS/OCT; test co thắt (acetylcholine); siêu âm qua thực quản tìm nguồn tắc mạch |
| Phù + LGE dưới thượng tâm mạc/giữa thành | [Viêm cơ tim](#/benh/viem-co-tim) | Theo dõi; sinh thiết cơ tim khi nặng |
| Rối loạn vận động vùng mỏm/giữa thất + phù, không LGE | [Takotsubo](#/benh/takotsubo) | Theo dõi hồi phục |
| Bình thường | Không xác định được | Cân nhắc nguyên nhân khác; theo dõi |

## Chẩn đoán phân biệt
Xem các trang [viêm cơ tim](#/benh/viem-co-tim), [Takotsubo](#/benh/takotsubo), [nhồi máu cấp](#/benh/nmct-cap); ngoài ra bệnh cơ tim khác (HCM, bệnh thâm nhiễm) có thể biểu hiện troponin tăng.

## Bẫy và lỗi thường gặp
- Chụp muộn: phù đã hết, LGE nhỏ của viêm cơ tim nhẹ có thể không còn thấy.
- Nhồi máu nhỏ dưới nội mạc dễ bị bỏ sót → LGE độ phân giải cao, đọc kỹ cạnh cine.

## Mẫu kết luận
“Phù T2 và LGE dưới nội mạc (< 50% bề dày) ở thành dưới bên đoạn giữa, theo vùng LCx, trên nền mạch vành không hẹp: phù hợp nhồi máu nhỏ cấp (MINOCA kiểu nhồi máu); gợi ý tìm co thắt hoặc tắc mạch vành.”
`,
});
