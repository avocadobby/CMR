/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "amyloidosis",
  ten: "Amyloidosis tim",
  tenEn: "Cardiac amyloidosis (AL, ATTR)",
  vietTat: ["AL", "ATTR", "CA"],
  nhom: "viem-tham-nhiem",
  thuTu: 3,
  tuKhoa: ["amyloid", "thâm nhiễm", "chuỗi nhẹ", "transthyretin", "khó null", "QALE", "bệnh cơ tim hạn chế", "restrictive", "vách liên nhĩ dày", "DPD"],
  moTaNgan: "Dày thành, LGE dưới nội mạc lan tỏa, khó xóa nền cơ tim, T1 và ECV rất cao.",
  protocol: ["P5"],
  thoiGian: "40–45 phút",
  dauHieu: ["**Khó xóa nền (null) cơ tim**; trên TI scout máu và cơ tim về 0 cùng lúc", "LGE **dưới nội mạc lan tỏa** toàn bộ (cả thất phải, nhĩ) → xuyên thành khi tiến triển; gradient đáy–mỏm", "**T1 native rất cao** (> 1050–1150 ms ở 1,5T) và **ECV rất cao** (> 40%, thường > 50%)", "Dày đồng tâm hai thất, vách liên nhĩ dày > 6 mm, tràn dịch màng ngoài tim/màng phổi"],
  dau: ["day-that-trai", "lge-lan-toa-duoi-noi-mac", "lge-khong-xoa-nen", "lge-xuyen-thanh", "t1-tang", "ecv-tang", "nhi-gian", "tran-dich-mnt", "lge-that-phai"],
  tomTat: {"lamSang": "Lớn tuổi; suy tim EF bảo tồn, điện thế thấp trên ECG dù thành dày; hội chứng ống cổ tay (ATTR); bệnh tương bào (AL)", "hinhThai": "Dày đồng tâm, buồng nhỏ, nhĩ giãn, vách liên nhĩ dày, chức năng dọc giảm", "lge": "Dưới nội mạc lan tỏa → xuyên thành; khó null", "mapping": "T1 native và ECV rất cao (cao nhất trong các bệnh cơ tim)", "phanBiet": "HCM: không đối xứng, LGE giữa thành đốm, ECV tăng nhẹ; Fabry: T1 thấp"},
  nguon: ["S1, tr. 19, 24, 43–46, 94", "S2, tr. 121–122, 354–363 (Infiltrative cardiomyopathy)"],
  hinh: [{"src": "hinh/amyloidosis/s1-45.jpg", "chuThich": "Nghi amyloid, 68 tuổi: trên Look-Locker sau tiêm máu và cơ tim về 0 ở cùng TI (A); LGE dưới nội mạc lan tỏa, cơ tim khó null (B).", "nguon": "S1, tr. 45"}, {"src": "hinh/amyloidosis/s1-46.jpg", "chuThich": "Amyloid, 73 tuổi: T1 native > 1000 ms lan tỏa (MOLLI 1,5T), ECV > 35%, LGE khó null với các đảo ngấm đốm.", "nguon": "S1, tr. 46"}, {"src": "hinh/amyloidosis/s2-358-0.jpg", "chuThich": "LGE trong Fabry (hàng trên) và amyloid (hàng dưới) theo giai đoạn sớm – trung gian – muộn.", "nguon": "S2, tr. 358"}, {"src": "hinh/amyloidosis/s2-359-0.jpg", "chuThich": "Tiến triển đặc tính mô theo gánh nặng amyloid: T1, ECV tăng → LGE dưới nội mạc → xuyên thành.", "nguon": "S2, tr. 359"}],
  noiDung: `
## Tổng quan
Lắng đọng sợi amyloid ở khoảng kẽ cơ tim gây dày thành, rối loạn tâm trương rồi tâm thu. Hai thể chính: **AL** (chuỗi nhẹ globulin miễn dịch, bệnh tương bào) và **ATTR** (transthyretin: thể hoang dại ở người già hoặc thể di truyền). ECV có thể lớn tới mức “thể tích cơ tim ngoại bào vượt hematocrit” (S2, tr. 355, 357).

## Đặc điểm lâm sàng
- Suy tim EF bảo tồn ở người lớn tuổi; dày thất trái nhưng **điện thế thấp** trên ECG.
- AL: tổn thương đa cơ quan (thận, thần kinh), tiến triển nhanh, tiên lượng xấu hơn.
- ATTR hoang dại: nam lớn tuổi, hội chứng ống cổ tay, hẹp ống sống; hay gặp trong hẹp van động mạch chủ nặng ở người già (S2, tr. 361).

## Chỉ định MRI tim
Dày thành chưa rõ nguyên nhân, suy tim EF bảo tồn, xác định mức thâm nhiễm (ECV), phân biệt với HCM, Fabry, tăng huyết áp; theo dõi điều trị.

## Protocol chụp
[P5](#/protocol/P5) (S1, tr. 43):
1. Giải phẫu; chức năng thất trái và thất phải (đo vách liên nhĩ).
2. Phù; T1 native mapping.
3. EGE/LGE — **ưu tiên PSIR**; T1 sau tiêm và hematocrit → ECV.

> Mẹo: khi chọn TI, đối chiếu tín hiệu cơ xương; với PSIR, chỉnh cửa sổ đến khi một mô tối — nếu mô tối nhất là **máu** thì gần như chắc chắn amyloid (S1, tr. 43; S2, tr. 358).

## Hình ảnh MRI
- **Hình thái:** dày đồng tâm (không đối xứng nhẹ), buồng nhỏ, chức năng dọc giảm, EF bảo tồn tới muộn; thất phải dày; nhĩ giãn; vách liên nhĩ dày > 6 mm (< 20% trường hợp); tràn dịch màng ngoài tim và màng phổi hay gặp (S1, tr. 43).
- **LGE:** liên tục từ không LGE → dưới nội mạc (rõ hơn ở đáy, hai bên vách như “đường ray”) → xuyên thành → toàn bộ cơ tim; máu tối sớm (S2, tr. 357–358). LGE dưới nội mạc xuất hiện khi ECV khoảng 0,45, xuyên thành khi khoảng 0,55 (S2, tr. 359).
- **TI scout:** máu và cơ tim về 0 cùng thời điểm (S1, tr. 43, 45).
- **T1 native** tăng rất cao (có thể 6 SD); **ECV** rất cao, thường > 50% (S2, tr. 358–359).

## Phân biệt AL và ATTR (S1, tr. 44)
| Đặc điểm | AL | ATTR |
| --- | --- | --- |
| Khối cơ thất trái | Tăng nhẹ (< 100 g/m²) | Tăng nhiều (> 100 g/m²) |
| Vách liên thất | Mỏng hơn | Dày hơn |
| LGE | Ít hơn, thường dưới nội mạc toàn bộ; QALE < 13 | Rộng hơn, lan tỏa và xuyên thành; QALE ≥ 13 |
| T1 native | Cao hơn | Thấp hơn AL |
| ECV | Thấp hơn | Cao hơn |
| Tiên lượng | Xấu hơn (dù LGE ít) | Tốt hơn (dù LGE nhiều) |

Điểm QALE (0–18): mỗi vùng đáy/giữa/mỏm chấm 0 (không LGE) tới 4 (xuyên thành), cộng 6 nếu có LGE thất phải (S1, tr. 44).

> Chẩn đoán ATTR không xâm lấn: xạ hình xương (DPD/PYP/HMDP) dương tính + không có chuỗi nhẹ đơn dòng trong máu/nước tiểu. MRI gợi ý amyloid nhưng không phân biệt chắc chắn thể.

## Chẩn đoán phân biệt
| Bệnh | Điểm phân biệt |
| --- | --- |
| [HCM](#/benh/hcm) | Phì đại không đối xứng, LGE giữa thành đốm, T1/ECV tăng nhẹ, điện thế ECG cao |
| [Fabry](#/benh/fabry) | T1 native **thấp**, LGE thành dưới bên đoạn đáy |
| Tim tăng huyết áp, hẹp van động mạch chủ | Dày < 15 mm, LGE ít, ECV tăng nhẹ; nhưng amyloid ẩn có thể kèm hẹp chủ |
| [Xơ hóa nội mạc cơ tim](#/benh/xo-hoa-noi-mac-co-tim) | LGE nội mạc kèm huyết khối mỏm (dấu V) |

## Tiên lượng
LGE xuyên thành, T1 native và ECV cao là yếu tố tiên lượng tử vong độc lập (S2, tr. 358–359).

## Bẫy và lỗi thường gặp
- Dùng IR magnitude với TI chọn sai có thể xóa nhầm cơ tim bệnh → bỏ sót LGE; luôn dùng PSIR (S2, tr. 357–358).
- Cơ tim khó null dù kỹ thuật đúng → nghĩ thâm nhiễm, không phải lỗi kỹ thuật (S1, tr. 24).

## Mẫu kết luận
“Dày đồng tâm hai thất (vách 17 mm), vách liên nhĩ 7 mm, hai nhĩ giãn, EF 55% với chức năng dọc giảm. Tràn dịch màng ngoài tim lượng ít. TI scout: máu và cơ tim về 0 cùng lúc. LGE dưới nội mạc lan tỏa hai thất, xuyên thành ở đáy. T1 native 1180 ms, ECV 58%. Kết luận: hình ảnh điển hình amyloidosis tim; đề nghị xạ hình xương và xét nghiệm chuỗi nhẹ để phân thể.”
`,
});
