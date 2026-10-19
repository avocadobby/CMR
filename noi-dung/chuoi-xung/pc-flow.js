/* Chuỗi xung. Sửa phần noiDung (Markdown). loai: dinhvi, giaiphau, cine, t2, map, t2star, perf, stress, ege, lge, flow, angio, tag. */
CMR.xung({
  id: "pc-flow",
  ten: "Đo dòng chảy (phase contrast)",
  tenEn: "Phase-contrast velocity-encoded flow",
  ngan: "PC flow",
  loai: "flow",
  moTaNgan: "Lưu lượng, thể tích hở, vận tốc đỉnh, Qp/Qs.",
  tuKhoa: ["phase contrast", "PC", "VENC", "flow", "dòng chảy", "Qp/Qs", "velocity", "regurgitation"],
  noiDung: `
## Mục đích
Lưu lượng thuận và ngược (thể tích hở, phân suất hở), vận tốc đỉnh qua chỗ hẹp, tỉ lệ luồng thông Qp/Qs.

## Cách chụp (S1, tr. 22)
1. Chọn mặt phẳng **vuông góc** hướng dòng chảy (đo lưu lượng); vuông góc với **luồng phụt** khi đo vận tốc đỉnh.
2. Cân nhắc chụp thêm mặt phẳng trực giao (in-plane) để định vị vận tốc đỉnh.
3. Đặt đúng hướng mã hóa (qua mặt phẳng, phải–trái, chân–đầu).
4. Chọn VENC: dòng động mạch chủ bình thường 150 cm/s; động mạch phổi 100 cm/s; hẹp van nặng > 400 cm/s.
5. Độ phân giải không gian: tối thiểu 4–6 pixel trên đường kính mạch.

## Mẹo
- VENC tối ưu: trong khoảng 25% trên vận tốc đỉnh thực. Quá thấp → aliasing (cuộn vận tốc); quá cao → đo thấp vận tốc.
- Đặt lát xa đầu lá van.
- Đủ số pha: thở tự do 30 pha; nín thở 20–25 pha. Độ dày lát < 7 mm (S1, tr. 22).
- Đo hở van động mạch chủ: đặt lát gần van để hạn chế đo thấp (S1, tr. 78); hở nặng: đo thêm động mạch chủ xuống tìm dòng ngược toàn tâm trương.
- PC có thể đo thấp vận tốc đỉnh do thể tích từng phần và độ phân giải thời gian thấp (S1, tr. 79).
- Không đo vận tốc qua van hai lá bằng PC đơn thuần (không tin cậy do vòng van di động) (S1, tr. 73).

Tham khảo: dòng chảy và PC (S2, tr. 146–163).
`,
});
