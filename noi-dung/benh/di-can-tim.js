/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "di-can-tim",
  ten: "Di căn tim",
  tenEn: "Cardiac metastases",
  vietTat: [],
  nhom: "khoi-u",
  thuTu: 5,
  tuKhoa: ["di căn", "metastasis", "melanoma", "ung thư phổi", "ung thư vú", "xâm lấn trực tiếp", "u trung biểu mô màng phổi"],
  moTaNgan: "Thường gặp hơn u nguyên phát tới 1000 lần; tín hiệu không đặc hiệu trừ melanoma (T1 cao).",
  protocol: ["P9"],
  thoiGian: "45–60 phút",
  dauHieu: ["Khối ác tính, thường **nhiều ổ**, có thể nhiều buồng (22%)", "60% ngấm thuốc sau tiêm, không đồng nhất", "**Melanoma:** T1 cao, T2 thấp (melanin)", "Thường kèm tràn dịch màng ngoài tim, thâm nhiễm màng ngoài tim"],
  dau: ["khoi", "tran-dich-mnt", "mnt-day"],
  tomTat: {"lamSang": "Ung thư đã biết (u trung biểu mô màng phổi, melanoma, phổi, vú, thận, lymphoma)", "hinhThai": "Khối, nhiều ổ, thâm nhiễm", "lge": "Không đồng nhất", "mapping": "—", "phanBiet": "Huyết khối ở bệnh nhân ung thư: không tưới máu, không LGE"},
  nguon: ["S1, tr. 85, 88", "S2, tr. 478–481 (Metastatic tumours; Pericardial tumours)"],
  hinh: [{"src": "hinh/di-can-tim/s2-479-1.jpg", "chuThich": "Di căn tim của ung thư phổi ẩn: đặc tính mô trên MRI và mô bệnh học.", "nguon": "S2, tr. 479"}],
  noiDung: `
## Tổng quan
Di căn tim gặp 2,3–18,3% khi tìm kỹ; thường gặp hơn u nguyên phát tới 1000 lần. Tỉ lệ di căn tim cao: u trung biểu mô màng phổi (48,4%), melanoma (27,8%), ung thư biểu mô tuyến phổi (21%), ung thư không biệt hóa (19,5%), ung thư phổi tế bào vảy (18,2%), ung thư vú (15,5%); ngoài ra buồng trứng, tăng sinh lympho – tủy, dạ dày, thận (S2, tr. 478). Đường lan: xâm lấn trực tiếp, bạch huyết, máu, tĩnh mạch (thận, gan qua tĩnh mạch chủ dưới).

## Đặc điểm lâm sàng
Tràn dịch màng ngoài tim ác tính, chèn ép, rối loạn nhịp, suy tim; thường ở bệnh nhân ung thư giai đoạn muộn.

## Chỉ định MRI tim
Phân biệt di căn với huyết khối, u nguyên phát; mức xâm lấn; theo dõi điều trị.

## Protocol chụp
[P9 · Khối](#/protocol/P9).

## Hình ảnh MRI (S2, tr. 478; S1, tr. 88)
- Đặc điểm khối ác tính; mọi buồng tim; nhiều buồng 22%.
- Tín hiệu không đặc hiệu: thường T1 thấp, T2 cao; 60% ngấm thuốc, không đồng nhất.
- **Melanoma:** T1 cao, T2 thấp do melanin.
- Màng ngoài tim: dày dạng nốt, tràn dịch máu (S2, tr. 480).

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

## Chẩn đoán phân biệt
[Huyết khối](#/benh/huyet-khoi-tim) (bệnh nhân ung thư tăng đông, catheter tĩnh mạch trung tâm), [u ác nguyên phát](#/benh/u-ac-tinh-tim), [tổn thương do điều trị ung thư](#/benh/doc-tinh-ung-thu).

## Mẫu kết luận
“Nhiều khối trong thành thất phải và màng ngoài tim, lớn nhất 3 cm, T1 thấp, T2 cao, ngấm không đều trên LGE; tràn dịch màng ngoài tim vừa. Trên nền ung thư phổi đã biết, phù hợp di căn tim – màng ngoài tim.”
`,
});
