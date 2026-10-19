/* Danh sách chỉ định cho công cụ "Chọn protocol theo chỉ định".
   Mỗi dòng: id (không dấu, không trùng), nhom (tiêu đề nhóm), ten (câu hỏi lâm sàng),
   protocol (mã P), benh (danh sách id trang bệnh liên quan), ghi (lưu ý, Markdown). */
CMR.chiDinh([
  // ----- Thiếu máu cục bộ -----
  { id: "dau-nguc-on-dinh", nhom: "Thiếu máu cục bộ", ten: "Đau ngực ổn định, nghi bệnh mạch vành", protocol: "P3", benh: ["benh-mach-vanh-man"],
    ghi: "Nhịn caffeine 12–24 giờ. Chống chỉ định thuốc giãn mạch → dùng [P4 · Dobutamine](#/protocol/P4)." },
  { id: "song-con", nhom: "Thiếu máu cục bộ", ten: "Đánh giá sống còn cơ tim trước tái thông", protocol: "P1", benh: ["nmct-cu-song-con"],
    ghi: "LGE là chính; thêm dobutamine liều thấp ([P4](#/protocol/P4)) khi LGE xuyên thành 25–75%." },
  { id: "sau-nmct", nhom: "Thiếu máu cục bộ", ten: "Sau nhồi máu cấp: kích thước, MVO, huyết khối", protocol: "P2", benh: ["nmct-cap", "phinh-gia-phinh-that-trai"],
    ghi: "T2 STIR phải chụp **trước** khi tiêm thuốc. EGE TI > 400 ms để thấy MVO và huyết khối." },
  { id: "minoca", nhom: "Thiếu máu cục bộ", ten: "Troponin tăng, mạch vành không hẹp (MINOCA)", protocol: "P5", benh: ["minoca", "viem-co-tim", "takotsubo", "nmct-cap"],
    ghi: "Chụp sớm (vài ngày) để còn thấy phù. Cine đủ trục dài để nhận kiểu Takotsubo." },
  { id: "mach-vanh-bat-thuong", nhom: "Thiếu máu cục bộ", ten: "Nghi bất thường gốc/đường đi động mạch vành", protocol: "P14", benh: ["bat-thuong-dmv"], ghi: "" },
  // ----- Bệnh cơ tim -----
  { id: "suy-tim-moi", nhom: "Bệnh cơ tim", ten: "Suy tim / giảm EF chưa rõ nguyên nhân", protocol: "P1", benh: ["dcm", "nmct-cu-song-con", "viem-co-tim", "sarcoidosis", "lvnc"],
    ghi: "Thêm T2 và T1 mapping nếu nghi viêm hoặc thâm nhiễm ([P5](#/protocol/P5)). Thêm stress nếu cần loại trừ thiếu máu." },
  { id: "day-thanh", nhom: "Bệnh cơ tim", ten: "Dày thất trái chưa rõ nguyên nhân", protocol: "P6", benh: ["hcm", "amyloidosis", "fabry", "tim-van-dong-vien"],
    ghi: "T1 native và ECV rất quan trọng để phân biệt (amyloid rất cao, Fabry thấp). Dùng PSIR nếu khó chọn TI." },
  { id: "hcm-gia-dinh", nhom: "Bệnh cơ tim", ten: "Tầm soát người thân bệnh nhân HCM / DCM", protocol: "P6", benh: ["hcm", "dcm"],
    ghi: "Tìm khe cơ tim, lá van hai lá dài, LGE, ECV tăng ở người mang gen chưa phì đại." },
  { id: "arvc", nhom: "Bệnh cơ tim", ten: "Nhanh thất dạng block nhánh trái, nghi ARVC", protocol: "P13", benh: ["arvc", "sarcoidosis", "gian-that-phai"], ghi: "" },
  { id: "van-dong-vien", nhom: "Bệnh cơ tim", ten: "Vận động viên có bất thường ECG / siêu âm", protocol: "P1", benh: ["tim-van-dong-vien", "hcm", "arvc", "bat-thuong-dmv"],
    ghi: "Thêm cine LVOT và PC nếu nghi HCM; thêm 3D whole-heart nếu nghi bất thường mạch vành." },
  { id: "ngung-tim", nhom: "Bệnh cơ tim", ten: "Ngừng tim được cứu sống / nhanh thất không rõ nguyên nhân", protocol: "P5", benh: ["nmct-cu-song-con", "viem-co-tim", "sarcoidosis", "arvc", "hcm", "dcm", "bat-thuong-dmv"],
    ghi: "Protocol toàn diện: chức năng hai thất, T2, mapping, LGE; cân nhắc 3D whole-heart (mạch vành) và stress." },
  // ----- Viêm, thâm nhiễm -----
  { id: "viem-co-tim", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Nghi viêm cơ tim", protocol: "P5", benh: ["viem-co-tim"],
    ghi: "Đánh giá theo Lake Louise 2018: ≥ 1 tiêu chuẩn T2 + ≥ 1 tiêu chuẩn T1." },
  { id: "sarcoid", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Sarcoidosis – tầm soát tổn thương tim / blốc nhĩ thất", protocol: "P5", benh: ["sarcoidosis"], ghi: "" },
  { id: "amyloid", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Nghi amyloidosis tim", protocol: "P5", benh: ["amyloidosis"],
    ghi: "Dùng PSIR; đo vách liên nhĩ; T1 native và ECV." },
  { id: "sat", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Thalassemia / truyền máu nhiều – sắt cơ tim", protocol: "P7", benh: ["qua-tai-sat"], ghi: "Không cần thuốc tương phản." },
  { id: "ung-thu", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Theo dõi độc tính tim do điều trị ung thư", protocol: "P1", benh: ["doc-tinh-ung-thu"],
    ghi: "Nghi viêm cơ tim do thuốc miễn dịch → [P5](#/protocol/P5)." },
  { id: "tu-mien", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Bệnh tự miễn / viêm mạch có nghi tổn thương tim", protocol: "P5", benh: ["benh-he-thong", "viem-co-tim"], ghi: "" },
  { id: "ghep-tim", nhom: "Viêm, thâm nhiễm, hệ thống", ten: "Sau ghép tim: thải ghép, bệnh mạch máu mảnh ghép", protocol: "P5", benh: ["benh-tim-ghep"], ghi: "" },
  // ----- Màng ngoài tim -----
  { id: "viem-mnt", nhom: "Màng ngoài tim", ten: "Viêm màng ngoài tim tái phát / kéo dài", protocol: "P8", benh: ["viem-mang-ngoai-tim"], ghi: "" },
  { id: "co-that", nhom: "Màng ngoài tim", ten: "Nghi viêm màng ngoài tim co thắt / phân biệt bệnh cơ tim hạn chế", protocol: "P8", benh: ["viem-mang-ngoai-tim-co-that", "amyloidosis"],
    ghi: "Cine thời gian thực khi thở sâu là bước quan trọng nhất." },
  { id: "tran-dich", nhom: "Màng ngoài tim", ten: "Tràn dịch màng ngoài tim khu trú / không rõ tính chất", protocol: "P8", benh: ["tran-dich-mang-ngoai-tim", "nang-u-mang-ngoai-tim"], ghi: "" },
  // ----- Khối -----
  { id: "khoi", nhom: "Khối trong tim", ten: "Khối trong tim / cạnh tim trên siêu âm", protocol: "P9", benh: ["huyet-khoi-tim", "myxoma", "u-lanh-tinh-khac", "u-ac-tinh-tim", "di-can-tim", "gia-u-tim"], ghi: "" },
  { id: "huyet-khoi", nhom: "Khối trong tim", ten: "Nghi huyết khối thất trái / nhĩ trái", protocol: "P2", benh: ["huyet-khoi-tim"],
    ghi: "EGE TI dài (440–600 ms) nhiều mặt phẳng qua vùng ứ trệ." },
  // ----- Van -----
  { id: "van", nhom: "Van tim và động mạch chủ", ten: "Định lượng hở/hẹp van", protocol: "P10", benh: ["ho-van-hai-la", "hep-van-hai-la", "ho-van-dmc", "hep-van-dmc", "van-ba-la-dmp"], ghi: "" },
  { id: "dmc", nhom: "Van tim và động mạch chủ", ten: "Giãn/phình động mạch chủ, Marfan, van hai mảnh", protocol: "P12", benh: ["phinh-dmc", "hep-eo-dmc"], ghi: "" },
  { id: "boc-tach", nhom: "Van tim và động mạch chủ", ten: "Bóc tách động mạch chủ (ổn định / theo dõi)", protocol: "P12", benh: ["hoi-chung-dmc-cap"], ghi: "Cấp cứu bóc tách cấp: ưu tiên CT." },
  { id: "viem-dmc", nhom: "Van tim và động mạch chủ", ten: "Nghi viêm động mạch chủ (Takayasu)", protocol: "P12", benh: ["viem-dmc"], ghi: "Thêm T2 xóa mỡ và LGE thành mạch." },
  // ----- Bẩm sinh, tim phải -----
  { id: "that-phai-gian", nhom: "Tim bẩm sinh và tim phải", ten: "Giãn thất phải chưa rõ nguyên nhân", protocol: "P11", benh: ["gian-that-phai", "luong-thong", "arvc", "tang-ap-phoi"], ghi: "Luôn đo Qp/Qs và tìm tĩnh mạch phổi bất thường." },
  { id: "shunt", nhom: "Tim bẩm sinh và tim phải", ten: "Thông liên nhĩ/thất, còn ống động mạch – định lượng luồng thông", protocol: "P11", benh: ["luong-thong"], ghi: "" },
  { id: "fallot", nhom: "Tim bẩm sinh và tim phải", ten: "Theo dõi sau sửa Fallot", protocol: "P11", benh: ["fallot"], ghi: "" },
  { id: "tga", nhom: "Tim bẩm sinh và tim phải", ten: "Theo dõi chuyển vị đại động mạch / tim một thất", protocol: "P11", benh: ["tga", "tim-mot-that-fontan", "dorv"], ghi: "" },
  { id: "hep-eo", nhom: "Tim bẩm sinh và tim phải", ten: "Hẹp eo động mạch chủ", protocol: "P12", benh: ["hep-eo-dmc"], ghi: "PC trước, sau hẹp và ở cơ hoành để đánh giá bàng hệ." },
  { id: "ebstein", nhom: "Tim bẩm sinh và tim phải", ten: "Bất thường Ebstein", protocol: "P11", benh: ["ebstein"], ghi: "" },
  { id: "tang-ap-phoi", nhom: "Tim bẩm sinh và tim phải", ten: "Tăng áp phổi – tìm nguyên nhân, đánh giá thất phải", protocol: "P11", benh: ["tang-ap-phoi"], ghi: "" },
  { id: "rung-nhi", nhom: "Tim bẩm sinh và tim phải", ten: "Trước/sau triệt đốt rung nhĩ (tĩnh mạch phổi)", protocol: "P11", benh: ["tinh-mach-phoi-rung-nhi"], ghi: "" },
  // ----- Khác -----
  { id: "crt", nhom: "Khác", ten: "Trước đặt CRT / ICD", protocol: "P1", benh: ["crt"], ghi: "" },
]);
