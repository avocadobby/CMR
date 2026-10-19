/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "nmct-cu-song-con",
  ten: "Nhồi máu cơ tim cũ và đánh giá sống còn",
  tenEn: "Chronic myocardial infarction & myocardial viability",
  vietTat: ["viability"],
  nhom: "thieu-mau",
  thuTu: 2,
  tuKhoa: ["sống còn", "viability", "ngủ đông", "hibernation", "sẹo", "transmurality", "xuyên thành", "mỡ thay thế", "bệnh cơ tim thiếu máu", "ischaemic cardiomyopathy"],
  moTaNgan: "Mức xuyên thành của LGE dự đoán khả năng hồi phục sau tái thông.",
  protocol: ["P1", "P4"],
  thoiGian: "30–45 phút (60 phút nếu dobutamine)",
  dauHieu: ["LGE dưới nội mạc hoặc xuyên thành theo vùng mạch vành", "Mức xuyên thành LGE < 25%: nhiều khả năng hồi phục; > 50%: ít khả năng hồi phục", "Thành mỏng < 5,5 mm không đồng nghĩa không sống còn nếu ít sẹo", "Mỡ thay thế trong sẹo cũ: T1 cao, xóa khi xóa mỡ, T1 native thấp"],
  dau: ["lge-duoi-noi-mac", "lge-xuyen-thanh", "rlvd-vung", "gian-that-trai", "giam-ef", "mo", "huyet-khoi", "phinh-mom"],
  lgeVung: [1, 2, 7, 8, 13, 14, 17],
  lgeGhi: "Ví dụ nhồi máu vùng LAD",
  tomTat: {"lamSang": "Tiền sử nhồi máu, suy tim, rối loạn chức năng thất trái do bệnh mạch vành", "hinhThai": "Mỏng thành, không/giảm động vùng, giãn thất trái, có thể phình, huyết khối", "lge": "Dưới nội mạc → xuyên thành, theo vùng mạch vành", "mapping": "T1, ECV tăng ở sẹo; T1 thấp nếu mỡ thay thế; T2 bình thường", "phanBiet": "LGE luôn chạm lớp dưới nội mạc (khác viêm cơ tim, DCM)"},
  nguon: ["S1, tr. 24–27, 31–34, 93–94 (LGE, dobutamine, mức xuyên thành, mỡ thay thế)", "S2, tr. 188–197 (Viability)"],
  hinh: [{"src": "hinh/nmct-cu-song-con/s1-33.jpg", "chuThich": "Các mức xuyên thành của nhồi máu trên LGE: vi nhồi máu, 25–50%, 50–75%, 100%.", "nguon": "S1, tr. 33"}, {"src": "hinh/nmct-cu-song-con/s1-34.jpg", "chuThich": "Mỡ thay thế trong nhồi máu cũ: tín hiệu cao trên T1 black blood, bị xóa khi xóa mỡ; T1 native thấp ở thành dưới.", "nguon": "S1, tr. 34"}, {"src": "hinh/nmct-cu-song-con/s2-191-1.jpg", "chuThich": "Xác suất hồi phục co bóp theo mức xuyên thành LGE trước tái thông (theo Kim 2000).", "nguon": "S2, tr. 191"}, {"src": "hinh/nmct-cu-song-con/s2-185-1.jpg", "chuThich": "Protocol dobutamine gắng sức: cine 3 lát trục ngắn + 4CH, 3CH, 2CH ở mỗi mức liều 5 → 40 µg/kg/phút ± atropine; rối loạn vận động mới (mũi tên) ở liều cao.", "nguon": "S2, tr. 185"}, {"src": "hinh/nmct-cu-song-con/s2-192-0.jpg", "chuThich": "Cải thiện EF sau tái thông ở bệnh nhân có cơ tim còn sống so với không còn sống, dự đoán bằng MRI.", "nguon": "S2, tr. 192"}],
  noiDung: `
## Tổng quan
Sau nhồi máu, vùng hoại tử được thay bằng sẹo. Cơ tim giảm co bóp có thể là **sẹo** (không hồi phục) hoặc **ngủ đông/choáng** (còn sống, hồi phục khi tái thông). MRI là phương pháp lựa chọn để phát hiện nhồi máu và đánh giá sống còn, dựa trên LGE và dobutamine liều thấp (S2, tr. 188).

## Đặc điểm lâm sàng
- Tiền sử nhồi máu cơ tim, suy tim, EF giảm do bệnh mạch vành (bệnh cơ tim thiếu máu).
- Cần quyết định tái thông (PCI, mổ bắc cầu) hay điều trị nội khoa; chọn bệnh nhân đặt ICD, CRT.

## Chỉ định MRI tim
- Đánh giá sống còn trước tái thông.
- Phân biệt bệnh cơ tim thiếu máu với bệnh cơ tim giãn.
- Tìm huyết khối, phình thất, hở hai lá thiếu máu.
- Xác định nền rối loạn nhịp (sẹo, vùng xám) trước triệt đốt.

## Protocol chụp
[P1 · Chức năng + LGE](#/protocol/P1); thêm dobutamine liều thấp ([P4](#/protocol/P4)) khi LGE xuyên thành 25–75% (vùng “lưng chừng”).
- Cine trục ngắn và trục dài đầy đủ; đo độ dày thành cuối tâm trương.
- LGE ≥ 10 phút; EGE để tìm huyết khối.
- Mỡ thay thế: T1 black blood ± xóa mỡ, T1 native (S1, tr. 34).

## Hình ảnh MRI
- **LGE**: bắt đầu từ lớp dưới nội mạc, lan về thượng tâm mạc theo thời gian thiếu máu (hiện tượng “sóng lan”); phân bố theo vùng mạch vành (S2, tr. 124; S1, tr. 93).
- Mức xuyên thành mỗi vùng: 0, 1–25%, 26–50%, 51–75%, 76–100% (S1, tr. 33; S2, tr. 124–125).
- **Cine:** mỏng thành, giảm/không/loạn động; giãn thất; phình thất.
- **Dobutamine liều thấp** (5–10 µg/kg/ph): vùng cải thiện ≥ 1 mức = còn sống; đáp ứng hai pha (cải thiện rồi xấu đi ở liều cao) = còn sống + thiếu máu (S2, tr. 188; S1, tr. 32).
- **Mỡ thay thế** trong nhồi máu cũ: tín hiệu cao trên T1 black blood, xóa khi xóa mỡ; T1 native thấp (S1, tr. 34).
- **Huyết khối:** khối không ngấm thuốc trên EGE/LGE ở vùng không/loạn động, nhất là mỏm (S1, tr. 90).

## Tiêu chuẩn đánh giá sống còn
| Mức xuyên thành LGE | Khả năng hồi phục co bóp sau tái thông |
| --- | --- |
| 0% | Cao (khoảng 80%) |
| 1–25% | Cao |
| 26–50% | Trung bình |
| 51–75% | Thấp |
| > 75% | Rất thấp (dưới 10%) |

Theo Kim và cộng sự, xác suất hồi phục giảm dần theo mức xuyên thành (S2, tr. 190–191).
- Độ dày thành cuối tâm trương < 5,5 mm: độ nhạy 96% nhưng độ đặc hiệu chỉ 38% để dự đoán không hồi phục; 18% vùng mỏng có ít sẹo và vẫn hồi phục (S2, tr. 188, 190).
- Vùng LGE 25–75%: dobutamine liều thấp giúp phân định thêm.

## Chẩn đoán phân biệt
| Bệnh | Điểm phân biệt |
| --- | --- |
| [Bệnh cơ tim giãn](#/benh/dcm) | LGE giữa thành vách hoặc không có; không theo vùng mạch vành |
| [Viêm cơ tim](#/benh/viem-co-tim) (sẹo cũ) | LGE dưới thượng tâm mạc/giữa thành, chừa lớp dưới nội mạc |
| [Sarcoidosis](#/benh/sarcoidosis) | LGE dạng đốm, có thể xuyên thành nhưng không theo vùng mạch vành; vách đáy, thành thất phải |
| Nhồi máu do tắc mạch (MINOCA) | LGE kiểu nhồi máu nhưng mạch vành không hẹp — xem [MINOCA](#/benh/minoca) |

## Tiên lượng
- EF và thể tích thất trái, khối lượng sẹo, vùng xám quanh sẹo dự báo tử vong và rối loạn nhịp (S2, tr. 193–197).
- Phân tích của Gerber: bệnh nhân có cơ tim sống còn mà không được tái thông hoàn toàn có sống còn kém hơn (S2, tr. 193).

## Bẫy và lỗi thường gặp
- Sẹo dưới nội mạc mỏng dễ lẫn với máu sáng → đối chiếu cine, dùng LGE máu đen nếu có (S1, tr. 35; S2, tr. 123).
- Chọn TI sai làm đánh giá sai mức xuyên thành.
- Mỡ thay thế cũng sáng trên LGE (T1 ngắn) → cần chuỗi xóa mỡ để phân biệt (S2, tr. 123).

## Mẫu kết luận
“Thất trái giãn (EDVi 120 ml/m²), EF 32%, không động thành trước, trước vách và mỏm. LGE xuyên thành > 75% ở vách mỏm và mỏm (4 vùng), 26–50% ở thành trước đoạn đáy và giữa (2 vùng). Không có huyết khối. Kết luận: nhồi máu cũ vùng LAD; thành trước đoạn đáy–giữa còn sống, vùng mỏm không còn sống.”
`,
});
