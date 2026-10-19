/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "viem-mang-ngoai-tim",
  ten: "Viêm màng ngoài tim",
  tenEn: "Acute / recurrent pericarditis",
  vietTat: [],
  nhom: "mang-ngoai-tim",
  thuTu: 1,
  tuKhoa: ["pericarditis", "màng ngoài tim", "đau ngực kiểu màng phổi", "tiếng cọ", "viêm màng ngoài cơ tim", "Dressler"],
  moTaNgan: "Màng ngoài tim dày ≥ 3 mm, phù trên T2, ngấm thuốc muộn → viêm đang hoạt động.",
  protocol: ["P8"],
  thoiGian: "35–45 phút",
  dauHieu: ["Màng ngoài tim dày **≥ 3 mm** (bình thường 1,2–1,7 mm)", "Tăng tín hiệu màng ngoài tim trên T2 STIR xóa mỡ = viêm cấp", "**LGE màng ngoài tim** = viêm đáng kể (tân sinh mạch)", "± Tràn dịch; kiểm tra cơ tim kèm theo (viêm màng ngoài cơ tim)"],
  dau: ["mnt-day", "lge-mang-ngoai-tim", "tran-dich-mnt", "t2-tang"],
  tomTat: {"lamSang": "Đau ngực kiểu màng phổi, tiếng cọ, ST chênh lan tỏa, tràn dịch", "hinhThai": "Màng ngoài tim dày, tràn dịch; cơ tim thường bình thường", "lge": "Lá màng ngoài tim ngấm thuốc", "mapping": "T2 màng ngoài tim tăng", "phanBiet": "Kèm LGE cơ tim dưới thượng tâm mạc → viêm màng ngoài cơ tim"},
  nguon: ["S1, tr. 67", "S2, tr. 399–403 (Pericardial disease)"],
  hinh: [{"src": "hinh/viem-mang-ngoai-tim/s1-67.jpg", "chuThich": "LGE 4CH, 3CH, SA: màng ngoài tim ngấm thuốc do viêm, không kèm tràn dịch.", "nguon": "S1, tr. 67"}, {"src": "hinh/viem-mang-ngoai-tim/s2-403.jpg", "chuThich": "Bệnh nhân nữ 48 tuổi đau ngực: tăng tín hiệu màng ngoài tim trên T2 xóa mỡ và LGE màng ngoài tim (viêm cấp).", "nguon": "S2, tr. 403"}],
  noiDung: `
## Tổng quan
Viêm màng ngoài tim cấp, bán cấp, mạn hoặc tái phát. Màng ngoài tim gồm lá tạng và lá thành, dày bình thường < 2 mm. Khi viêm, tân sinh mạch và tăng khoảng ngoại bào làm lá thành ngấm Gd (S2, tr. 399, 402).

## Đặc điểm lâm sàng
Đau ngực kiểu màng phổi, tiếng cọ màng ngoài tim, ST chênh lan tỏa, tràn dịch. Nguyên nhân: virus, sau nhồi máu (Dressler), sau phẫu thuật, bệnh tự miễn, ung thư, lao, suy thận, xạ trị.

## Chỉ định MRI tim
Phương tiện hàng thứ hai: khi chẩn đoán chưa rõ, nghi viêm màng ngoài cơ tim, viêm tái phát hoặc kéo dài (đánh giá mức hoạt động để chỉnh điều trị kháng viêm), nghi co thắt (S2, tr. 402).

## Protocol chụp
[P8 · Màng ngoài tim](#/protocol/P8) (S1, tr. 67): giải phẫu (T1, T2 black blood), chức năng hai thất, phù (T2 STIR xóa mỡ), LGE.

## Hình ảnh MRI (S2, tr. 402–403)
- Màng ngoài tim dày ≥ 3 mm trên T1 black blood gợi ý viêm.
- T2 STIR: tín hiệu cao trong màng ngoài tim = viêm cấp, tân sinh mạch.
- LGE màng ngoài tim: chỉ điểm viêm đáng kể; nếu có tràn dịch, phân biệt được lá tạng và lá thành cùng ngấm thuốc.
- Đánh giá cơ tim: LGE dưới thượng tâm mạc → viêm màng ngoài cơ tim.

## Chẩn đoán phân biệt
- [Tràn dịch màng ngoài tim](#/benh/tran-dich-mang-ngoai-tim) không viêm: không dày, không ngấm.
- [Viêm màng ngoài tim co thắt](#/benh/viem-mang-ngoai-tim-co-that): sinh lý co thắt trên cine thời gian thực.
- [Viêm cơ tim](#/benh/viem-co-tim): tổn thương chủ yếu cơ tim.
- Di căn/u màng ngoài tim: dày dạng nốt, khối, ngấm không đều — xem [u màng ngoài tim](#/benh/nang-u-mang-ngoai-tim).

## Bẫy và lỗi thường gặp
- Mỡ thượng tâm mạc, mỡ màng ngoài tim dễ lẫn với lá màng ngoài tim dày → dùng xóa mỡ.
- Dịch màng ngoài tim tự do có thể tối trên black blood, giống màng ngoài tim dày.

## Mẫu kết luận
“Màng ngoài tim dày lan tỏa 4 mm, tăng tín hiệu trên T2 STIR xóa mỡ và ngấm thuốc mạnh trên LGE; tràn dịch lượng ít. Cơ tim không LGE. Chức năng hai thất bình thường; không có dấu hiệu co thắt trên cine thời gian thực. Kết luận: viêm màng ngoài tim cấp đang hoạt động.”
`,
});
