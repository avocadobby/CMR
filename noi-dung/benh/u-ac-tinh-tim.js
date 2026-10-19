/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "u-ac-tinh-tim",
  ten: "U ác tính nguyên phát của tim",
  tenEn: "Primary malignant cardiac tumours (sarcoma, lymphoma)",
  vietTat: [],
  nhom: "khoi-u",
  thuTu: 4,
  tuKhoa: ["sarcoma", "angiosarcoma", "sarcoma mạch máu", "leiomyosarcoma", "rhabdomyosarcoma", "lymphoma", "u lympho", "ác tính"],
  moTaNgan: "Lớn > 5 cm, thâm nhiễm, không đồng nhất, tràn dịch; angiosarcoma ở nhĩ phải.",
  protocol: ["P9"],
  thoiGian: "45–60 phút",
  dauHieu: ["Dấu hiệu ác tính: **> 5 cm**, chân rộng, **thâm nhiễm** cơ tim/màng ngoài tim, không đồng nhất, tràn dịch màng ngoài tim/màng phổi", "**Angiosarcoma:** nhĩ phải, dạng súp lơ, chảy máu – hoại tử, ngấm “tia nắng” trên tưới máu, ngấm viền trên LGE", "**Sarcoma không biệt hóa/leiomyosarcoma:** nhĩ trái thành sau, lan tĩnh mạch phổi (giống myxoma)", "**Lymphoma:** tim phải, bao quanh mạch vành, T2 có thể rất cao, ngấm ít"],
  dau: ["khoi", "tran-dich-mnt", "mnt-day"],
  tomTat: {"lamSang": "Khó thở, tràn dịch máu, chèn ép, rối loạn nhịp, tắc tĩnh mạch chủ", "hinhThai": "Khối lớn thâm nhiễm, phá vỡ ranh giới", "lge": "Không đồng nhất, hoại tử trung tâm", "mapping": "T2 cao (lymphoma tới 140 ms)", "phanBiet": "Di căn thường gặp hơn u nguyên phát tới 1000 lần"},
  nguon: ["S1, tr. 85, 88", "S2, tr. 466–467, 474–477 (Malignant tumours)"],
  hinh: [{"src": "hinh/u-ac-tinh-tim/s2-475-1.jpg", "chuThich": "Angiosarcoma nhĩ phải: khối lớn bầu dục trên cine và T2; mô học.", "nguon": "S2, tr. 475"}, {"src": "hinh/u-ac-tinh-tim/s2-476-0.jpg", "chuThich": "Sarcoma tim phải (leiomyosarcoma): khối thâm nhiễm đường ra thất phải.", "nguon": "S2, tr. 476"}, {"src": "hinh/u-ac-tinh-tim/s2-479-0.jpg", "chuThich": "Lymphoma nguyên phát tim phải: khối lớn bờ không đều xâm lấn thành trước thất phải, tràn dịch ít, ngấm không đều.", "nguon": "S2, tr. 479"}],
  noiDung: `
## Tổng quan
Khoảng 30% u tim nguyên phát là ác tính: angiosarcoma, rhabdomyosarcoma, u trung biểu mô, fibrosarcoma, lymphoma, sarcoma không biệt hóa, leiomyosarcoma (S1, tr. 85). Di căn tim thường gặp hơn u nguyên phát tới 1000 lần.

## Đặc điểm lâm sàng
Khó thở, đau ngực, tràn dịch màng ngoài tim máu, chèn ép, rối loạn nhịp, tắc tĩnh mạch chủ trên, triệu chứng toàn thân.

## Chỉ định MRI tim
Đặc tính mô, mức thâm nhiễm (cơ tim, màng ngoài tim, mạch lớn), lập kế hoạch mổ/xạ trị, theo dõi.

## Protocol chụp
[P9 · Khối](#/protocol/P9); thêm T1, T2 mapping; tagging khi khối thâm nhiễm cơ tim hoặc màng ngoài tim.

## Hình ảnh MRI
### Dấu hiệu ác tính (S2, tr. 466–467)
U lành hiếm khi > 5 cm, thường đồng nhất, không thâm nhiễm. Gợi ý ác tính: kích thước lớn, không đồng nhất, thâm nhiễm, chân rộng, kèm tràn dịch màng ngoài tim và màng phổi, nhiều buồng tim.

### Từng loại (S2, tr. 474–476)
- **Angiosarcoma:** nhĩ phải, dạng súp lơ, bờ không rõ, lan thất phải và màng ngoài tim (tràn dịch máu). T1 đồng tín hiệu, T2 thấp (hoại tử, methemoglobin); cine tăng tín hiệu với vùng giảm; dòng trống do kênh mạch lớn; tưới máu ngấm mạnh “tia nắng”, LGE ngấm viền, trung tâm không ngấm.
- **Leiomyosarcoma:** nhĩ trái thành sau, lan tĩnh mạch phổi; hoặc đường ra/động mạch phổi.
- **Sarcoma đa hình không biệt hóa:** nhĩ trái, dạng polyp giống myxoma; lan tĩnh mạch phổi, phổi.
- **Lymphoma:** đồng tín hiệu T1, tăng T2 khu trú (T2 mapping có thể tới 140 ms); ngấm nhẹ trên tưới máu, không đồng nhất trên LGE; thường tim phải, bao quanh động mạch vành.

## Tín hiệu các khối thường gặp
| Khối | T1 | T2 | LGE |
| --- | --- | --- | --- |
| Huyết khối | Thấp (cao nếu mới) | Thấp (cao nếu mới) | Không ngấm (rõ nhất trên EGE) |
| Nang màng ngoài tim | Thấp | Cao | Không |
| Myxoma | Đồng tín hiệu | Cao | Không đồng nhất |
| Lipoma | Cao (như mỡ, xóa khi xóa mỡ) | Cao | Không |
| Fibroma | Đồng tín hiệu | Thấp | Ngấm mạnh |
| Rhabdomyoma | Đồng tín hiệu | Đồng/hơi cao | Không/ít |
| Angiosarcoma | Không đồng nhất | Không đồng nhất | Không đồng nhất |
| Rhabdomyosarcoma | Đồng tín hiệu | Cao | Đồng nhất |
| Sarcoma không biệt hóa | Đồng tín hiệu | Cao | Không đồng nhất |
| Lymphoma | Đồng tín hiệu | Đồng tín hiệu | Không/ít |
| Di căn | Thấp | Cao | Không đồng nhất |
| Di căn melanoma | Cao (melanin) | Thấp | — |

Tín hiệu so với cơ tim (S1, tr. 88).

## Vị trí thường gặp (S1, tr. 85)
- Nhĩ phải: angiosarcoma, lymphoma.
- Nhĩ trái: fibrosarcoma, osteosarcoma, leiomyosarcoma (thành sau), sarcoma không biệt hóa.
- Mọi buồng: rhabdomyosarcoma (trong thành).

## Chẩn đoán phân biệt
[Di căn](#/benh/di-can-tim), [myxoma](#/benh/myxoma), [huyết khối](#/benh/huyet-khoi-tim) (nhất là huyết khối lan từ tĩnh mạch chủ), [u màng ngoài tim](#/benh/nang-u-mang-ngoai-tim).

## Bẫy và lỗi thường gặp
MRI cho đặc tính mô nhưng không thay được mô bệnh học (S1, tr. 85).

## Mẫu kết luận
“Khối 7 × 5 cm nhĩ phải, bờ không đều, thâm nhiễm rãnh nhĩ thất phải và màng ngoài tim, tín hiệu không đồng nhất, ngấm mạnh trên tưới máu, LGE ngấm viền với trung tâm hoại tử; tràn dịch màng ngoài tim máu. Kết luận: khối ác tính nhĩ phải, gợi ý angiosarcoma.”
`,
});
