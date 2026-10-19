/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "huyet-khoi-tim",
  ten: "Huyết khối trong tim",
  tenEn: "Intracardiac thrombus",
  vietTat: ["LV thrombus", "LA thrombus"],
  nhom: "khoi-u",
  thuTu: 1,
  tuKhoa: ["huyết khối", "thrombus", "huyết khối mỏm", "tiểu nhĩ trái", "EGE", "TI dài", "tắc mạch"],
  moTaNgan: "Khối không ngấm thuốc trên EGE/LGE (TI dài); khối trong tim thường gặp nhất.",
  protocol: ["P9", "P2"],
  thoiGian: "30–45 phút",
  dauHieu: ["**Không ngấm thuốc** trên tưới máu, EGE và LGE (đen trên nền sáng)", "EGE TI dài (≥ 440–600 ms) nhạy nhất; LGE cần TI dài để thấy rõ", "Vị trí: mỏm thất trái ở vùng không/loạn động (sau nhồi máu, DCM), tiểu nhĩ trái (rung nhĩ)", "T1/T2 thấp (cao nếu mới); nhỏ, đồng nhất, bề mặt nhẵn"],
  dau: ["huyet-khoi", "khoi", "phinh-mom", "rlvd-vung"],
  tomTat: {"lamSang": "Sau nhồi máu thành trước, DCM, rung nhĩ, tăng đông; nguy cơ tắc mạch", "hinhThai": "Khối nhỏ, đồng nhất ở vùng ứ trệ", "lge": "Không ngấm", "mapping": "T1 thay đổi theo tuổi huyết khối", "phanBiet": "U: lớn hơn, không đồng nhất, có tưới máu, T2 cao"},
  nguon: ["S1, tr. 24, 35, 88, 90–91", "S2, tr. 121, 225, 482–484 (Cardiac thrombi)"],
  hinh: [{"src": "hinh/huyet-khoi-tim/s1-90.jpg", "chuThich": "Huyết khối mỏm sau nhồi máu thành trước: khối ở vùng loạn động trên cine (A); không ngấm thuốc trên EGE (B, C) và LGE (D, E), trên nền sẹo xuyên thành.", "nguon": "S1, tr. 90"}, {"src": "hinh/huyet-khoi-tim/s1-91.jpg", "chuThich": "Huyết khối nhĩ phải: tín hiệu trung gian trên T1 (A), thấp trên T2 (B), không ngấm trên tưới máu (C), đồng nhất không ngấm trên LGE (D).", "nguon": "S1, tr. 91"}],
  noiDung: `
## Tổng quan
Khối trong tim thường gặp nhất, ở nhĩ, thất hoặc cả hai. Thành phần: lưới fibrin bắt giữ tế bào máu (mới), mô hạt, nguyên bào sợi và tân mạch (đang tổ chức hóa), vôi hóa theo thời gian (S2, tr. 482).

## Đặc điểm lâm sàng
Gặp sau nhồi máu thành trước (mỏm), bệnh cơ tim giãn, phình thất, Takotsubo, rung nhĩ (tiểu nhĩ), xơ hóa nội mạc cơ tim, tăng đông. Nguy cơ tắc mạch não và ngoại biên.

## Chỉ định MRI tim
MRI (EGE/LGE) nhạy hơn siêu âm qua thành ngực với huyết khối thất trái; phân biệt huyết khối với u.

## Protocol chụp
[P9](#/protocol/P9) hoặc thêm EGE vào protocol thường quy: EGE 1–3 phút, TI 440–600 ms, nhiều mặt phẳng qua vùng ứ trệ; LGE với TI dài; tưới máu lần đầu nếu nghi u (S1, tr. 24; S2, tr. 121).

## Hình ảnh MRI
- Không ngấm thuốc trên tưới máu, EGE, LGE; rõ nhất trên EGE với TI dài (mọi mô ngấm thuốc đều sáng, chỉ huyết khối đen) (S1, tr. 88, 90).
- T1 thường đồng tín hiệu với cơ tim; khoảng 50% hơi tăng trên T2 (S2, tr. 482). Huyết khối mới: T1, T2 cao; cũ: thấp.
- Thường nhỏ, đồng nhất, nằm ở vùng không/loạn động hoặc tiểu nhĩ.

## Tiêu chuẩn chẩn đoán — huyết khối so với u (S2, tr. 483)
| Dấu hiệu gợi ý huyết khối | Độ nhạy | Độ đặc hiệu |
| --- | --- | --- |
| Đường kính < 2,4 cm | 84% | 78% |
| Diện tích < 4,1 cm² | 89% | 80% |
| Đồng nhất | 99% | 54% |
| Không tưới máu lần đầu | 96% | 70% |
| Không LGE | 95% | 71% |
| T1 ≥ 422 ms (sau tiêm) | 67% | 80% |

## Chẩn đoán phân biệt
- [Myxoma](#/benh/myxoma): bám vách liên nhĩ, T2 cao, ngấm không đều.
- [U ác tính](#/benh/u-ac-tinh-tim), [di căn](#/benh/di-can-tim): lớn, thâm nhiễm, có tưới máu.
- Bè cơ, cơ nhú, dòng chảy chậm ở mỏm giả huyết khối trên cine → kiểm tra EGE/LGE.
- Huyết khối nhĩ phải lan từ tĩnh mạch chủ (S1, tr. 91).

## Bẫy và lỗi thường gặp
- LGE với TI thường (để null cơ tim) có thể làm huyết khối lẫn với cơ tim null → dùng TI dài (S2, tr. 482).
- Huyết khối nhỏ dạng lớp sát thành dễ bỏ sót.

## Mẫu kết luận
“Khối 18 × 12 mm ở mỏm thất trái, bám vào vùng nhồi máu xuyên thành không động, không ngấm thuốc trên EGE và LGE (TI dài). Kết luận: huyết khối mỏm thất trái.”
`,
});
