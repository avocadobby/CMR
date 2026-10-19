/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "thiet-bi-cay",
  ten: "Bệnh nhân có thiết bị cấy trong người",
  tenEn: "Patients with implanted devices (pacemaker, ICD, valves, stents)",
  vietTat: ["CIED", "ICD", "PPM"],
  nhom: "dac-biet",
  thuTu: 1,
  tuKhoa: ["máy tạo nhịp", "pacemaker", "ICD", "MR conditional", "MR unsafe", "an toàn MRI", "van nhân tạo", "stent", "dây điện cực bỏ lại", "SAR", "wideband LGE"],
  moTaNgan: "Kiểm tra nhãn MR conditional, lập trình thiết bị, giảm ảnh giả (cine GRE, LGE băng rộng).",
  protocol: ["P1"],
  thoiGian: "tùy chỉ định",
  tuongPhan: null,
  dauHieu: ["Xác định loại thiết bị và nhãn: **MR safe / MR conditional / MR unsafe**", "MR conditional: tuân thủ đúng điều kiện của hãng (cường độ từ trường, SAR, vùng chụp, lập trình)", "Giảm ảnh giả: tránh bSSFP gần thiết bị → cine GRE spoiled; LGE băng rộng (wideband)", "Van tim kim loại, stent mạch vành phần lớn MR conditional"],
  dau: [],
  tomTat: {"lamSang": "Bệnh nhân mang thiết bị cần MRI tim", "hinhThai": "—", "lge": "—", "mapping": "—", "phanBiet": "—"},
  nguon: ["S1, tr. 13–14, 113", "S2, tr. 55–62, 70–76 (MRI safety, devices)"],
  hinh: [{"src": "hinh/thiet-bi-cay/s2-276-1.jpg", "chuThich": "Chụp MRI tim chất lượng chẩn đoán ở bệnh nhân có máy tạo nhịp/ICD (điện cực ở mỏm thất phải).", "nguon": "S2, tr. 276"}],
  noiDung: `
## Tổng quan
Thiết bị cấy chủ động (máy tạo nhịp, ICD, máy ghi biến cố, máy kích thích thần kinh, thiết bị hỗ trợ thất) có thể bị ảnh hưởng bởi từ trường tĩnh (lực hút, công tắc từ), sóng RF (nóng đầu điện cực, cảm nhận quá mức/thiếu, khởi động lại, hiếm khi gây rối loạn nhịp nguy hiểm) và gradient (S2, tr. 70–72).

## Phân loại (S1, tr. 113)
| Nhãn | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| MR unsafe | Nguy hiểm trong mọi môi trường MR | Phần lớn máy tạo nhịp, ICD đời cũ; bơm insulin; mảnh kim loại trong mắt |
| MR conditional | Không nguy hiểm trong điều kiện xác định | Phần lớn van tim kim loại, stent mạch vành, khớp nhân tạo, răng giả; máy tạo nhịp/ICD MR conditional |
| MR safe | Không nguy hiểm trong mọi môi trường MR | Chỉ khi thiết bị có biểu tượng MR safe |

Khi nghi ngờ: tra cứu www.mrisafety.com (S1, tr. 113).

## Quy trình với máy tạo nhịp/ICD MR conditional (S2, tr. 71–72)
1. Xác nhận toàn bộ hệ thống (máy + dây) là MR conditional, không có dây bỏ lại hoặc dây thượng tâm mạc.
2. Kiểm tra điều kiện của hãng: cường độ từ trường (thường 1,5T), giới hạn SAR, vùng chụp cho phép (có cho phép ngực không).
3. Lập trình chế độ MRI (ví dụ tạo nhịp không đồng bộ với bệnh nhân phụ thuộc máy; tắt chức năng sốc của ICD).
4. Theo dõi ECG, SpO2 liên tục; có người và phương tiện cấp cứu; kiểm tra, lập trình lại sau chụp.
5. Chụp ngoài điều kiện của hãng = “off-label”, không bảo đảm an toàn (S2, tr. 72).

## Giảm ảnh giả
- Ảnh giả kim loại ít hơn trên spin echo so với gradient echo; tránh bSSFP (S1, tr. 14).
- Cine GRE spoiled thay bSSFP gần thiết bị; LGE băng rộng (wideband) nếu máy có; đặt tay bệnh nhân ra xa nếu có thể; chọn mặt cắt tránh vùng máy.
- Dây thép xương ức gây ảnh giả nhưng không ảnh hưởng an toàn (S2, tr. 455).

## Mẫu ghi chú
“Máy tạo nhịp hai buồng MR conditional (hệ thống đầy đủ), chụp ở 1,5T, SAR thường quy, chế độ MRI DOO 80 l/ph theo lập trình của bác sĩ điện sinh lý; theo dõi liên tục, không biến cố. Ảnh giả kim loại vùng thành trước – mỏm; dùng cine GRE và LGE băng rộng.”
`,
});
