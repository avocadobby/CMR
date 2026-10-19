/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "luong-thong",
  ten: "Luồng thông trong và ngoài tim (ASD, VSD, PDA)",
  tenEn: "Shunts: atrial/ventricular septal defects, PDA, partial anomalous pulmonary venous connection",
  vietTat: ["ASD", "VSD", "PDA", "PAPVC", "PAPVD", "AVSD"],
  nhom: "bam-sinh",
  thuTu: 1,
  tuKhoa: ["thông liên nhĩ", "thông liên thất", "còn ống động mạch", "xoang tĩnh mạch", "sinus venosus", "Qp/Qs", "hồi lưu tĩnh mạch phổi bất thường", "scimitar", "lỗ bầu dục"],
  moTaNgan: "Qp/Qs bằng PC (chuẩn vàng không xâm lấn), vị trí lỗ thông, hồi lưu tĩnh mạch phổi bất thường kèm theo.",
  protocol: ["P11"],
  thoiGian: "45–60 phút",
  dauHieu: ["**Qp/Qs** bằng PC: ĐMP (Qp) / ĐMC (Qs); > 1,5 thường có ý nghĩa; > 1,8 là “cờ đỏ”", "Thông liên nhĩ, PAPVC: giãn nhĩ phải, thất phải, ĐMP (quá tải thể tích); vách nảy tâm trương", "Thông liên thất, PDA: giãn nhĩ trái, thất trái", "Luôn tìm **tĩnh mạch phổi đổ bất thường** (hay kèm thông liên nhĩ xoang tĩnh mạch)"],
  dau: ["shunt", "gian-that-phai", "nhi-gian", "gian-that-trai", "vach-nay"],
  tomTat: {"lamSang": "Khó thở, giảm gắng sức, rung nhĩ, tăng áp phổi; nhiều khi phát hiện muộn ở người lớn", "hinhThai": "Giãn buồng tim nhận dòng thông", "lge": "—", "mapping": "—", "phanBiet": "Giãn thất phải không có luồng thông: ARVC, tăng áp phổi, hở ba lá/phổi"},
  nguon: ["S1, tr. 102–104", "S2, tr. 509–523 (Assessing shunts; pulmonary circulation)"],
  hinh: [{"src": "hinh/luong-thong/s2-512-0.jpg", "chuThich": "Giãn thất phải ở bệnh nhân thông liên nhĩ (cine trục ngắn).", "nguon": "S2, tr. 512"}, {"src": "hinh/luong-thong/s2-513-0.jpg", "chuThich": "PC in-plane: dòng qua lỗ thông liên nhĩ (mũi tên).", "nguon": "S2, tr. 513"}, {"src": "hinh/luong-thong/s2-518-1.jpg", "chuThich": "MRA dựng hình 3D: hồi lưu tĩnh mạch phổi bất thường với tĩnh mạch góp đi xuống đổ vào tĩnh mạch chủ dưới.", "nguon": "S2, tr. 518"}],
  noiDung: `
## Tổng quan
Luồng thông trong tim: thông liên nhĩ (lỗ thứ phát ở hố bầu dục, xoang tĩnh mạch, xoang vành), thông sàn nhĩ thất, thông liên thất, rò mạch vành – buồng tim. Ngoài tim: còn ống động mạch, cửa sổ chủ – phổi, tĩnh mạch phổi đổ bất thường bán phần. Thông liên nhĩ, thông liên thất, còn ống động mạch lần lượt chiếm 30–40%, 30–60%, 5–10% luồng thông đơn độc (S2, tr. 509).

## Đặc điểm lâm sàng
Phụ thuộc mức thông (Qp/Qs), tình trạng giường mạch phổi và chức năng tim. Thông liên nhĩ thường phát hiện muộn ở người lớn (khó thở, rung nhĩ). Thông lớn kéo dài gây tăng áp phổi, đảo shunt (Eisenmenger).

## Chỉ định MRI tim
- Định lượng Qp/Qs và tác động lên thất (chuẩn vàng không xâm lấn) (S2, tr. 511).
- Tìm thông liên nhĩ xoang tĩnh mạch, tĩnh mạch phổi đổ bất thường (dễ bỏ sót trên siêu âm).
- Đánh giá trước đóng qua da: kích thước lỗ, gờ xung quanh (S1, tr. 104).

## Protocol chụp
[P11](#/protocol/P11) (S1, tr. 102): giải phẫu; cine thất trái (cả nhĩ), thất phải (ngang, RVOT, đường vào/ra, 2 buồng); cine thân và nhánh ĐMP; PC thân ĐMP và ĐMC; 3D whole-heart hoặc MRA (tĩnh mạch phổi); LGE. Thêm cine/PC qua vách liên nhĩ (en face).

## Đo Qp và Qs (S2, tr. 510–512)
- Qp = tổng dòng tĩnh mạch phổi; Qs = tổng dòng tĩnh mạch chủ trên và dưới (đo sát tim).
- Thực hành: Qp = thân ĐMP, Qs = ĐMC lên (đúng với thông liên nhĩ, thông liên thất; **không** đúng với còn ống động mạch, cửa sổ chủ – phổi, tuần hoàn bàng hệ — khi đó dùng nhánh ĐMP, tĩnh mạch phổi, tĩnh mạch chủ).
- Kiểm tra chéo: so với SV thất phải và thất trái trên cine (khi không có hở van).
- Dùng [máy tính Qp/Qs](#/cong-cu/may-tinh).

## Hình ảnh MRI
- Thông liên nhĩ, PAPVC (thông trước van ba lá): giãn nhĩ phải, thất phải, ĐMP, tĩnh mạch chủ dưới, xoang vành; thường ĐMP > ĐMC (S1, tr. 104).
- Thông liên thất, còn ống động mạch (thông sau van ba lá): giãn nhĩ trái, thất trái.
- Dòng qua lỗ thông trên PC in-plane hoặc en face.
- Hội chứng Scimitar: tĩnh mạch phổi phải đổ vào tĩnh mạch chủ dưới.

## Tiêu chuẩn
“Cờ đỏ” trong thông liên nhĩ (S1, tr. 104): giãn/rối loạn chức năng thất phải đáng kể; Qp/Qs > 1,8; tăng áp phổi. Đóng qua da cần gờ đủ quanh lỗ, nhất là gờ dưới.

## Chẩn đoán phân biệt
[Giãn thất phải](#/benh/gian-that-phai) do nguyên nhân khác; luôn kiểm tra [Ebstein](#/benh/ebstein) (hay kèm thông liên nhĩ) (S1, tr. 104).

## Bẫy và lỗi thường gặp
- Sai số nền (background offset) trên PC; kiểm tra chéo bằng nhiều vị trí đo.
- Qp/Qs ≠ 1 trên PC nên coi là có luồng thông cho tới khi chứng minh ngược lại (S2, tr. 511).

## Mẫu kết luận
“Thông liên nhĩ thể xoang tĩnh mạch trên, kèm tĩnh mạch phổi trên phải đổ vào tĩnh mạch chủ trên. Qp/Qs = 2,1 (PC). Nhĩ phải, thất phải giãn (EDVi 145 ml/m²), EF thất phải 52%. Kết luận: luồng thông trái – phải đáng kể, có chỉ định can thiệp.”
`,
});
