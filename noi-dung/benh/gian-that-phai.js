/* Trang bệnh. Sửa nội dung trong noiDung (Markdown, mỗi mục bắt đầu bằng ##). Xem CLAUDE.md để biết ý nghĩa các trường. */
CMR.benh({
  id: "gian-that-phai",
  ten: "Giãn thất phải – tiếp cận chẩn đoán",
  tenEn: "Dilated right ventricle: differential diagnosis",
  vietTat: ["RV"],
  nhom: "tim-phai",
  thuTu: 2,
  tuKhoa: ["giãn thất phải", "thất phải", "quá tải thể tích", "quá tải áp lực", "D-shape", "nhồi máu thất phải", "chẩn đoán phân biệt"],
  moTaNgan: "Quá tải thể tích (vách dẹt tâm trương) hay áp lực (vách dẹt tâm thu), bệnh cơ tim, nhồi máu thất phải.",
  protocol: ["P11", "P13"],
  thoiGian: "45–60 phút",
  dauHieu: ["**Quá tải thể tích:** vách dẹt/nảy **thì tâm trương**, thành thất phải mỏng bình thường (hở ba lá, hở phổi, thông liên nhĩ, PAPVC)", "**Quá tải áp lực:** vách dẹt **thì tâm thu**, thất phải dày > 5 mm (tăng áp phổi, hẹp phổi)", "Rối loạn vận động vùng + LGE: ARVC, nhồi máu thất phải, sarcoidosis", "Luôn đo Qp/Qs và tìm tĩnh mạch phổi bất thường"],
  dau: ["gian-that-phai", "vach-nay", "rlvd-that-phai", "shunt", "lge-that-phai", "lge-diem-noi"],
  tomTat: {"lamSang": "Phát hiện trên siêu âm hoặc triệu chứng suy tim phải", "hinhThai": "Thất phải giãn", "lge": "Tùy nguyên nhân", "mapping": "—", "phanBiet": "Bảng tiếp cận theo kiểu quá tải"},
  nguon: ["S1, tr. 102–105", "S2, tr. 509–523"],
  hinh: [{"src": "hinh/gian-that-phai/s2-431.jpg", "chuThich": "Thuyên tắc phổi trên MRA động mạch phổi (MIP).", "nguon": "S2, tr. 431"}],
  noiDung: `
## Tổng quan
MRI là chuẩn tham chiếu cho thể tích, khối cơ, dòng chảy và chức năng thất phải; đặc tính mô đa thông số giúp phân biệt nguyên nhân giãn thất phải (S1, tr. 102). Thất phải có hình học phức tạp, nhiều bè cơ, thành mỏng (3–5 mm); co bóp chủ yếu theo trục dọc; nhạy hơn thất trái với quá tải thể tích và áp lực (S1, tr. 102).

## Protocol chụp
[P11](#/protocol/P11) (S1, tr. 102): giải phẫu; chức năng thất trái (cả nhĩ); thất phải chồng lát ngang, RVOT, đường vào/ra, 2 buồng; cine thân, nhánh ĐMP; PC thân ĐMP và ĐMC; 3D whole-heart hoặc MRA (tĩnh mạch phổi, loại trừ hẹp tĩnh mạch phổi sau triệt đốt); LGE.

## Tiếp cận theo cơ chế (S1, tr. 102–105)
| Cơ chế | Dấu hiệu | Nguyên nhân |
| --- | --- | --- |
| Quá tải thể tích | Thể tích tâm trương tăng; thành thất phải bình thường; vách dẹt/nảy **tâm trương**; có thể xơ hóa điểm nối | [Hở ba lá](#/benh/van-ba-la-dmp) nặng (thường thứ phát; kiểm tra [Ebstein](#/benh/ebstein)); [hở phổi](#/benh/fallot) nặng (sau Fallot); [luồng thông](#/benh/luong-thong) trái – phải (thông liên nhĩ, PAPVC; Qp/Qs > 1,8 là cờ đỏ) |
| Quá tải áp lực | Phì đại thành tự do > 5 mm và vách; vách dẹt **tâm thu**; xơ hóa điểm nối | [Tăng áp phổi](#/benh/tang-ap-phoi); hẹp van ĐMP (van, dưới van, trên van; “mũ Phổ”, giãn ĐMP trái) |
| Bệnh cơ tim | Rối loạn vận động vùng, LGE, mỡ | [ARVC](#/benh/arvc), [sarcoidosis](#/benh/sarcoidosis), [DCM](#/benh/dcm) hai thất |
| Nhồi máu thất phải | Rối loạn vận động vùng, phù T2 khi cấp, LGE thất phải ± vùng RCA thất trái | Tới 50% nhồi máu thành dưới (tắc RCA đoạn gần); kiểm tra huyết khối thất phải |
| Sinh lý | Giãn cân đối hai thất | [Tim vận động viên](#/benh/tim-van-dong-vien) |

Lưu ý: có thể chồng lấn đặc điểm thể tích và áp lực (S1, tr. 102).

## Mẫu kết luận
“Thất phải giãn (EDVi 150 ml/m²), thành mỏng, vách nảy thì tâm trương, không rối loạn vận động vùng, không LGE. Qp/Qs = 1,9 do tĩnh mạch phổi trên phải đổ vào tĩnh mạch chủ trên kèm thông liên nhĩ xoang tĩnh mạch. Kết luận: giãn thất phải do quá tải thể tích từ luồng thông trái – phải.”
`,
});
