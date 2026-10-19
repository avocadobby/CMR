/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "hcm",
  ten: "Bệnh cơ tim phì đại",
  tenEn: "Hypertrophic cardiomyopathy",
  vietTat: ["HCM", "BCTPĐ"],
  nhom: "co-tim",
  thuTu: 1,
  tuKhoa: ["phì đại", "dày thất", "SAM", "tắc nghẽn đường ra", "LVOT", "apical HCM", "mỏm", "crypt", "đột tử", "myectomy"],
  moTaNgan: "Đo chính xác độ dày thành, tắc nghẽn đường ra, xơ hóa (LGE) để phân tầng đột tử.",
  protocol: ["P6"],
  thoiGian: "40–50 phút",
  dauHieu: ["Dày thành ≥ 15 mm (≥ 13 mm nếu có người thân mắc HCM), không do nguyên nhân khác", "Phì đại không đối xứng: vách/thành tự do > 1,3; thể mỏm: mỏm/đáy ≥ 1,3–1,5", "SAM van hai lá, dòng xoáy đường ra thất trái", "LGE **giữa thành** ở vùng phì đại và **điểm nối thất phải**", "LGE ≥ 15% khối thất trái: tăng nguy cơ đột tử khoảng 2 lần"],
  dau: ["day-that-trai", "sam", "lge-giua-thanh", "lge-diem-noi", "lge-dom", "t1-tang", "ecv-tang", "phinh-mom"],
  lgeVung: [2, 3, 8, 9],
  lgeGhi: "LGE giữa thành ở vách phì đại và điểm nối thất phải",
  tomTat: {"lamSang": "Di truyền (gen sarcomere) 1/500; khó thở, đau ngực, ngất, đột tử ở người trẻ", "hinhThai": "Dày thành không đối xứng ≥ 15 mm, buồng thất nhỏ, EF bình thường/cao; SAM", "lge": "Giữa thành dạng đốm ở vùng dày nhất, điểm nối thất phải; 40–60% bệnh nhân", "mapping": "T1 native và ECV tăng vừa (thấp hơn amyloid)", "phanBiet": "Tim vận động viên: không LGE, ECV thấp, giảm dày khi ngừng tập; Fabry: T1 thấp; amyloid: LGE lan tỏa, khó null"},
  nguon: ["S1, tr. 41–42, 95, 100", "S2, tr. 243–252 (Hypertrophic cardiomyopathy)"],
  hinh: [{"src": "hinh/hcm/s1-42.jpg", "chuThich": "HCM: LGE nặng ở điểm nối thất phải (A); SAM gây tắc nghẽn đường ra (B); nhiều khe cơ tim thành dưới trên 2CH (C), dễ bỏ sót trên trục ngắn (D).", "nguon": "S1, tr. 42"}, {"src": "hinh/hcm/s2-245-0.jpg", "chuThich": "MRI so với siêu âm: thành trước bên dày 35 mm (siêu âm đo 18 mm); HCM thể mỏm; vách sau dày 41 mm.", "nguon": "S2, tr. 245"}, {"src": "hinh/hcm/s2-247-0.jpg", "chuThich": "Đa dạng kiểu hình HCM: thành thất phải dày, dải cơ, cơ nhú bất thường, phình mỏm có sẹo, khe cơ tim.", "nguon": "S2, tr. 247"}, {"src": "hinh/hcm/s2-247-1.jpg", "chuThich": "Đa dạng kiểu và mức độ LGE ở 6 bệnh nhân HCM.", "nguon": "S2, tr. 247"}],
  noiDung: `
## Tổng quan
Bệnh cơ tim di truyền thường gặp nhất (khoảng 1/500), do đột biến gen protein sarcomere. Đặc trưng: phì đại thất trái không giãn, không giải thích được bằng điều kiện tải; tế bào cơ sắp xếp hỗn loạn, xơ hóa kẽ và xơ hóa thay thế do thiếu máu vi mạch (S2, tr. 243).

## Đặc điểm lâm sàng
- Đa số không hoặc ít triệu chứng; tử vong khoảng 1%/năm.
- Khó thở, đau ngực, hồi hộp, ngất; rung nhĩ, đột quỵ.
- Nguyên nhân đột tử hàng đầu ở người trẻ, vận động viên (S2, tr. 244).
- Tắc nghẽn đường ra thất trái (chênh áp ≥ 30 mmHg lúc nghỉ) gặp ở khoảng 2/3 bệnh nhân (lúc nghỉ hoặc gắng sức).
- ECG: điện thế cao, sóng Q sâu, T âm khổng lồ (thể mỏm).

## Chỉ định MRI tim
- Khi siêu âm không rõ: độ dày thành ranh giới, phì đại ở vùng siêu âm khó thấy (thành trước bên, mỏm, vách sau) (S2, tr. 244).
- Phân biệt với tim vận động viên, tăng huyết áp, amyloid, Fabry.
- Phân tầng nguy cơ đột tử (LGE, phình mỏm), trước can thiệp giảm vách (đánh giá bộ máy van, cơ nhú).
- Tầm soát người thân mang gen.

## Protocol chụp
[P6 · Bệnh cơ tim phì đại](#/protocol/P6) (S1, tr. 41):
1. Giải phẫu; cine thất trái (trục ngắn đủ từ đáy tới mỏm, trục dài).
2. Cine LVOT 2 mặt cắt trực giao.
3. PC trong và qua mặt phẳng LVOT.
4. T1 mapping, tagging (tùy chọn).
5. LGE (± ECV).

## Hình ảnh MRI
- **Độ dày thành:** đo trên trục ngắn cuối tâm trương, vuông góc thành, không tính bè cơ thất phải. Kiểu phì đại rất đa dạng: vách không đối xứng, đồng tâm, giữa thất, mỏm (“con át bích”), khu trú (S2, tr. 244).
- **Bất thường khác:** dày thành thất phải ≥ 8 mm, lá van hai lá dài, cơ nhú bám bất thường vào lá trước, dải cơ từ mỏm tới vách đáy, khe cơ tim (crypt), **phình mỏm thành mỏng có sẹo** kèm tắc nghẽn giữa thất (S2, tr. 244–245).
- **SAM** và dòng xoáy đường ra thất trái trên cine LVOT; MRI không đo chính xác chênh áp động (S2, tr. 245).
- **LGE:** 40–60% bệnh nhân, trung bình 9% khối thất trái; thường giữa thành dạng đốm ở vùng dày nhất và điểm nối thất phải; mọi kiểu đều có thể gặp; không theo vùng mạch vành (S2, tr. 245; S1, tr. 95).
- **T1 native, ECV** tăng vừa, phản ánh xơ hóa kẽ.

## Tiêu chuẩn chẩn đoán (S1, tr. 41)
- Dày thành > 15 mm (> 13 mm ở bệnh nhân có tiền sử gia đình HCM; > 20 mm ở người da đen) khi không có nguyên nhân khác.
- Tỉ lệ vách/thành bên > 1,3.
- HCM thể mỏm: tỉ lệ thành mỏm/đáy ≥ 1,3–1,5.
- Gợi ý HCM: phì đại khu trú; giảm co ở vùng phì đại (tagging); có LGE.
- Khe cơ tim có thể giúp nhận diện người mang đột biến chưa phì đại (S1, tr. 41–42).

## Chẩn đoán phân biệt (S1, tr. 100–101)
| Bệnh | Điểm phân biệt |
| --- | --- |
| [Tim vận động viên](#/benh/tim-van-dong-vien) | Dày ≤ 14 mm, giãn buồng cân đối, strain và chức năng tâm trương bình thường, không LGE, **ECV thấp**, giảm dày khi ngừng tập |
| Tim tăng huyết áp | Dày đồng tâm < 15 mm (người da trắng), phì đại vách đáy; LGE ít, đôi khi điểm nối thất phải |
| Hẹp van động mạch chủ | Phì đại đồng tâm tương xứng mức hẹp; LGE giữa thành không đặc hiệu |
| [Amyloidosis](#/benh/amyloidosis) | Dày đồng tâm, vách liên nhĩ dày, LGE dưới nội mạc lan tỏa, **khó null**, T1 và ECV rất cao, tràn dịch |
| [Fabry](#/benh/fabry) | Dày đồng tâm, **T1 native vách thấp**, LGE thành dưới bên đoạn đáy |
| [Bệnh cơ tim không lèn chặt](#/benh/lvnc) | Bè cơ mỏm có thể giống HCM mỏm → tiêm thuốc giúp phân biệt |

## Tiên lượng
- LGE ≥ 15% khối thất trái: nguy cơ đột tử tăng khoảng 2 lần so với không LGE; không LGE là yếu tố trấn an (Chan và cộng sự, gần 1300 bệnh nhân) (S2, tr. 246).
- LGE chỉ ở điểm nối thất phải không dự báo biến cố (S2, tr. 246).
- LGE ≥ 20% khối cơ: nguy cơ tiến tới giai đoạn cuối (EF < 50%) (S2, tr. 246).
- Phình mỏm có sẹo: nguy cơ rối loạn nhịp và huyết khối.

## Bẫy và lỗi thường gặp
- Đo cả bè cơ thất phải hoặc dải điều hòa vào vách → đo dày quá mức.
- Mặt cắt chếch làm dày giả; luôn đo trên trục ngắn đúng.
- LGE ở điểm nối thất phải không đặc hiệu, gặp cả ở người bình thường (S1, tr. 41).
- Khe cơ tim dễ bỏ sót trên trục ngắn do thể tích từng phần → xem trục dài (S1, tr. 42).

## Mẫu kết luận
“Phì đại không đối xứng vách liên thất đoạn đáy–giữa, dày tối đa 22 mm (thành bên 9 mm). SAM van hai lá với dòng xoáy đường ra thất trái lúc nghỉ. EF 72%. LGE giữa thành dạng đốm ở vách phì đại và hai điểm nối thất phải, khoảng 8% khối thất trái. Kết luận: bệnh cơ tim phì đại thể vách có tắc nghẽn đường ra; LGE < 15%.”
`,
});
