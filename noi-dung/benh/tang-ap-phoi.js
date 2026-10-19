/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "tang-ap-phoi",
  ten: "Tăng áp phổi",
  tenEn: "Pulmonary hypertension",
  vietTat: ["PH", "PAH", "CTEPH"],
  nhom: "tim-phai",
  thuTu: 1,
  tuKhoa: ["tăng áp động mạch phổi", "áp lực động mạch phổi", "thuyên tắc phổi mạn", "CTEPH", "thất phải", "D-shape", "chữ D", "Eisenmenger"],
  moTaNgan: "Thất phải phì đại, giãn; vách dẹt chữ D thì tâm thu; LGE điểm nối; tìm nguyên nhân (tim trái, luồng thông).",
  protocol: ["P11"],
  thoiGian: "40–50 phút",
  dauHieu: ["Thất phải **phì đại** (> 5 mm) và giãn; vách **dẹt/lệch trái thì tâm thu** (quá tải áp lực, chữ D)", "ĐMP giãn (ĐMP > ĐMC), giảm độ đàn hồi", "**LGE điểm nối thất phải – vách** (trên và dưới)", "EF thất phải, thể tích thất phải có giá trị tiên lượng và theo dõi điều trị"],
  dau: ["gian-that-phai", "lge-diem-noi", "vach-nay", "rlvd-that-phai"],
  tomTat: {"lamSang": "Khó thở tăng dần, choáng váng/ngất khi gắng sức, phù, cổ trướng; chẩn đoán bằng thông tim (áp lực ĐMP trung bình ≥ 25 mmHg theo định nghĩa trong sách)", "hinhThai": "Thất phải dày, giãn; thất trái nhỏ; vách dẹt; ĐMP giãn", "lge": "Điểm nối thất phải – vách", "mapping": "T1 điểm nối tăng", "phanBiet": "Quá tải thể tích: vách dẹt thì tâm trương"},
  nguon: ["S1, tr. 102, 105", "S2, tr. 432–434"],
  hinh: [{"src": "hinh/tang-ap-phoi/s2-434.jpg", "chuThich": "Tăng áp phổi nặng: thất phải giãn, phì đại; vách dẹt tâm trương, lồi trái tâm thu; ĐMP giãn; LGE điểm nối thất phải – thất trái.", "nguon": "S2, tr. 434"}],
  noiDung: `
## Tổng quan
Nhóm bệnh tăng sức cản và áp lực động mạch phổi. Thường gặp nhất do bệnh tim trái hoặc bệnh phổi; ngoài ra tăng áp động mạch phổi (bệnh mạch phổi), thuyên tắc phổi mạn (CTEPH), nguyên nhân khác. Chẩn đoán bằng thông tim phải (áp lực ĐMP trung bình ≥ 25 mmHg lúc nghỉ theo định nghĩa trong sách) (S2, tr. 432–433; S1, tr. 105).

## Đặc điểm lâm sàng
Khó thở tăng dần, choáng váng, ngất khi gắng sức; phù, cổ trướng muộn; đau ngực, hồi hộp, ho máu.

## Chỉ định MRI tim
- Tìm nguyên nhân: bệnh tim trái, tim bẩm sinh (luồng thông trong/ngoài tim), đôi khi CTEPH.
- Đánh giá hậu quả lên thất phải — cấu trúc và chức năng thất phải liên quan mức độ và tiên lượng; theo dõi đáp ứng điều trị (S2, tr. 433).

## Protocol chụp
[P11](#/protocol/P11) (S1, tr. 102): giải phẫu; cine thất trái (cả nhĩ); cine thất phải (ngang, RVOT, đường vào/ra, 2 buồng); cine thân, nhánh ĐMP; PC thân ĐMP và ĐMC; MRA/3D whole-heart (tĩnh mạch phổi, thuyên tắc); LGE. Tưới máu phổi có thuốc khi nghi CTEPH.

## Hình ảnh MRI (S1, tr. 105; S2, tr. 434)
- Thất phải giãn, phì đại thành tự do (> 5 mm) và vách; thất trái tương đối nhỏ.
- Vách dẹt cuối tâm trương, **lồi về trái thì tâm thu** (chữ D tâm thu = quá tải áp lực).
- ĐMP và nhánh giãn (bình thường ĐMC > ĐMP).
- LGE ở điểm nối thất phải – thất trái.
- PC thân ĐMP: thời gian tăng tốc ngắn, khấc giữa tâm thu, dòng ngược; giảm độ đàn hồi.

## Phân loại nguyên nhân (S1, tr. 105)
Tăng áp phổi do tim trái (rối loạn chức năng tâm thu/tâm trương, bệnh van); CTEPH; bệnh phổi/thiếu oxy; tăng áp động mạch phổi; nguyên nhân khác.

## Chẩn đoán phân biệt
[Giãn thất phải](#/benh/gian-that-phai) do quá tải thể tích (luồng thông, hở ba lá/phổi), [ARVC](#/benh/arvc), [hẹp van ĐMP](#/benh/van-ba-la-dmp).

## Mẫu kết luận
“Thất phải giãn (EDVi 140 ml/m²), phì đại thành tự do 7 mm, EF 32%. Vách dẹt thì tâm trương và lồi về trái thì tâm thu. Thân ĐMP 36 mm (ĐMC lên 28 mm). LGE điểm nối trên và dưới. Không luồng thông, chức năng thất trái bình thường. Kết luận: dấu hiệu tăng áp phổi nặng với rối loạn chức năng thất phải.”
`,
});
