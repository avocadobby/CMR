/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "benh-mach-vanh-man",
  ten: "Bệnh mạch vành mạn – thiếu máu cơ tim cảm ứng",
  tenEn: "Chronic coronary artery disease / inducible ischaemia",
  vietTat: ["CAD", "IHD"],
  nhom: "thieu-mau",
  thuTu: 1,
  tuKhoa: ["đau thắt ngực", "angina", "stress perfusion", "adenosine", "thiếu máu cục bộ", "hẹp mạch vành", "CE-MARC"],
  moTaNgan: "Tưới máu gắng sức + LGE: phát hiện thiếu máu cảm ứng và sẹo, quyết định tái thông.",
  protocol: ["P3", "P4"],
  thoiGian: "45–60 phút",
  stress: "adenosine / regadenoson (hoặc dobutamine)",
  dauHieu: ["Khuyết tưới máu **dưới nội mạc** khi gắng sức, theo vùng cấp máu mạch vành, kéo dài nhiều nhịp", "Tưới máu lúc nghỉ bình thường, **không có LGE** tương ứng → thiếu máu cảm ứng", "Khuyết tưới máu + LGE cùng vùng → sẹo (± thiếu máu quanh sẹo)", "≥ 2 vùng/16 hoặc ≥ 10% cơ tim thiếu máu: gánh nặng thiếu máu có ý nghĩa tiên lượng"],
  dau: ["rlvd-vung", "lge-duoi-noi-mac", "lge-xuyen-thanh"],
  tomTat: {"lamSang": "Đau thắt ngực gắng sức, nhiều yếu tố nguy cơ", "hinhThai": "Thường bình thường lúc nghỉ; có thể rối loạn vận động vùng nếu có sẹo", "lge": "Không có, hoặc dưới nội mạc/xuyên thành theo vùng mạch vành", "mapping": "Không cần cho chẩn đoán", "phanBiet": "Ảnh giả viền tối: thoáng qua, cả lúc nghỉ, chỉ vài pixel"},
  nguon: ["S1, tr. 23, 25–30 (tưới máu, vùng cấp máu, ca minh họa)", "S2, tr. 179–201 (Chronic ischaemic heart disease)"],
  hinh: [{"src": "hinh/benh-mach-vanh-man/s1-29.jpg", "chuThich": "Thiếu máu vùng LAD: khuyết tưới máu gắng sức thành trước và trước vách (A), tưới máu nghỉ bình thường (B), không LGE (C).", "nguon": "S1, tr. 29"}, {"src": "hinh/benh-mach-vanh-man/s1-30.jpg", "chuThich": "Thiếu máu rộng vùng LAD và RCA (10/17 vùng) ở bệnh nhân nữ 72 tuổi; LGE âm tính → cơ tim ngủ đông, khả năng hồi phục sau tái thông.", "nguon": "S1, tr. 30"}],
  noiDung: `
## Tổng quan
Bệnh tim thiếu máu cục bộ mạn do hẹp động mạch vành thượng tâm mạc làm giảm dự trữ lưu lượng khi gắng sức. Theo “thác thiếu máu”, rối loạn tưới máu xuất hiện **trước** rối loạn vận động thành và thay đổi ECG, nên tưới máu gắng sức là phương pháp nhạy (S2, tr. 180–181).

## Đặc điểm lâm sàng
- Đau thắt ngực ổn định, khó thở khi gắng sức; có yếu tố nguy cơ tim mạch.
- ECG lúc nghỉ thường bình thường.
- MRI phù hợp với bệnh nhân xác suất bệnh mạch vành trung bình, hoặc đã biết bệnh mạch vành cần đánh giá ý nghĩa chức năng của hẹp.

## Chỉ định MRI tim
- Chẩn đoán thiếu máu cơ tim ở bệnh nhân đau ngực ổn định.
- Đánh giá ý nghĩa chức năng của hẹp mạch vành trung gian; định vị vùng thiếu máu trước tái thông.
- Phân tầng nguy cơ.
- Khi dùng cả 3 thành phần (cine, tưới máu, LGE), độ nhạy phát hiện bệnh mạch vành cao nhất (S2, tr. 187).

## Protocol chụp
Dùng [P3 · Tưới máu gắng sức](#/protocol/P3) (adenosine/regadenoson); khi chống chỉ định thuốc giãn mạch dùng [P4 · Dobutamine](#/protocol/P4) (S1, tr. 28, 31).
1. Định vị, mặt cắt chuẩn.
2. Tưới máu “dummy” không thuốc.
3. Tưới máu **gắng sức**: thuốc giãn mạch rồi bolus Gd 0,05–0,1 mmol/kg, ≥ 3 lát trục ngắn (“3 trong 5”).
4. Cine thất trái.
5. Tưới máu **nghỉ** (tùy chọn).
6. LGE.

> Chuẩn bị: nhịn caffeine 12–24 giờ; hỏi hen, block nhĩ thất; theo dõi huyết áp, ECG.

## Hình ảnh MRI
### Tưới máu
- Khuyết tưới máu thật: ở **lớp dưới nội mạc**, theo vùng mạch vành, kéo dài nhiều nhịp (tồn tại sau khi thuốc đã tới cơ tim), có thể lan xuyên thành khi nặng.
- Ảnh giả viền tối: xuất hiện ngay khi thuốc tới buồng tim, chỉ 1–2 pixel, thoáng qua, thường ở vách, có cả lúc nghỉ (S1, tr. 14; S2, tr. 184).

### Kết hợp tưới máu và LGE (thuật toán Klem) (S2, tr. 184–185)
| LGE | Tưới máu gắng sức | Tưới máu nghỉ | Kết luận |
| --- | --- | --- | --- |
| Có (kiểu nhồi máu) | — | — | Bệnh mạch vành (nhồi máu) |
| Không | Khuyết | Bình thường | Thiếu máu cảm ứng |
| Không | Khuyết | Khuyết giống hệt | Ảnh giả → không bệnh |
| Không | Bình thường | — | Không thiếu máu |

### Vùng cấp máu (S1, tr. 25–27)
- **LAD:** thành trước, trước vách, vách mỏm, mỏm.
- **LCx:** trước bên, dưới bên.
- **RCA:** thành dưới, dưới vách.
- Vùng mỏm và dưới bên có thể thay đổi theo ưu thế mạch vành.

## Tiêu chuẩn chẩn đoán
- Thiếu máu có ý nghĩa: khuyết tưới máu gắng sức ở ≥ 2 vùng trong 16 vùng (hoặc ≥ 10% khối cơ) — ngưỡng dùng trong thử nghiệm MR-INFORM; nên đối chiếu khuyến cáo hiện hành (G1).
- Báo cáo: số vùng, mức xuyên thành của khuyết tưới máu, vùng mạch vành, đối chiếu với sẹo (S1, tr. 28).

## Hiệu năng chẩn đoán
- Phân tích gộp: độ nhạy 89%, độ đặc hiệu 80% với bệnh mạch vành trên chụp mạch (S2, tr. 186).
- CE-MARC (752 bệnh nhân): MRI đa thông số nhạy hơn SPECT (86,5% so với 66,5%), AUC 0,89 so với 0,74 (S2, tr. 186–187).
- Dobutamine stress: độ nhạy 83%, đặc hiệu 86% (S2, tr. 187).

## Chẩn đoán phân biệt
| Tình huống | Điểm phân biệt |
| --- | --- |
| Ảnh giả viền tối | Thoáng qua, mỏng, có cả lúc nghỉ, xuất hiện trước đỉnh ngấm cơ tim |
| Rối loạn vi mạch (đái tháo đường, HCM, hẹp chủ) | Khuyết dưới nội mạc lan tỏa, không theo một vùng mạch vành |
| [Bệnh cơ tim phì đại](#/benh/hcm) | Khuyết tưới máu ở vùng phì đại, LGE giữa thành |
| [Nhồi máu cũ](#/benh/nmct-cu-song-con) | Khuyết cả lúc nghỉ, trùng vùng LGE |

## Tiên lượng
MRI tưới máu gắng sức bình thường có tiên lượng tốt (tỉ lệ biến cố thấp); thiếu máu và LGE là yếu tố dự báo biến cố độc lập (S2, tr. 193–194).

## Bẫy và lỗi thường gặp
- Đáp ứng adenosine không đủ (caffeine): kiểm tra “splenic switch-off”, nhịp tim tăng ≥ 10 l/ph hoặc huyết áp giảm ≥ 10 mmHg (S1, tr. 28).
- Lát cắt không chuẩn giữa gắng sức và nghỉ → dùng cùng vị trí.
- Bệnh 3 nhánh cân bằng có thể giảm tưới máu đồng đều → dễ âm tính giả khi chỉ đọc bằng mắt.

## Mẫu kết luận
**Dương tính:** “Khuyết tưới máu dưới nội mạc khi gắng sức adenosine ở thành trước và trước vách từ đáy tới mỏm (6/16 vùng, khoảng 30% cơ tim), tưới máu nghỉ bình thường, không có LGE: thiếu máu cảm ứng vùng LAD, cơ tim còn sống hoàn toàn.”

**Âm tính:** “Đáp ứng adenosine đầy đủ. Không có khuyết tưới máu khi gắng sức. Không có LGE. Chức năng thất trái bình thường. Không có bằng chứng thiếu máu cơ tim cảm ứng.”
`,
});
