/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "nmct-cap",
  ten: "Nhồi máu cơ tim cấp",
  tenEn: "Acute myocardial infarction",
  vietTat: ["AMI", "STEMI", "NSTEMI"],
  nhom: "thieu-mau",
  thuTu: 3,
  tuKhoa: ["MVO", "no reflow", "tắc nghẽn vi mạch", "xuất huyết trong cơ tim", "IMH", "vùng nguy cơ", "area at risk", "salvage", "huyết khối thất trái", "nhồi máu thất phải"],
  moTaNgan: "Kích thước nhồi máu, MVO, phù (vùng nguy cơ), huyết khối, biến chứng.",
  protocol: ["P2"],
  thoiGian: "40–45 phút",
  dauHieu: ["Phù T2/STIR theo vùng mạch vành (vùng nguy cơ), lớn hơn vùng LGE", "LGE dưới nội mạc → xuyên thành theo vùng mạch vành", "**MVO**: lõi tối trong vùng LGE, rõ nhất trên EGE (TI > 400 ms)", "Lõi giảm tín hiệu trên T2/T2*: xuất huyết trong cơ tim", "Huyết khối mỏm: khối không ngấm thuốc trên EGE"],
  dau: ["t2-tang", "lge-duoi-noi-mac", "lge-xuyen-thanh", "mvo", "rlvd-vung", "huyet-khoi", "t1-tang", "ecv-tang"],
  lgeVung: [5, 6, 11, 12, 16],
  lgeGhi: "Ví dụ nhồi máu vùng LCx",
  tomTat: {"lamSang": "Đau ngực, troponin tăng, ST chênh hoặc không; hẹp/tắc mạch vành", "hinhThai": "Rối loạn vận động vùng theo mạch vành; huyết khối, MVO", "lge": "Dưới nội mạc → xuyên thành, theo vùng mạch vành; MVO lõi tối", "mapping": "T2, T1 native tăng ở vùng nguy cơ; lõi giảm khi xuất huyết", "phanBiet": "Phù và LGE cùng chứa lớp dưới nội mạc (khác viêm cơ tim)"},
  nguon: ["S1, tr. 35–36", "S2, tr. 202–240 (Acute ischaemic heart disease)"],
  hinh: [{"src": "hinh/nmct-cap/s1-36.jpg", "chuThich": "Nhồi máu cấp thành bên do tắc LCx: không động thành bên trên cine (A, B); MVO trên EGE (C) và LGE (D).", "nguon": "S1, tr. 36"}, {"src": "hinh/nmct-cap/s2-215.jpg", "chuThich": "Nhồi máu thất phải kèm tắc nghẽn vi mạch ở bệnh nhân nhồi máu thành dưới.", "nguon": "S2, tr. 215"}, {"src": "hinh/nmct-cap/s2-225-1.jpg", "chuThich": "Huyết khối thất trái sau nhồi máu thành trước: khó thấy trên cine (a), rõ là khối giảm tín hiệu ở mỏm trên LGE (b, c).", "nguon": "S2, tr. 225"}, {"src": "hinh/nmct-cap/s2-225-0.jpg", "chuThich": "Tắc nghẽn vi mạch: vùng giảm tín hiệu trong lõi nhồi máu cấp vùng LCx.", "nguon": "S2, tr. 225"}],
  noiDung: `
## Tổng quan
Hoại tử cơ tim do tắc động mạch vành. Hoại tử lan từ dưới nội mạc ra thượng tâm mạc theo thời gian tắc (“sóng lan”); tái thông trong 4–6 giờ thường giữ được lớp ngoài (S2, tr. 205–207). MRI đánh giá chính xác chức năng, kích thước nhồi máu, vùng nguy cơ, cơ tim được cứu, tắc nghẽn vi mạch và biến chứng.

## Đặc điểm lâm sàng
- Đau ngực, troponin tăng, ECG ST chênh lên (STEMI) hoặc không (NSTEMI).
- MRI thường làm 2–7 ngày sau tái thông, khi bệnh nhân ổn định.

## Chỉ định MRI tim
- Phân tầng nguy cơ sau nhồi máu: EF, kích thước nhồi máu, MVO.
- Tìm huyết khối thất trái, nhồi máu thất phải, biến chứng cơ học.
- Phân biệt với viêm cơ tim, Takotsubo khi mạch vành không hẹp — xem [MINOCA](#/benh/minoca).

## Protocol chụp
[P2 · Nhồi máu cơ tim cấp](#/protocol/P2) (S1, tr. 35; S2, tr. 207):
1. Giải phẫu; chức năng thất trái, thất phải.
2. Phù: T2 STIR (trước thuốc) ± T2 mapping.
3. Tiêm Gd → EGE 1–3 phút, TI > 400 ms (MVO, huyết khối).
4. LGE ≥ 10 phút.
5. Tùy chọn: tưới máu lần đầu (MVO sớm), T2* (xuất huyết), T1/T2 mapping (vùng nguy cơ).

## Hình ảnh MRI
- **Phù** (T2 STIR, T2/T1 mapping): vùng nguy cơ, theo vùng mạch vành, xuyên thành; phân biệt nhồi máu cấp với cũ (S1, tr. 35).
- **LGE:** kích thước nhồi máu (% khối thất trái); bao gồm lớp dưới nội mạc. Kích thước LGE lớn nhất trong những ngày đầu (do phù) và giảm dần trong 6–8 tuần (S2, tr. 214).
- **Cơ tim được cứu** = vùng nguy cơ (phù) − vùng nhồi máu (LGE).
- **MVO:** vùng tối trong lõi nhồi máu (“no-reflow”); nhỏ dần từ tưới máu lần đầu → EGE → LGE (S2, tr. 215).
- **Xuất huyết trong cơ tim:** lõi giảm tín hiệu trên T2 (không đặc hiệu, MVO cũng gây giảm) và trên T2*/T2* mapping (đặc hiệu hơn) (S2, tr. 216).
- **Nhồi máu thất phải:** phù và LGE thành thất phải, thường kèm nhồi máu thành dưới (S2, tr. 214).
- **Nhồi máu cơ nhú:** gặp 14% STEMI, tiên lượng xấu (S2, tr. 214).

## Tiêu chuẩn chẩn đoán
- Phù + LGE cùng vị trí, chứa lớp dưới nội mạc, theo vùng mạch vành → nhồi máu cấp.
- Phù chỉ ở lớp ngoài/giữa thành kèm LGE không theo mạch vành → nghĩ viêm cơ tim (S2, tr. 293).

## Chẩn đoán phân biệt
| Bệnh | Điểm phân biệt |
| --- | --- |
| [Viêm cơ tim](#/benh/viem-co-tim) | LGE dưới thượng tâm mạc/giữa thành, chừa dưới nội mạc; nhiều ổ |
| [Takotsubo](#/benh/takotsubo) | Rối loạn vận động vượt một vùng mạch vành, phù tương ứng, không LGE |
| [Nhồi máu cũ](#/benh/nmct-cu-song-con) | Không phù, T2 bình thường, thành mỏng, có thể mỡ thay thế |
| Huyết khối so với giả huyết khối (dòng chảy chậm) | Huyết khối không ngấm thuốc trên EGE/LGE, rõ trên mọi lát cắt |

## Tiên lượng (S2, tr. 213–216)
- Kích thước nhồi máu: mỗi 5% khối thất trái tăng → tăng nguy cơ tử vong và nhập viện vì suy tim (phân tích gộp 10 thử nghiệm, 1889 bệnh nhân).
- MVO, xuất huyết trong cơ tim, cơ tim được cứu ít, EF thấp, tổn thương thất phải và cơ nhú đều là yếu tố tiên lượng xấu.

## Bẫy và lỗi thường gặp
- T2 STIR phải chụp **trước** thuốc (S1, tr. 35).
- Dòng chảy chậm ở mỏm gây tín hiệu cao dưới nội mạc trên T2 (giả phù).
- Không nhầm máu sáng với LGE dưới nội mạc → đối chiếu cine (S1, tr. 35).
- MVO giảm dần theo thời gian sau tiêm → chụp đúng thời điểm (S2, tr. 215).

## Mẫu kết luận
“Không động thành bên đoạn đáy–giữa; EF 48%. Phù T2 xuyên thành vùng LCx (vùng nguy cơ 22% khối thất trái). LGE xuyên thành 51–75% thành dưới bên và trước bên đoạn đáy–giữa (kích thước nhồi máu 14% khối thất trái) với tắc nghẽn vi mạch (2,1 g). Không có huyết khối. Kết luận: nhồi máu cấp vùng LCx có MVO; cơ tim được cứu khoảng 36% vùng nguy cơ.”
`,
});
