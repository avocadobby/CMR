/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "u-lanh-tinh-khac",
  ten: "U lành tính khác của tim",
  tenEn: "Other benign cardiac tumours: lipoma, fibroma, papillary fibroelastoma, rhabdomyoma, haemangioma",
  vietTat: [],
  nhom: "khoi-u",
  thuTu: 3,
  tuKhoa: ["lipoma", "u mỡ", "fibroma", "u xơ", "fibroelastoma", "u nhú xơ đàn hồi", "rhabdomyoma", "u cơ vân", "xơ cứng củ", "tuberous sclerosis", "haemangioma", "u máu"],
  moTaNgan: "Mỗi loại có dấu hiệu MRI riêng: mỡ (lipoma), T2 thấp + LGE mạnh (fibroma), nhỏ trên van (fibroelastoma).",
  protocol: ["P9"],
  thoiGian: "45–60 phút",
  dauHieu: ["**Lipoma:** tín hiệu như mỡ dưới da trên mọi chuỗi, **xóa khi xóa mỡ**, không ngấm", "**Fibroma:** trong thành thất (vách, thành tự do), **T2 thấp**, **LGE ngấm mạnh** đồng nhất, có thể vôi hóa", "**Fibroelastoma:** nhỏ < 1,5 cm, có cuống, **bám van** (thường van động mạch chủ), rất di động", "**Rhabdomyoma:** trẻ em, nhiều khối trong thành, liên quan xơ cứng củ, đồng tín hiệu, không/ít ngấm", "**U máu:** T2 rất cao, ngấm mạnh hướng tâm"],
  dau: ["khoi", "mo"],
  tomTat: {"lamSang": "Thường tình cờ; fibroelastoma gây tắc mạch; fibroma, rhabdomyoma gây rối loạn nhịp ở trẻ", "hinhThai": "Tùy loại", "lge": "Fibroma ngấm mạnh; lipoma không ngấm", "mapping": "—", "phanBiet": "Dựa vào tín hiệu T1/T2, xóa mỡ, LGE"},
  nguon: ["S1, tr. 85, 88", "S2, tr. 469–473 (Benign cardiac tumours)"],
  hinh: [{"src": "hinh/u-lanh-tinh-khac/s2-475-0.jpg", "chuThich": "Lipoma vách liên thất đoạn giữa: tăng tín hiệu T1, bị xóa khi xóa mỡ, không ngấm thuốc.", "nguon": "S2, tr. 475"}, {"src": "hinh/u-lanh-tinh-khac/s2-472-0.jpg", "chuThich": "Fibroma vách trước đáy: đồng tín hiệu T1, T2 thấp, LGE mạnh; mô học dạng xoắn.", "nguon": "S2, tr. 472"}, {"src": "hinh/u-lanh-tinh-khac/s2-472-1.jpg", "chuThich": "Fibroelastoma nhú van động mạch chủ: khối nhỏ tròn bám lá van; đại thể như hải quỳ.", "nguon": "S2, tr. 472"}, {"src": "hinh/u-lanh-tinh-khac/s2-470-0.jpg", "chuThich": "Rhabdomyoma: khối trong thành thất trái; tế bào “hình nhện” trên mô học.", "nguon": "S2, tr. 470"}],
  noiDung: `
## Tổng quan
U lành chiếm khoảng 70% u tim nguyên phát; ngoài myxoma còn có lipoma, fibroelastoma nhú, fibroma, rhabdomyoma, u máu (S1, tr. 85).

## Đặc điểm lâm sàng
- **Rhabdomyoma:** u tim thường gặp nhất ở trẻ em, liên quan xơ cứng củ, có thể tự thoái lui.
- **Fibroma:** trẻ em và người trẻ; rối loạn nhịp thất, đột tử.
- **Fibroelastoma nhú:** người lớn tuổi; tắc mạch (đột quỵ).
- **Lipoma:** thường tình cờ.

## Chỉ định MRI tim
Đặc tính mô để định danh u, đánh giá liên quan cấu trúc, lập kế hoạch mổ hoặc theo dõi.

## Protocol chụp
[P9 · Khối](#/protocol/P9). Fibroelastoma nhỏ di động khó thấy: cine lát mỏng qua van.

## Hình ảnh MRI (S2, tr. 469–473; S1, tr. 85, 88)
| U | Vị trí | Tín hiệu và ngấm thuốc |
| --- | --- | --- |
| Lipoma | Bất kỳ buồng (trong thành hoặc trong buồng), màng ngoài tim | Như mỡ dưới da mọi chuỗi; xóa khi xóa mỡ; không ngấm |
| Fibroma | Trong thành thất (thành tự do, vách), có thể rất lớn (8 cm) | T1, T2 đồng/thấp (nhiều xơ); không biến dạng trên tagging; LGE mạnh |
| Fibroelastoma nhú | Bám van (động mạch chủ, hai lá), < 1,5 cm, có cuống | Đồng tín hiệu T1, T2; không mất tín hiệu khi xóa mỡ; giảm tín hiệu trên cine; rất di động |
| Rhabdomyoma | Trong thành hoặc trong buồng thất, thường nhiều khối | Đồng tín hiệu T1, hơi cao T2, đồng nhất; giảm tín hiệu trên cine |
| U máu | Trong buồng | T1 đồng/hơi cao, T2 rất cao; ngấm mạnh, đầy dần hướng tâm |

## Tín hiệu các khối thường gặp
| Khối | T1 | T2 | LGE |
| --- | --- | --- | --- |
| Huyết khối | Thấp (cao nếu mới) | Thấp (cao nếu mới) | Không ngấm (rõ nhất trên EGE) |
| Nang màng ngoài tim | Thấp | Cao | Không |
| Myxoma | Đồng tín hiệu | Cao | Không đồng nhất |
| Lipoma | Cao (như mỡ, xóa khi xóa mỡ) | Cao | Không |
| Fibroma | Đồng tín hiệu | Thấp | Ngấm mạnh |
| Rhabdomyoma | Đồng tín hiệu | Đồng/hơi cao | Không/ít |
| Angiosarcoma | Không đồng nhất | Không đồng nhất | Không đồng nhất |
| Rhabdomyosarcoma | Đồng tín hiệu | Cao | Đồng nhất |
| Sarcoma không biệt hóa | Đồng tín hiệu | Cao | Không đồng nhất |
| Lymphoma | Đồng tín hiệu | Đồng tín hiệu | Không/ít |
| Di căn | Thấp | Cao | Không đồng nhất |
| Di căn melanoma | Cao (melanin) | Thấp | — |

Tín hiệu so với cơ tim (S1, tr. 88).

## Chẩn đoán phân biệt
- Phì đại mỡ vách liên nhĩ (không có vỏ, chừa hố bầu dục) so với lipoma — xem [giả u](#/benh/gia-u-tim).
- Fibroma so với [HCM](#/benh/hcm) khu trú: fibroma không co bóp trên tagging, LGE đồng nhất.
- Fibroelastoma so với sùi viêm nội tâm mạc, dải Lambl.

## Mẫu kết luận
“Khối trong thành tự do thất trái 40 mm, giới hạn rõ, T2 thấp, không biến dạng trên tagging, ngấm thuốc mạnh đồng nhất trên LGE. Kết luận: phù hợp fibroma tim.”
`,
});
