/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P10",
  ten: "Bệnh van tim",
  chiDinhNgan: "Định lượng hở/hẹp van, cơ chế tổn thương, ảnh hưởng lên thất",
  thoiGian: "khoảng 40–50 phút",
  tuKhoa: ["valve", "van", "regurgitation", "stenosis", "hở van", "hẹp van", "MR", "AR", "AS"],
  buoc: ["dinh-vi", "cine-lv", "cine-rv", {"x": "cine-van", "ghi": "lát 5 mm qua van"}, {"x": "pc-flow", "ghi": "ĐMC ± ĐMP"}, {"x": "lge", "gd": true, "tuyChon": true, "ghi": "xơ hóa"}],
  noiDung: `
## Chuẩn bị
Thường không bắt buộc thuốc tương phản; tiêm Gd khi cần tìm xơ hóa (ví dụ hẹp van động mạch chủ, hở hai lá thứ phát) hoặc đánh giá động mạch chủ.

## Mục tiêu (S1, tr. 72)
1. Cơ chế tổn thương van (giải phẫu).
2. Định lượng mức độ.
3. Hậu quả lên thất, nhĩ, động mạch.

## Thứ tự
1. Giải phẫu, chức năng hai thất (thể tích, EF, khối cơ).
2. Cine nhắm vào van, lát 5 mm, có thể chồng lấn: van hai lá (4CH, 2CH, 3CH, chồng lát 3CH); van động mạch chủ (2 LVOT, trục ngắn qua van); van ba lá/động mạch phổi (4CH, 2 buồng thất phải, RVOT) (S1, tr. 73, 77, 80).
3. PC: qua van động mạch chủ (lát gần van) ± thân động mạch phổi; vuông góc luồng phụt khi đo vận tốc đỉnh.
4. LGE (tùy chọn).

## Định lượng (S1, tr. 75, 78, 80)
- Hở hai lá: RegV = SV thất trái − SV ĐMC (PC); hoặc SV thất trái − SV thất phải (chỉ khi hở một van). RegF = RegV / SV thất trái.
- Hở ĐMC: dòng ngược đo trực tiếp trên PC; RegF = dòng ngược / dòng thuận.
- Hở ba lá: SV thất phải − SV ĐMP (PC); hở ĐMP: dòng ngược trên PC qua ĐMP.
- Hẹp van: planimetry diện tích lỗ van (cm²), vận tốc đỉnh và trung bình.

## Hạn chế
- Không đánh giá mức độ chỉ bằng mắt trên cine (mất tín hiệu do dòng xoáy).
- PC có thể đo thấp vận tốc; cần lát vuông góc dòng; chú ý dòng ngược sinh lý vào mạch vành và chuyển động của động mạch chủ (S1, tr. 72).
`,
});
