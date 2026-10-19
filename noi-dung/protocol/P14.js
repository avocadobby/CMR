/* Protocol. buoc = các bước theo thứ tự; mỗi bước là mã chuỗi xung (xem noi-dung/chuoi-xung) hoặc { x: mã, ghi: 'ghi chú', tuyChon: true, gd: true }. gd: true = tiêm thuốc Gd ngay trước bước này. */
CMR.protocol({
  ma: "P14",
  ten: "Động mạch vành bất thường",
  chiDinhNgan: "Nghi bất thường gốc/đường đi động mạch vành, sau phẫu thuật chuyển gốc động mạch",
  thoiGian: "khoảng 30–45 phút",
  tuKhoa: ["coronary", "mạch vành", "anomalous", "bất thường", "whole heart"],
  buoc: ["dinh-vi", {"x": "cine-lv", "ghi": "+ 4CH độ phân giải thời gian cao"}, {"x": "mra-3d", "ghi": "navigator, voxel đẳng hướng"}, {"x": "dobutamine", "tuyChon": true, "ghi": "nếu đi giữa 2 động mạch"}, {"x": "lge", "gd": true, "tuyChon": true}],
  noiDung: `
## Chuẩn bị
Không bắt buộc thuốc tương phản. Nhịp tim chậm, đều giúp ảnh tốt hơn (cân nhắc chẹn beta theo chỉ định).

## Thứ tự (S1, tr. 21, 37)
1. Cine 4CH/2CH độ phân giải thời gian cao để tìm thời kỳ nghỉ của mạch vành.
2. MRA 3D whole-heart có navigator (thở tự do); MRA 2D nhắm đích khi cần.
3. Đường đi giữa động mạch chủ và động mạch phổi: cân nhắc dobutamine (thay vì adenosine) để tìm rối loạn vận động vùng.

## Báo cáo (S1, tr. 37)
1. Gốc: cao/thấp/ở mép van; từ xoang đối diện; ngoài xoang; LAD và LCx có lỗ riêng.
2. Đường đi bất thường: giữa hai động mạch, sau động mạch chủ…
3. Bất thường nội tại: giãn, phình, thiểu sản; đoạn trong cơ (cầu cơ).
4. Bất thường nơi tận cùng; tuần hoàn bàng hệ bất thường.

## Mẹo
- Voxel đẳng hướng, cửa sổ thu < 150 ms.
- Đường đi “ác tính”: giữa động mạch chủ và RVOT, nhất là động mạch vành trái xuất phát từ xoang phải (S1, tr. 37).
`,
});
