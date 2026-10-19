/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "viem-co-tim",
  ten: "Viêm cơ tim",
  tenEn: "Myocarditis",
  vietTat: ["VCT"],
  nhom: "viem-tham-nhiem",
  thuTu: 1,
  tuKhoa: ["Lake Louise", "LLC", "virus", "myocarditis", "viêm cơ tim cấp", "troponin", "đau ngực người trẻ", "sau tiêm vắc xin", "perimyocarditis", "viêm màng ngoài cơ tim"],
  moTaNgan: "Tiêu chuẩn Lake Louise: phù + tổn thương cơ tim (LGE/T1/ECV) kiểu không thiếu máu.",
  protocol: ["P5"],
  thoiGian: "40–50 phút",
  dauHieu: ["LGE **dưới thượng tâm mạc / giữa thành**, nhiều ổ, chừa lớp dưới nội mạc; hay ở thành **dưới bên, bên**", "Phù: T2 STIR tăng (tỉ số cơ tim/cơ xương ≥ 2,0) hoặc T2 mapping tăng", "T1 native, ECV tăng ở vùng tổn thương", "Hỗ trợ: tràn dịch màng ngoài tim, giảm chức năng thất trái"],
  dau: ["lge-duoi-thuong-tam-mac", "lge-giua-thanh", "lge-dom", "t2-tang", "t1-tang", "ecv-tang", "tran-dich-mnt", "lge-mang-ngoai-tim", "rlvd-vung", "giam-ef"],
  lgeVung: [4, 5, 11, 12, 6],
  lgeGhi: "Dưới thượng tâm mạc thành dưới bên – bên",
  tomTat: {"lamSang": "Người trẻ, sau nhiễm virus; đau ngực, troponin tăng, mạch vành bình thường; hoặc suy tim, rối loạn nhịp", "hinhThai": "Thường bình thường; có thể giảm động vùng, giảm EF, tràn dịch", "lge": "Dưới thượng tâm mạc/giữa thành, đốm, thành dưới bên; thường kèm màng ngoài tim", "mapping": "T2, T1 native, ECV tăng", "phanBiet": "Nhồi máu: LGE luôn chạm lớp dưới nội mạc, theo mạch vành"},
  nguon: ["S1, tr. 65–66, 95", "S2, tr. 290–308 (Myocarditis)", "G2 (Lake Louise 2018)"],
  hinh: [{"src": "hinh/viem-co-tim/s1-66.jpg", "chuThich": "Viêm cơ tim, 23 tuổi: phù dưới thượng tâm mạc trên T2 STIR (A); ngấm sớm dạng đốm trên EGE (B); LGE dưới thượng tâm mạc thành dưới, dưới bên, bên và trước mỏm (C–E).", "nguon": "S1, tr. 66"}, {"src": "hinh/viem-co-tim/s2-293.jpg", "chuThich": "Lake Louise dương tính: tăng tín hiệu T2 dưới thượng tâm mạc (a), tăng ngấm sớm (b), LGE dưới thượng tâm mạc thành bên kiểu không thiếu máu (c).", "nguon": "S2, tr. 293"}, {"src": "hinh/viem-co-tim/s2-295.jpg", "chuThich": "Viêm cơ tim cấp nặng: T2 tăng (a), T2 mapping 89 ms (b), LGE nhiều ổ (c), T1 native 1048 ms (d), T1 sau tiêm (e), ECV 43% (f).", "nguon": "S2, tr. 295"}],
  noiDung: `
## Tổng quan
Bệnh viêm cơ tim kèm rối loạn chức năng tim (WHO). Chẩn đoán xác định bằng sinh thiết cơ tim (Dallas, hóa mô miễn dịch > 14 bạch cầu/mm², lympho T > 7/mm²) nhưng MRI là phương pháp không xâm lấn chủ đạo. Diễn tiến 3 pha: tổn thương cấp (vài ngày) → đáp ứng miễn dịch (vài tuần–tháng) → viêm kéo dài, tái cấu trúc thành bệnh cơ tim giãn (S2, tr. 291–292).

## Đặc điểm lâm sàng
- Rất đa dạng: từ không triệu chứng tới đột tử. Đau ngực, khó thở, hồi hộp, mệt.
- Gợi ý: nhiễm virus gần đây, tiêm vắc xin, dị ứng, bệnh viêm hệ thống.
- Biểu hiện giống nhồi máu (ST chênh, troponin tăng, mạch vành bình thường): viêm cơ tim là nguyên nhân thường gặp nhất của MINOCA (33%) (S2, tr. 290, 292).
- Có thể để lại sẹo — 25% người sống sót sau ngừng tim có sẹo kiểu viêm cơ tim (S2, tr. 290).

## Chỉ định MRI tim
- Nghi viêm cơ tim ở bệnh nhân ổn định (ESC).
- Phân biệt với nhồi máu, Takotsubo trong MINOCA.
- Suy tim không rõ nguyên nhân: MRI làm “người gác cổng” trước sinh thiết.
- Không trì hoãn sinh thiết bằng MRI khi suy tim cấp, đe dọa tính mạng (S2, tr. 292).

## Protocol chụp
[P5 · Mô học cơ tim](#/protocol/P5) (S1, tr. 65; S2, tr. 293–296):
1. Cine trục ngắn toàn bộ + trục dài.
2. **Trước tiêm:** T2 STIR (≥ 3 lát trục ngắn, cuộn có hiệu chỉnh tín hiệu, xác nhận ở mặt phẳng trực giao); T2 mapping và T1 native mapping (trục ngắn toàn bộ + trục dài).
3. EGE (tùy chọn): T1 FSE trước và trong vòng 1 phút sau tiêm, lấy cơ xương trong FOV.
4. LGE khoảng 10 phút, trục ngắn toàn bộ + trục dài; xác nhận tổn thương ở mặt phẳng trực giao.
5. T1 sau tiêm ≥ 15 phút + hematocrit → ECV.

## Hình ảnh MRI
- **Phù:** tăng tín hiệu T2 khu trú hoặc lan tỏa; T2 mapping tăng.
- **Sung huyết/rò mao mạch:** tăng ngấm sớm toàn bộ (EGE).
- **Hoại tử/sẹo:** LGE dạng đốm, không liên tục, ở dưới thượng tâm mạc hoặc giữa thành, thường thành bên/dưới bên hoặc vách; hiếm khi dưới nội mạc hay xuyên thành (do co thắt vi mạch) (S2, tr. 297; S1, tr. 95).
- LGE **không phân biệt** được cấp hay mạn → cần phù (T2) để xác định viêm cấp.
- Thường kèm ngấm thuốc/tràn dịch màng ngoài tim (viêm màng ngoài cơ tim).

## Tiêu chuẩn chẩn đoán
### Lake Louise 2009 (S1, tr. 65; S2, tr. 293)
Khi nghi viêm cơ tim trên lâm sàng, MRI phù hợp viêm cơ tim nếu có **≥ 2/3**:
1. Tăng tín hiệu T2 khu trú hoặc toàn bộ (tỉ số cơ tim/cơ xương ≥ 2,0).
2. Tăng ngấm sớm toàn bộ (EGE): tỉ số ≥ 4,0 hoặc ngấm tuyệt đối ≥ 45%.
3. ≥ 1 ổ LGE phân bố không thiếu máu.

Chỉ có tiêu chuẩn 3 → tổn thương tế bào cơ/sẹo do viêm. **Chụp lại sau 1–2 tuần** nếu: không có tiêu chuẩn nào nhưng mới khởi phát và lâm sàng gợi ý mạnh; hoặc chỉ có 1 tiêu chuẩn. Rối loạn chức năng thất trái, tràn dịch màng ngoài tim là bằng chứng hỗ trợ.

Hiệu năng: nhạy 67%, đặc hiệu 91%, chính xác 78% (S2, tr. 298).

### Lake Louise 2018 (G2)
Cần **1 tiêu chuẩn T2** (T2 mapping tăng hoặc T2 STIR tăng khu trú/toàn bộ) **và 1 tiêu chuẩn T1** (T1 native tăng, ECV tăng, hoặc LGE kiểu không thiếu máu). Một tiêu chuẩn đơn lẻ vẫn có thể ủng hộ viêm cơ tim trong bệnh cảnh phù hợp. Hỗ trợ: tràn dịch/ngấm màng ngoài tim, rối loạn vận động thất trái.

## Chẩn đoán phân biệt
| Bệnh | Điểm phân biệt |
| --- | --- |
| [Nhồi máu cơ tim cấp](#/benh/nmct-cap) | Phù và LGE chứa lớp dưới nội mạc, theo vùng mạch vành |
| [Takotsubo](#/benh/takotsubo) | Phình mỏm/giữa thất, phù lan tỏa, không LGE |
| [Sarcoidosis](#/benh/sarcoidosis) | LGE vách đáy, thành thất phải, “dạng khối”; hạch rốn phổi, blốc nhĩ thất |
| [ARVC thể trái](#/benh/arvc) / [loạn dưỡng cơ](#/benh/loan-duong-co) | LGE dưới thượng tâm mạc thành dưới bên giống hệt nhưng không phù, bệnh cảnh mạn |
| [DCM](#/benh/dcm) | LGE giữa thành vách dạng sọc, không phù |
| [Bệnh hệ thống](#/benh/benh-he-thong) (lupus, viêm mạch) | Bệnh nền; LGE có thể cả kiểu thiếu máu |

## Tiên lượng
- EF thất trái thấp là yếu tố dự báo biến cố mạnh; rối loạn chức năng thất phải dự báo tử vong và ghép tim (S2, tr. 298; S1, tr. 65).
- Có phù lúc đầu dự báo cải thiện EF sau 12 tháng.
- LGE giữa thành vách, LGE còn tồn tại khi theo dõi: tiên lượng xấu hơn.

## Bẫy và lỗi thường gặp (S2, tr. 294)
- T2 STIR: máu chảy chậm sát nội mạc gây tăng tín hiệu giả; phân biệt cơ xương với mỡ dưới da khi đặt vùng tham chiếu.
- EGE: viêm cơ (myositis) kèm theo làm giảm độ nhạy; nhịp thở không đều, loạn nhịp làm ảnh kém.
- LGE: lát đáy qua đường ra giả LGE vách; chỗ nối dải điều hòa giả LGE vách đáy.
- Mỡ thượng tâm mạc sáng trên LGE → dùng xóa mỡ khi nghi LGE dưới thượng tâm mạc.
- Chụp quá muộn sau khởi phát → phù đã hết, độ nhạy giảm.

## Mẫu kết luận
**Dương tính:** “Phù dưới thượng tâm mạc thành dưới bên đoạn đáy và thành bên đoạn giữa–mỏm (T2 STIR, T2 mapping 61 ms); T1 native tăng (1080 ms) và LGE dưới thượng tâm mạc dạng đốm cùng vị trí, chừa lớp dưới nội mạc; ECV 34%. EF 55%. Tràn dịch màng ngoài tim lượng ít. Kết luận: thỏa tiêu chuẩn Lake Louise 2018 — phù hợp viêm cơ tim cấp.”

**Âm tính:** “Không có phù, không tăng T1/T2, không LGE. Chức năng hai thất bình thường. Không có bằng chứng viêm cơ tim trên MRI; nếu triệu chứng mới khởi phát và nghi ngờ lâm sàng cao, cân nhắc chụp lại sau 1–2 tuần.”
`,
});
