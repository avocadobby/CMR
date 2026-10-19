/* Chuỗi xung. Sửa phần noiDung (Markdown). loai: dinhvi, giaiphau, cine, t2, map, t2star, perf, stress, ege, lge, flow, angio, tag. */
CMR.xung({
  id: "dinh-vi",
  ten: "Định vị và mặt cắt chuẩn",
  tenEn: "Localizers / standard views",
  ngan: "Định vị",
  loai: "dinhvi",
  moTaNgan: "Ảnh định vị 3 mặt phẳng và cách lập các mặt cắt 2CH, 4CH, 3CH, trục ngắn.",
  tuKhoa: ["localizer", "survey", "scout", "2CH", "4CH", "3CH", "SA", "VLA", "HLA", "LVOT", "RVOT"],
  noiDung: `
## Mục đích
Mọi lần chụp đều bắt đầu bằng một loạt ảnh định vị ngang, đứng dọc và đứng ngang, độ phân giải thấp, thở tự do. Ảnh định vị cho cái nhìn tổng quan về giải phẫu và dùng để lập các mặt cắt tiếp theo (S1, tr. 5).

## Lập mặt cắt thất trái
1. **2 buồng giả (p2CH, VLA):** mặt phẳng vuông góc với ảnh ngang, đi qua mỏm thất trái và van hai lá.
2. **4 buồng giả (p4CH, HLA):** từ p2CH, cắt mặt phẳng trực giao qua mỏm và van hai lá.
3. **Trục ngắn thật (SA):** vuông góc với cả p2CH và p4CH; chụp chồng lát trục ngắn phủ toàn bộ thất trái (S1, tr. 6).
4. **4CH thật:** trực giao với SA và p2CH, cắt thất phải ở chỗ rộng nhất, cắt thất trái dưới cơ nhú trước bên.
5. **2CH thật:** trực giao với 4CH và SA, cắt thành trước và thành dưới, song song vách liên thất.
6. **3CH (LVOT dọc):** trực giao với 2CH hoặc 4CH và SA đáy, đi qua van động mạch chủ và thành sau (S1, tr. 7).

> Mẹo: có thể dùng p2CH, p4CH thay cho 2CH, 4CH để lập nhanh. Tên đồng nghĩa: 2CH = VLA; 4CH = HLA; 3CH = LVOT đứng dọc.

## Lập mặt cắt thất phải và động mạch phổi
- **Chồng lát ngang thất phải:** từ cơ hoành đến chỗ chia động mạch phổi, hoặc chồng lát 4CH; có thể sao chép vị trí từ ảnh định vị ngang.
- **RVOT đứng dọc:** mặt phẳng đứng dọc qua thân động mạch phổi, van động mạch phổi và buồng thất phải; **RVOT đứng ngang:** trực giao với RVOT đứng dọc.
- **Đường vào/ra thất phải:** lập bằng 3 điểm (van ba lá, mỏm thất phải trên 4CH, van động mạch phổi trên RVOT) (S1, tr. 8).
- **Động mạch phổi phải/trái:** mặt phẳng trực giao qua từng nhánh trên ảnh ngang (S1, tr. 9).

## Van động mạch chủ và động mạch chủ
- **LVOT đứng ngang:** trực giao qua gốc động mạch chủ trên 3CH.
- **Mặt cắt van động mạch chủ (en face):** vuông góc với gốc động mạch chủ, song song mặt van trên cả 3CH và LVOT đứng ngang; nên chụp 4–5 lát.
- **Quai động mạch chủ (candy cane):** lập 3 điểm trên chồng lát ngang: động mạch chủ lên, động mạch chủ xuống, đỉnh quai (S1, tr. 10).

## Mặt cắt đo dòng chảy
- **Động mạch chủ:** vuông góc với gốc động mạch chủ trên LVOT đứng dọc và đứng ngang.
- **Thân động mạch phổi:** vuông góc trên RVOT đứng dọc và đứng ngang.
- **Nhánh phải/trái:** vuông góc với nhánh trên ảnh ngang và ảnh cắt chéo của nó.
- Vị trí lát cắt so với van ảnh hưởng tới đo hở van động mạch chủ (S1, tr. 11).

## Mẹo kỹ thuật
- Kiểm tra bệnh nhân nằm ở tâm từ trường (isocentre) và tín hiệu ở tim đủ mạnh.
- Kiểm tra chọn đúng các phần tử cuộn thu (coil) (S1, tr. 5).
`,
});
