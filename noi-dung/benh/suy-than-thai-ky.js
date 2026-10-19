/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "suy-than-thai-ky",
  ten: "Thuốc tương phản: suy thận, thai kỳ, trẻ em, dị ứng",
  tenEn: "Gadolinium contrast safety: renal failure, pregnancy, children, allergy",
  vietTat: ["GBCA", "NSF"],
  nhom: "dac-biet",
  thuTu: 2,
  tuKhoa: ["gadolinium", "thuốc tương phản", "suy thận", "eGFR", "NSF", "xơ hóa hệ thống do thận", "thai", "cho con bú", "dị ứng thuốc", "macrocyclic", "linear", "lắng đọng não"],
  moTaNgan: "Chọn thuốc vòng (macrocyclic), liều thấp nhất; eGFR < 30: chống chỉ định thuốc mạch thẳng; protocol không thuốc.",
  protocol: ["P1"],
  thoiGian: "—",
  tuongPhan: null,
  dauHieu: ["Thuốc **vòng (macrocyclic)** bền hơn, ít giải phóng Gd hơn thuốc **mạch thẳng (linear)**", "eGFR 30–60: chọn thuốc an toàn nhất, thận trọng; eGFR < 30: chống chỉ định thuốc mạch thẳng", "Suy thận nặng: cân nhắc lọc máu trong 2 giờ sau tiêm", "Không tiêm được: cine, T2, T1 native, PC, MRA không thuốc, T2*"],
  dau: [],
  tomTat: {"lamSang": "Bệnh nhân cần MRI tim nhưng có nguy cơ với thuốc Gd", "hinhThai": "—", "lge": "—", "mapping": "—", "phanBiet": "—"},
  nguon: ["S1, tr. 112", "S2, tr. 63–69 (MRI contrast agents)"],
  noiDung: `
## Tổng quan
Thuốc tương phản gốc gadolinium (GBCA) có hồ sơ an toàn tốt; nguy cơ chính là xơ hóa hệ thống do thận (NSF) ở bệnh nhân suy thận nặng với thuốc mạch thẳng, lắng đọng Gd ở não (nhân răng, cầu nhạt) sau tiêm nhiều lần thuốc mạch thẳng (chưa ghi nhận tác hại), và phản ứng dị ứng hiếm (S1, tr. 112; S2, tr. 63–66).

## Nhóm thuốc (S1, tr. 112)
- **Mạch thẳng (linear):** gadobenic acid, gadodiamide, gadopentetic acid, gadoversetamide — dễ giải phóng Gd; EMA đã khuyến cáo đình chỉ lưu hành nhiều thuốc nhóm này.
- **Vòng (macrocyclic):** gadoteric acid, gadobutrol, gadoteridol — bền hơn, ít giải phóng Gd.

## Liều (S2, tr. 66)
Liều khuyến cáo 0,05–0,1 mmol/kg; tim mạch đôi khi dùng 0,15–0,2 mmol/kg; tiêm bolus 1–5 ml/s.

## Suy thận (S1, tr. 112)
| eGFR (ml/phút/1,73m²) | Khuyến cáo |
| --- | --- |
| 30–60 | Chọn thuốc an toàn nhất (vòng), dùng thận trọng |
| < 30 | Chống chỉ định thuốc mạch thẳng; cân nhắc lợi ích – nguy cơ, liều thấp nhất thuốc vòng |
| Suy thận nặng/lọc máu | Cân nhắc lọc máu trong vòng 2 giờ sau tiêm (chưa chứng minh phòng NSF) |

Yếu tố tăng nguy cơ NSF: thuốc mạch thẳng > vòng, ion > không ion, liều cao/tích lũy, tiêm nhiều lần, mức suy thận (S2, tr. 66).

## Trẻ em, thai kỳ
- Trẻ sinh non và nhũ nhi chức năng thận chưa trưởng thành (eGFR có thể < 30) → thận trọng hơn (S2, tr. 66).
- Thai kỳ: tránh Gd trừ khi thật cần; ưu tiên protocol không thuốc.

## Protocol không thuốc thay thế
Cine (chức năng), T2 STIR/T2 mapping (phù), T1 native (xơ hóa, thâm nhiễm, Fabry), T2* (sắt), PC (van, luồng thông), MRA không thuốc (3D whole-heart, SSFP) — xem [công cụ chọn protocol](#/cong-cu/chon-protocol).
`,
});
