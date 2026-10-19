/* Chuỗi xung. Sửa phần noiDung (Markdown). loai: dinhvi, giaiphau, cine, t2, map, t2star, perf, stress, ege, lge, flow, angio, tag. */
CMR.xung({
  id: "tuoi-mau-stress",
  ten: "Tưới máu gắng sức (thuốc giãn mạch)",
  tenEn: "Vasodilator stress first-pass perfusion",
  ngan: "Tưới máu stress",
  loai: "perf",
  moTaNgan: "Adenosine/regadenoson + bolus Gd, ≥ 3 lát trục ngắn, mỗi nhịp tim.",
  tuKhoa: ["stress perfusion", "adenosine", "regadenoson", "dipyridamole", "ischaemia", "thiếu máu", "perfusion"],
  noiDung: `
## Mục đích
Phát hiện thiếu máu cơ tim cảm ứng: khuyết tưới máu lúc gắng sức, bình thường lúc nghỉ, không có LGE tương ứng.

## Thuốc giãn mạch (S1, tr. 28)
- **Adenosine:** 140 µg/kg/phút ít nhất 3 phút; cân nhắc 170 hoặc 210 µg/kg/phút nếu đáp ứng huyết động chưa đủ.
- **Regadenoson:** 0,4 mg tiêm một lần.
- **Dipyridamole:** 0,56 mg/kg trong 4 phút.
- **Chống chỉ định chung:** dị ứng đã biết, block nhĩ thất độ II/III, bệnh phổi tắc nghẽn hồi phục nặng.

## Cách chụp (S1, tr. 23)
1. Định vị như cine thất trái.
2. Chuỗi xung gradient echo saturation-recovery; parallel imaging (thường tăng tốc ×2).
3. Trục ngắn ít nhất 3 lát (kỹ thuật “3 trong 5”), có thể thêm trục dài; dày 8–10 mm, độ phân giải trong mặt phẳng < 2,5 mm; lý tưởng là thu mỗi nhịp tim.
4. FOV nhỏ nhất có thể, song song thành ngực trước.
5. Gd 0,05–0,1 mmol/kg, tốc độ 3–7 ml/s, sau đó 30 ml nước muối cùng tốc độ.
6. Bắt đầu nín thở ở các pha đầu, trước khi thuốc tới buồng thất trái; chụp > 40 nhịp tim.

### Kỹ thuật “3 trong 5”
Lập 5 lát vuông góc trục dọc trên 2CH và 4CH thì cuối tâm thu, chỉnh khoảng cách để lát đầu ở mặt phẳng van hai lá và lát cuối ở mỏm; bỏ lát 1 và 5 → 3 lát vị trí chuẩn, lặp lại được (S1, tr. 23).

## Mẹo
- Luôn chụp thử “dummy” không thuốc để kiểm tra vị trí lát và ảnh giả.
- Nhịp nhanh: chuyển sang thu xen kẽ nhịp hoặc giảm số lát.
- Lách “tắt sáng” (splenic switch-off) ở pha đầu gợi ý adenosine đủ tác dụng; regadenoson không gây dấu hiệu này (S1, tr. 23, 28).
- Ảnh giả viền tối (dark rim): giảm liều/tốc độ thuốc, tăng độ phân giải không gian (S1, tr. 14). Viền tối thường xuất hiện sớm, thoáng qua, chỉ vài pixel, cả lúc nghỉ.

Tham khảo: tưới máu động có thuốc tương phản (S2, tr. 103–118).
`,
});
