/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P11",
  ten: "Tim bẩm sinh, luồng thông và tim phải",
  chiDinhNgan: "Thông liên nhĩ/thất, bất thường tĩnh mạch phổi, Fallot sau mổ, giãn thất phải",
  thoiGian: "khoảng 45–60 phút",
  tuKhoa: ["congenital", "bẩm sinh", "shunt", "ASD", "VSD", "Fallot", "Qp/Qs", "RV"],
  buoc: ["dinh-vi", {"x": "t1-bb", "ghi": "chồng lát ngang"}, "cine-lv", {"x": "cine-rv", "ghi": "ngang + RVOT"}, {"x": "pc-flow", "ghi": "ĐMC, ĐMP, nhánh"}, {"x": "mra-3d", "tuyChon": true}, {"x": "mra-ce", "gd": true, "ghi": "ĐMP, TMP"}, {"x": "lge", "tuyChon": true}],
  noiDung: `
## Chuẩn bị bệnh nhân
- Sàng lọc an toàn MRI: thiết bị cấy, mảnh kim loại, có thai, sợ không gian kín (S1, tr. 113).
- Chức năng thận (eGFR) trước tiêm Gd; ưu tiên thuốc vòng (macrocyclic) (S1, tr. 112).
- Đặt đường truyền tĩnh mạch (tay phải nếu chụp mạch), gắn điện cực ECG chuẩn, cuộn thu tim.
- Hướng dẫn nín thở (thở ra nhẹ rồi nín).

## Thứ tự (S1, tr. 102; S2, tr. 489–515)
1. Giải phẫu: chồng lát ngang black blood hoặc bSSFP, đi theo cách tiếp cận phân đoạn (situs, kết nối nhĩ–thất, thất–đại động mạch).
2. Chức năng thất trái (cả nhĩ): chồng lát trục ngắn, 4/2/3CH.
3. Chức năng thất phải: chồng lát ngang, RVOT, đường vào/ra, 2 buồng thất phải.
4. Cine thân và nhánh động mạch phổi.
5. PC thân động mạch phổi và động mạch chủ (Qp/Qs); nhánh phải/trái khi cần.
6. 3D whole-heart hoặc MRA: tĩnh mạch phổi, động mạch phổi, động mạch chủ.
7. LGE.

## Mẹo
- Qp/Qs > 1,8, giãn/rối loạn chức năng thất phải, tăng áp phổi là “cờ đỏ” trong thông liên nhĩ (S1, tr. 104).
- Kiểm tra Ebstein khi có hở ba lá nặng (S1, tr. 104).
- Trẻ nhỏ: điều chỉnh độ phân giải, cân nhắc thở tự do nhiều lần trung bình, gây mê (S2, tr. 496–501).
`,
});
