/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "dcm",
  ten: "Bệnh cơ tim giãn",
  tenEn: "Dilated cardiomyopathy",
  vietTat: ["DCM", "BCTG"],
  nhom: "co-tim",
  thuTu: 2,
  tuKhoa: ["giãn thất", "suy tim", "EF giảm", "titin", "lamin", "mid-wall", "LGE giữa thành", "sau viêm cơ tim", "rượu", "chu sinh", "peripartum"],
  moTaNgan: "Phân biệt với bệnh cơ tim thiếu máu; LGE giữa thành vách dự báo rối loạn nhịp.",
  protocol: ["P1"],
  thoiGian: "35–45 phút",
  dauHieu: ["Giãn thất trái + giảm EF, thành mỏng hoặc bình thường", "LGE **giữa thành vách liên thất** (khoảng 30% bệnh nhân); phần lớn không có LGE", "LGE không theo vùng mạch vành; nếu dưới nội mạc theo mạch vành → nghĩ thiếu máu", "Có thể huyết khối mỏm, hở hai lá chức năng"],
  dau: ["gian-that-trai", "giam-ef", "lge-giua-thanh", "lge-khong", "t1-tang", "ecv-tang", "huyet-khoi"],
  lgeVung: [2, 3, 8, 9],
  lgeGhi: "LGE giữa thành vách liên thất (dạng sọc)",
  tomTat: {"lamSang": "Suy tim, rối loạn nhịp; 25–35% có tính gia đình", "hinhThai": "Giãn thất trái ± thất phải, giảm co toàn bộ", "lge": "Không có hoặc giữa thành vách (sọc), dưới thượng tâm mạc, dạng đốm", "mapping": "T1 native, ECV tăng nhẹ lan tỏa", "phanBiet": "Bệnh cơ tim thiếu máu: LGE dưới nội mạc/xuyên thành theo mạch vành"},
  nguon: ["S1, tr. 39–40, 95", "S2, tr. 253–264 (Dilated cardiomyopathy)"],
  hinh: [{"src": "hinh/dcm/s1-40.jpg", "chuThich": "DCM: không phù, T1 native tăng nhẹ, không LGE (trái); LGE giữa thành điển hình ở vách (phải) — phần lớn DCM không có LGE.", "nguon": "S1, tr. 40"}, {"src": "hinh/dcm/s2-260-1.jpg", "chuThich": "Các kiểu LGE ở bệnh nhân giãn và giảm chức năng thất trái: kiểu thiếu máu (bệnh cơ tim thiếu máu, DCM kèm nhồi máu bên lề) và kiểu không thiếu máu (đốm, giữa thành, dưới thượng tâm mạc).", "nguon": "S2, tr. 260"}],
  noiDung: `
## Tổng quan
Giãn thất trái và rối loạn chức năng tâm thu không do bệnh mạch vành hay điều kiện tải bất thường (tăng huyết áp, bệnh van) đủ giải thích. Tần suất có thể ≥ 1/250. Nguyên nhân di truyền (titin 25% thể gia đình, lamin A/C 6–9%…) và không di truyền (sau viêm cơ tim khoảng 9%, rượu, thuốc ung thư, chu sinh, nội tiết, dinh dưỡng) (S2, tr. 253–255).

## Đặc điểm lâm sàng
- Suy tim, rối loạn nhịp thất, đột tử, tắc mạch.
- Lamin A/C: rối loạn dẫn truyền, rung nhĩ, rối loạn nhịp thất ác tính sớm.
- Bệnh cơ tim chu sinh: cuối thai kỳ tới 5 tháng sau sinh (S2, tr. 254).

## Chỉ định MRI tim
- Suy tim mới phát hiện: xác định nguyên nhân (thiếu máu hay không thiếu máu), tìm bệnh đặc hiệu (viêm, sarcoidosis, thâm nhiễm).
- Phân tầng nguy cơ rối loạn nhịp (LGE), dự đoán hồi phục (tái cấu trúc ngược).
- Theo dõi chính xác EF, thể tích.

## Protocol chụp
[P1 · Chức năng + LGE](#/protocol/P1) (S1, tr. 39; S2, tr. 257):
1. Giải phẫu; chức năng thất trái, thất phải đủ trục ngắn.
2. T1 mapping (tùy chọn); phù khi nghi viêm cấp (ưu tiên T2-prep SSFP).
3. EGE khi nghi huyết khối (TI 400–550 ms).
4. LGE 10–20 phút, ≥ 2 hướng cắt và đổi hướng mã hóa pha.
5. Tưới máu gắng sức hoặc dobutamine khi cần loại trừ thiếu máu.

## Hình ảnh MRI
- Giãn thất trái (EDV > 2 SD theo tuổi, giới, BSA), giảm EF; thành mỏng hoặc bình thường (phì đại lệch tâm); có thể giãn thất phải (S2, tr. 257).
- **LGE:** không có ở đa số; khi có, thường **giữa thành vách liên thất** (dạng sọc), dưới thượng tâm mạc hoặc đốm; thường ở thành dưới vách (S1, tr. 95).
- Khoảng 13% bệnh nhân không hẹp mạch vành có LGE kiểu thiếu máu nhỏ (“nhồi máu bên lề”) (S2, tr. 258).
- T1 native, ECV tăng lan tỏa (xơ hóa kẽ) (S1, tr. 40).
- Huyết khối mỏm, hở hai lá chức năng.

## Tiêu chuẩn chẩn đoán
ESC: rối loạn chức năng tâm thu thất trái hoặc hai thất (EF bất thường xác nhận 2 lần) **và** giãn thất (EDV hoặc đường kính > 2 SD) khi không có bệnh mạch vành/điều kiện tải bất thường đủ giải thích (S2, tr. 257).

## Chẩn đoán phân biệt
| Bệnh | Điểm phân biệt |
| --- | --- |
| [Bệnh cơ tim thiếu máu](#/benh/nmct-cu-song-con) | LGE dưới nội mạc/xuyên thành theo vùng mạch vành; rối loạn vận động vùng rõ |
| [Viêm cơ tim](#/benh/viem-co-tim) (giai đoạn bán cấp) | Phù T2, LGE dưới thượng tâm mạc thành bên |
| [Sarcoidosis](#/benh/sarcoidosis) | LGE đốm vách đáy, thành thất phải; blốc nhĩ thất; hạch rốn phổi |
| [Bệnh cơ tim không lèn chặt](#/benh/lvnc) | Tăng bè cơ quá mức (dễ chẩn đoán quá mức trong DCM) |
| [Loạn dưỡng cơ](#/benh/loan-duong-co) | LGE dưới thượng tâm mạc thành dưới bên, CK tăng |
| [ARVC thể trái](#/benh/arvc) | LGE dưới thượng tâm mạc thành bên dạng vòng, thâm nhiễm mỡ |
| [Độc tính hóa trị](#/benh/doc-tinh-ung-thu) | Tiền sử anthracycline/trastuzumab |

## Tiên lượng
- Sống 10 năm < 60% (S2, tr. 260).
- LGE giữa thành: tăng nguy cơ tử vong, rối loạn nhịp thất, đột tử (độc lập với EF); không LGE: khả năng tái cấu trúc ngược cao hơn (S2, tr. 260–261; S1, tr. 39).
- Yếu tố nguy cơ đột tử: EF < 35%, nhanh thất không bền bỉ lặp lại, có và mức độ xơ hóa giữa thành, ECV tăng (S1, tr. 39).

## Bẫy và lỗi thường gặp
- Nhánh xuyên vách và bè cơ thất phải tạo LGE giả ở vách (S1, tr. 96–97).
- Rối loạn vận động vùng rõ hoặc LGE dưới nội mạc → nghĩ bệnh mạch vành chưa phát hiện (S1, tr. 39).
- Tưới máu khó đọc khi thành mỏng, có sẹo, dòng chậm (S1, tr. 39).
- Thất phải giãn kèm → tìm luồng thông, bất thường kết nối mạch máu.

## Mẫu kết luận
“Thất trái giãn (EDVi 135 ml/m²), giảm động toàn bộ, EF 25%; thất phải EF 40%. LGE giữa thành dạng sọc ở vách liên thất đoạn đáy–giữa, không theo vùng mạch vành. Không huyết khối. Hở hai lá chức năng vừa (RegF 30%). Kết luận: bệnh cơ tim giãn không do thiếu máu, có xơ hóa giữa thành vách (yếu tố nguy cơ rối loạn nhịp).”
`,
});
