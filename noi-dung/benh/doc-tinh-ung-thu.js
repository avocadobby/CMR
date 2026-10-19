/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "doc-tinh-ung-thu",
  ten: "Tổn thương tim do điều trị ung thư",
  tenEn: "Cancer therapy–related cardiac dysfunction (cardio-oncology)",
  vietTat: ["CTRCD"],
  nhom: "viem-tham-nhiem",
  thuTu: 8,
  tuKhoa: ["anthracycline", "doxorubicin", "trastuzumab", "xạ trị", "độc tính tim", "cardio-oncology", "checkpoint inhibitor", "viêm cơ tim do miễn dịch"],
  moTaNgan: "Theo dõi EF chính xác (lặp lại tốt hơn siêu âm), phát hiện viêm cơ tim do thuốc miễn dịch.",
  protocol: ["P1", "P5"],
  thoiGian: "30–45 phút",
  dauHieu: ["EF giảm ≥ 10 điểm xuống < 55% (hoặc giảm 5 điểm có triệu chứng)", "MRI phát hiện thay đổi EF nhỏ nhờ độ lặp lại cao (khoảng 5% so với 13% của siêu âm 2D)", "T1 native, ECV, T2 tăng sớm; giảm khối cơ thất trái", "Viêm cơ tim do thuốc ức chế điểm kiểm soát miễn dịch: phù, LGE không thiếu máu"],
  dau: ["giam-ef", "gian-that-trai", "t1-tang", "t2-tang", "ecv-tang", "lge-giua-thanh", "tran-dich-mnt", "mnt-day"],
  tomTat: {"lamSang": "Đang/đã dùng anthracycline, trastuzumab, thuốc miễn dịch, xạ trị ngực", "hinhThai": "Giảm EF, giãn thất; xạ trị: van, màng ngoài tim, mạch vành", "lge": "Thường không hoặc giữa thành không đặc hiệu", "mapping": "T1, ECV, T2 tăng sớm", "phanBiet": "Cần MRI nền trước điều trị để so sánh"},
  nguon: ["S2, tr. 329–342 (Cardiac involvement in oncologic patients)"],
  hinh: [{"src": "hinh/doc-tinh-ung-thu/s2-337.jpg", "chuThich": "Phụ nữ chụp MRI trước và sau hóa trị anthracycline: giảm chức năng và biến dạng cơ tim.", "nguon": "S2, tr. 337"}, {"src": "hinh/doc-tinh-ung-thu/s2-338.jpg", "chuThich": "Bệnh nhân nữ 40 tuổi sau xạ trị toàn thân và anthracycline liều cao: tổn thương tim muộn.", "nguon": "S2, tr. 338"}],
  noiDung: `
## Tổng quan
Điều trị ung thư (anthracycline, trastuzumab, thuốc ức chế tyrosine kinase, thuốc ức chế điểm kiểm soát miễn dịch, xạ trị ngực) có thể tổn thương cơ tim, màng ngoài tim, van, mạch vành. Độc tính type I (anthracycline, gây chết tế bào, phụ thuộc liều) và type II (trastuzumab, thường hồi phục) (S2, tr. 329–334).

## Đặc điểm lâm sàng
- Định nghĩa độc tính tim: EF giảm 5 điểm có triệu chứng, hoặc giảm 10 điểm không triệu chứng xuống < 55% (S2, tr. 335).
- Anthracycline: 98% xảy ra trong năm đầu sau điều trị (trung vị 3,5 tháng).
- Xạ trị: bệnh tim muộn 10–30% sau 5–10 năm (màng ngoài tim co thắt, bệnh van, bệnh mạch vành).
- Thuốc ức chế điểm kiểm soát miễn dịch: viêm cơ tim tối cấp, hiếm nhưng nặng (S2, tr. 330).

## Chỉ định MRI tim
- Đo EF nền và theo dõi khi siêu âm khó hoặc EF ở ngưỡng quyết định (độ lặp lại cao: phát hiện thay đổi khoảng 5% so với 13% của siêu âm 2D) (S2, tr. 336).
- Nghi viêm cơ tim do thuốc miễn dịch, bệnh màng ngoài tim sau xạ, khối cạnh tim.

## Protocol chụp
[P1](#/protocol/P1) cho theo dõi chức năng; [P5](#/protocol/P5) khi nghi viêm cơ tim; thêm [P8](#/protocol/P8) nếu bệnh màng ngoài tim.

## Hình ảnh MRI (S2, tr. 336–339)
- EF giảm, thể tích tăng; strain (tagging, feature tracking) giảm trước EF.
- T1 native, T2, ECV tăng sớm (phù, xơ hóa kẽ); giảm khối cơ thất trái sau anthracycline.
- LGE thường không có hoặc không đặc hiệu.
- Sau xạ: dày/ngấm màng ngoài tim, bệnh van, xơ hóa cơ tim.

## Chẩn đoán phân biệt
- [Viêm cơ tim](#/benh/viem-co-tim) do nguyên nhân khác; [DCM](#/benh/dcm); [di căn tim](#/benh/di-can-tim); [viêm màng ngoài tim co thắt](#/benh/viem-mang-ngoai-tim-co-that).

## Mẫu kết luận
“So với MRI trước điều trị: EF giảm từ 62% xuống 49%, EDVi tăng từ 70 lên 86 ml/m². Không LGE. T1 native 1040 ms, ECV 31% (tăng so với nền). Kết luận: rối loạn chức năng thất trái liên quan điều trị ung thư (giảm EF 13 điểm xuống < 55%).”
`,
});
