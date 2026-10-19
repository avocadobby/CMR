/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "van-ba-la-dmp",
  ten: "Bệnh van ba lá và van động mạch phổi",
  tenEn: "Tricuspid and pulmonary valve disease",
  vietTat: ["TR", "PR", "PS"],
  nhom: "van-tim",
  thuTu: 5,
  tuKhoa: ["hở ba lá", "hở van động mạch phổi", "hẹp van động mạch phổi", "carcinoid", "Ebstein", "Fallot", "mũ Phổ", "Prussian helmet"],
  moTaNgan: "Định lượng hở ba lá/phổi và tác động lên thất phải — thế mạnh riêng của MRI.",
  protocol: ["P10", "P11"],
  thoiGian: "40–50 phút",
  tuongPhan: false,
  dauHieu: ["Hở ba lá: thể tích hở = SV thất phải − SV qua ĐMP (PC)", "Hở phổi: dòng ngược trên PC thân ĐMP; nặng khi RegF > 30%", "Hở ba lá/phổi nặng: dòng **phẳng** (laminar), khó thấy trên cine", "Carcinoid: lá van ba lá/phổi dày, co rút, bất động", "Hẹp van phổi bẩm sinh: lá mở vòm, dính đầu (“mũ Phổ”), giãn sau hẹp (ĐMP trái)"],
  dau: ["gian-that-phai", "nhi-gian"],
  tomTat: {"lamSang": "Hở ba lá thường thứ phát (giãn vòng van); hở phổi sau mổ Fallot/nong van; carcinoid", "hinhThai": "Thất phải, nhĩ phải giãn; tĩnh mạch chủ dưới, xoang vành giãn", "lge": "—", "mapping": "—", "phanBiet": "Luôn tìm Ebstein khi hở ba lá nặng"},
  nguon: ["S1, tr. 80, 104–105", "S2, tr. 443–457"],
  hinh: [{"src": "hinh/van-ba-la-dmp/s1-80.jpg", "chuThich": "Bệnh tim carcinoid: lá van ba lá dày, giảm di động nặng gây hở ba lá tự do (cine 4CH tâm trương, tâm thu).", "nguon": "S1, tr. 80"}, {"src": "hinh/van-ba-la-dmp/s2-451-0.jpg", "chuThich": "Hở ba lá: trục ngắn qua đầu lá van thì tâm thu cho thấy khe không áp.", "nguon": "S2, tr. 451"}, {"src": "hinh/van-ba-la-dmp/s2-451-1.jpg", "chuThich": "Thất phải giãn do hở van động mạch phổi nặng (4CH).", "nguon": "S2, tr. 451"}, {"src": "hinh/van-ba-la-dmp/s2-448-1.jpg", "chuThich": "Luồng phụt tốc độ cao do hẹp van động mạch phổi trên RVOT thì tâm thu.", "nguon": "S2, tr. 448"}],
  noiDung: `
## Tổng quan
- **Hở ba lá:** thường thứ phát do giãn vòng van (giãn thất phải, nhĩ phải); nguyên phát do Ebstein, carcinoid, viêm nội tâm mạc, dây điện cực.
- **Hở van động mạch phổi:** hiếm ở van tự nhiên; chủ yếu sau phẫu thuật/nong van động mạch phổi (Fallot).
- **Hẹp van động mạch phổi:** bẩm sinh (van, dưới van, trên van), hiếm khi thấp tim, carcinoid (S1, tr. 104–105; S2, tr. 444).

## Đặc điểm lâm sàng
Khó thở gắng sức, mệt; ứ huyết tĩnh mạch (gan to, cổ trướng, phù) khi thất phải rối loạn chức năng (S2, tr. 445).

## Chỉ định MRI tim
MRI là chuẩn tham chiếu cho thể tích và chức năng thất phải; định lượng hở để quyết định thay van động mạch phổi (sau Fallot), phẫu thuật van ba lá.

## Protocol chụp
[P10](#/protocol/P10) hoặc [P11](#/protocol/P11) (S1, tr. 80):
- **Van động mạch phổi:** RVOT 2 mặt phẳng trực giao; cine và PC qua mặt phẳng van.
- **Van ba lá:** 4CH, 2 buồng thất phải, RVOT; cine qua mặt phẳng van ba lá (khe hở, lỗ hở, hẹp).

## Hình ảnh MRI (S1, tr. 80, 104–105)
- Van ba lá: 3 lá trước, sau, vách; vòng van, bộ máy dưới van và co bóp thành thất phải đều có thể tham gia.
- Hở nặng: thất phải, nhĩ phải giãn; tĩnh mạch chủ dưới và xoang vành giãn; vách nảy tâm trương (quá tải thể tích).
- Hở phổi nặng sau Fallot: giãn thất phải, RVOT, thân và nhánh ĐMP.
- Hẹp van phổi: lá di động, dính đầu (“mũ Phổ”); giãn sau hẹp ưu thế ĐMP trái; phì đại thất phải (> 5 mm), vách dẹt thì tâm thu.
- **Carcinoid:** lá van ba lá dày, giảm di động nặng → hở tự do (S1, tr. 80).

## Định lượng (S1, tr. 80)
- Hở phổi: thể tích hở từ PC ngay trên van ĐMP; hoặc SV thất phải − SV thất trái.
- Hở ba lá: SV thất phải − SV qua ĐMP (PC); hoặc SV thất phải − SV thất trái (khi hở một van).

| | Nhẹ | Vừa | Nặng |
| --- | --- | --- | --- |
| Hở van động mạch chủ, động mạch phổi — phân suất hở (%) | 0–15 | 16–30 | > 30 |
| Hở van động mạch chủ, động mạch phổi — thể tích hở (ml/nhịp) | 0–20 | 21–40 | > 40 |
| Hở hai lá, ba lá — phân suất hở (%) | 0–20 | 21–40 | > 40 |
| Hở hai lá, ba lá — thể tích hở (ml/nhịp) | 0–30 | 31–60 | > 60 |

Gợi ý phân độ trên MRI (S2, tr. 452). Hở chủ nặng kèm EDVi thất trái > 130 ml/m²; hở hai lá nặng kèm EDVi > 100 ml/m².

## Bẫy và lỗi thường gặp
- Dòng hở nặng thường **phẳng**, khó thấy trên cine → dựa vào định lượng (S1, tr. 104).
- Luôn kiểm tra [Ebstein](#/benh/ebstein) khi hở ba lá nặng (S1, tr. 104).

## Mẫu kết luận
“Sau sửa Fallot: hở van động mạch phổi tự do, dòng ngược 48 ml, phân suất hở 42%. Thất phải giãn (EDVi 165 ml/m²), EF 45%. Kết luận: hở van động mạch phổi nặng với giãn thất phải đáng kể.”
`,
});
