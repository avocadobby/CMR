/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P12",
  ten: "Động mạch chủ",
  chiDinhNgan: "Phình, bóc tách mạn, hẹp eo, van hai lá van, Marfan, viêm động mạch chủ",
  thoiGian: "khoảng 30–40 phút",
  tuKhoa: ["aorta", "động mạch chủ", "aneurysm", "phình", "dissection", "bóc tách", "coarctation", "Marfan", "BAV"],
  buoc: ["dinh-vi", {"x": "t1-bb", "ghi": "ngang, candy cane"}, "cine-lv", {"x": "cine-lvot", "ghi": "gốc ĐMC"}, {"x": "cine-van", "ghi": "van ĐMC + candy cane"}, {"x": "pc-flow", "ghi": "ĐMC lên ± xuống"}, {"x": "mra-ce", "gd": true}, {"x": "lge", "tuyChon": true, "ghi": "viêm ĐMC"}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 81)
1. Giải phẫu, chức năng thất trái.
2. PC (dòng qua van, dòng ngược, chênh qua hẹp eo).
3. Cine đứng dọc chếch động mạch chủ (candy cane).
4. Chồng lát cine qua van động mạch chủ.
5. LGE nếu nghi viêm động mạch.
6. MRA.

## Đo đường kính (S1, tr. 81–83)
- Đo **cuối tâm trương** trên cine hoặc MRA; cùng độ dày lát (< 7 mm).
- Gốc động mạch chủ (vòng van, xoang Valsalva, chỗ nối xoang–ống) trên 2 cine LVOT trực giao hoặc chồng lát qua van.
- Động mạch chủ lên ngang mức động mạch phổi; quai giữa động mạch cảnh chung trái và dưới đòn trái; động mạch chủ xuống ngang động mạch phổi và cơ hoành.
- Vị trí 1–11 theo khuyến cáo ESC: xem [đường kính động mạch chủ](#/tham-khao/duong-kinh-dmc).

## Bẫy đo
- Mặt cắt LVOT/chếch không qua tâm động mạch → đo thấp.
- MRA không đồng bộ ECG → trung bình theo nhịp, không phải cuối tâm trương.
- Ảnh ngang bị chếch → đo cao; black blood có thể tính cả thành mạch → đo cao (S1, tr. 83).

## Báo cáo (S1, tr. 81)
1. Đường kính các vị trí chuẩn.
2. Vị trí (quai trái/phải), độ ngoằn ngoèo.
3. Xơ vữa, phình, bóc tách, viêm.
4. Dòng chảy; hẹp/hở van động mạch chủ kèm theo.
`,
});
