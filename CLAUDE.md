# CLAUDE.md — Web tra cứu protocol MRI tim theo bệnh

Hướng dẫn cho Claude Code khi làm việc trong thư mục này. Đọc hết file này trước khi sửa.

> **Bắt đầu phiên mới:** đọc thêm `TIEP-TUC.md` — tiến độ, các quyết định đã chốt và danh sách việc người dùng muốn sửa tiếp.

## Người dùng và cách làm việc
- Chủ dự án là bác sĩ, **mới bắt đầu học code**. Họ ra yêu cầu bằng tiếng Việt; Claude tự sửa file, không bắt họ viết code.
- Sau mỗi thay đổi: chạy `node cong-cu-noi-bo/kiem-tra.js` (nếu máy có Node.js) và báo lại ngắn gọn bằng tiếng Việt: đã sửa gì, ở file nào, mở trang nào để xem.
- Không đổi cấu trúc thư mục, tên trường dữ liệu hay `assets/app.js` khi không được yêu cầu. Thêm nội dung = thêm/sửa file trong `noi-dung/` và `hinh/`.
- Trả lời và viết nội dung bằng **tiếng Việt**, giữ thuật ngữ tiếng Anh trong ngoặc khi cần (ví dụ: ngấm thuốc muộn (LGE)).
- Web **chỉ dùng nội bộ**: được dùng ảnh và trích nguyên văn từ sách, nhưng luôn ghi nguồn + trang. Ảnh ca bệnh thật của khoa phải xóa tên, mã bệnh nhân, ngày chụp trước khi đưa vào.

## Chạy web
- Không cần cài đặt, không có bước build: bấm đúp `index.html` là chạy (cả khi không có mạng).
- Phông chữ Be Vietnam Pro tải từ Google Fonts khi có mạng; không có mạng thì dùng phông hệ thống.
- Thư viện duy nhất: `assets/marked.min.js` (đổi Markdown sang HTML), đã kèm sẵn.

## Cấu trúc thư mục
```
index.html                 khung trang + menu thanh bên (sửa ở đây nếu muốn thêm/bớt mục menu)
assets/app.js              chương trình: điều hướng, tìm kiếm, công cụ (hiếm khi sửa)
assets/style.css           giao diện; màu nằm ở đầu file (:root)
noi-dung/danh-muc.js       DANH SÁCH FILE NỘI DUNG — web chỉ tải file có tên ở đây
noi-dung/nhom.js           các nhóm bệnh (id, tên, màu)
noi-dung/tai-lieu.js       tài liệu nguồn (S1, S2, G1, G2…)
noi-dung/chi-dinh.js       chỉ định cho công cụ "Chọn protocol theo chỉ định"
noi-dung/benh/*.js         mỗi bệnh một file
noi-dung/protocol/P*.js    mỗi protocol một file (P1–P14)
noi-dung/chuoi-xung/*.js   mỗi chuỗi xung một file
noi-dung/tham-khao/*.js    trang tham khảo (giá trị bình thường, kiểu LGE…)
hinh/<id-bệnh>/            ảnh minh họa của từng bệnh; hinh/tham-khao, hinh/protocol
cong-cu-noi-bo/kiem-tra.js kiểm tra lỗi cú pháp, liên kết hỏng, ảnh thiếu
cong-cu-noi-bo/lay-hinh.py trích hình từ 2 quyển sách (cần Python + PyMuPDF)
*.pdf                      2 quyển sách nguồn (KHÔNG đưa lên Git — đã có trong .gitignore)
```

## Tài liệu nguồn và cách ghi nguồn
| Mã | Tài liệu | Quy đổi trang |
| --- | --- | --- |
| S1 | CMR Pocket Guide, 2nd ed. (EACVI 2017) — `CMR_guide_2nd_edition_148x105mm_03May2017_last version.pdf` | trang PDF = trang in **+ 1** |
| S2 | The EACVI Textbook of CMR (OUP 2018) — `The EACVI Textbook of Cardiovascular Magnetic Resonance.pdf` | trang PDF = trang in **+ 19** |
| G1 | SCMR standardized protocols 2020 (không có file, kiến thức chung) | — |
| G2 | Lake Louise Criteria 2018 (không có file, kiến thức chung) | — |

- Ghi nguồn trong bài dạng `(S1, tr. 65)` hoặc `(S2, tr. 290–308)`; **tr. là số trang in trong sách**. Web tự biến các cụm này thành chữ nhỏ có liên kết tới trang Tài liệu nguồn.
- Thêm tài liệu mới: thêm dòng vào `noi-dung/tai-lieu.js` với mã mới (B1, B2… cho bài báo; G3… cho hướng dẫn), để file PDF trong thư mục gốc hoặc `tai-lieu/`.
- Khi các nguồn khác nhau (ví dụ sách cũ và hướng dẫn mới): ghi cả hai kèm năm, nói rõ nguồn nào mới hơn.
- Không bịa số liệu. Thông tin không có trong sách thì ghi nguồn G/B tương ứng hoặc nói rõ “kiến thức chung, cần đối chiếu”.

## Trang bệnh — mẫu file
Mỗi bệnh là `noi-dung/benh/<id>.js`. Id viết thường, không dấu, nối bằng gạch ngang (ví dụ `viem-co-tim`). Mẫu:

```js
CMR.benh({
  id: "viem-co-tim",                       // trùng tên file
  ten: "Viêm cơ tim",
  tenEn: "Myocarditis",
  vietTat: ["VCT"],                        // viết tắt để tìm kiếm
  nhom: "viem-tham-nhiem",                 // id nhóm trong noi-dung/nhom.js
  thuTu: 1,                                // thứ tự trong nhóm
  tuKhoa: ["Lake Louise", "virus"],        // từ khóa tìm kiếm thêm
  moTaNgan: "Một câu tóm tắt hiện trên thẻ danh sách.",
  protocol: ["P5"],                        // mã protocol (noi-dung/protocol)
  chuoiXung: [ ... ],                      // TÙY CHỌN: thứ tự chuỗi xung riêng cho bệnh; bỏ trống thì dùng protocol đầu tiên
  thoiGian: "40–50 phút",
  tuongPhan: true,                         // false = không cần thuốc; null = không hiển thị
  stress: "adenosine",                     // TÙY CHỌN
  dauHieu: ["3–5 dấu hiệu then chốt, có thể **in đậm**"],
  dau: ["lge-duoi-thuong-tam-mac", "t2-tang"],   // mã dấu hiệu cho công cụ Tra ngược (xem danh sách bên dưới); đặt dấu hiệu chính lên đầu
  dauKhong: ["rlvd-vung"],                 // TÙY CHỌN: dấu hiệu làm GIẢM khả năng bệnh này
  lgeVung: [4, 5, 11],                     // TÙY CHỌN: vùng AHA 1–17 tô màu trên sơ đồ
  lgeGhi: "Dưới thượng tâm mạc thành dưới bên",
  tomTat: { lamSang: "", hinhThai: "", lge: "", mapping: "", phanBiet: "" },   // dùng cho công cụ So sánh
  nguon: ["S1, tr. 65–66", "S2, tr. 290–308"],
  hinh: [{ src: "hinh/viem-co-tim/s1-66.jpg", chuThich: "…", nguon: "S1, tr. 66" }],
  noiDung: `
## Tổng quan
...
`,
});
```

### Các mục trong `noiDung` (mỗi mục bắt đầu bằng `## `, theo đúng thứ tự)
1. `## Tổng quan` — định nghĩa, dịch tễ, bệnh sinh.
2. `## Đặc điểm lâm sàng`
3. `## Chỉ định MRI tim`
4. `## Protocol chụp` — liên kết tới protocol, các bước, lưu ý riêng.
5. `## Hình ảnh MRI` — theo chuỗi xung (cine, phù, mapping, tưới máu, LGE, dòng chảy).
6. `## Tiêu chuẩn chẩn đoán`
7. `## Chẩn đoán phân biệt` — bảng: bệnh · điểm phân biệt; tên bệnh có liên kết `[HCM](#/benh/hcm)`.
8. `## Tiên lượng`
9. `## Bẫy và lỗi thường gặp`
10. `## Mẫu kết luận` — câu mẫu dương tính (và âm tính nếu hợp).

Mục “Hình ảnh minh họa” và “Tài liệu tham khảo” do web tự tạo từ `hinh` và `nguon`. Mục nào sách không có thì bỏ, không viết cho đủ.

**Trang bệnh chia 2 tab** (tự động, không cần khai báo): các mục bắt đầu bằng *Tổng quan*, *Đặc điểm lâm sàng*, *Chỉ định*, *Protocol* nằm ở tab **1 · Trước chụp**; mọi mục còn lại (Hình ảnh MRI, Tiêu chuẩn, Phân biệt, Tiên lượng, Bẫy, Mẫu kết luận, Hình minh họa) nằm ở tab **2 · Đọc phim**. Vì vậy giữ đúng tên mục như trên. Khi in, cả 2 tab đều được in.

### Quy tắc Markdown trong `noiDung`
- Đặt trong dấu backtick `` ` `` → **không dùng dấu backtick bên trong nội dung**; không viết `${`.
- Liên kết nội bộ: `#/benh/<id>`, `#/protocol/P5`, `#/xung/lge`, `#/tham-khao/kieu-lge`, `#/cong-cu/may-tinh`.
- Ảnh trong bài: `![chú thích](hinh/thu-muc/ten.jpg)`.
- Ghi chú nổi bật: dòng bắt đầu bằng `> `.

### Mã dấu hiệu cho công cụ Tra ngược (trường `dau`)
LGE: `lge-khong`, `lge-duoi-noi-mac`, `lge-xuyen-thanh`, `lge-giua-thanh`, `lge-duoi-thuong-tam-mac`, `lge-lan-toa-duoi-noi-mac`, `lge-diem-noi`, `lge-dom`, `lge-that-phai`, `lge-noi-mac-mom`, `lge-mang-ngoai-tim`, `lge-khong-xoa-nen`.
Mapping: `t2-tang`, `t1-tang`, `t1-giam`, `ecv-tang`, `ecv-giam`, `t2star-giam`, `mo`, `mvo`.
Hình thái: `day-that-trai`, `gian-that-trai`, `giam-ef`, `rlvd-vung`, `phinh-mom`, `gian-that-phai`, `rlvd-that-phai`, `nhi-gian`, `be-co`, `sam`, `tran-dich-mnt`, `mnt-day`, `vach-nay`, `khoi`, `huyet-khoi`, `shunt`, `gian-dmc`.
Muốn thêm mã mới: thêm vào mảng `DAU_HIEU` đầu file `assets/app.js`.

## Giao diện (sau lần sắp xếp lại 21/10/2026)
- Menu thanh bên trái theo luồng làm việc: **1 Trước chụp** (Chọn protocol theo chỉ định, Danh sách protocol) → **2 Đọc phim** (Danh mục bệnh, Tra ngược, So sánh) → **Tham khảo** (Giá trị bình thường, Kiểu LGE, Máy tính, Chuỗi xung…). Trên điện thoại menu thu vào nút ☰.
- Danh mục bệnh và danh sách protocol hiển thị **mỗi mục một dòng** (người dùng yêu cầu), có ô lọc nhanh và chip lọc theo nhóm.
- So sánh bệnh là **bảng: cùng mục cùng hàng**; ở hàng Protocol các xung chung được làm mờ, dòng "Khác:" liệt kê xung riêng.
- Máy tính: chọn phép tính ở cột trái, chỉ hiện phép tính đang chọn.
- Mục lục trong bài là **thanh ngang** dính trên đầu khi cuộn (tự tạo từ các tiêu đề `## `).

## Protocol và chuỗi xung
- Protocol `noi-dung/protocol/P<n>.js`: `ma`, `ten`, `chiDinhNgan`, `thoiGian`, `tuKhoa`, `buoc`, `noiDung`.
- `buoc` là danh sách bước theo thứ tự. Mỗi bước là mã chuỗi xung (`"cine-lv"`) hoặc `{ x: "lge", ghi: "≥ 10 phút", tuyChon: true, gd: true }` — `gd: true` (hoặc một chuỗi chữ) = tiêm thuốc Gd ngay trước bước đó, hiện giọt vàng trên thanh chụp; `tuyChon` = khối sọc.
- Chuỗi xung `noi-dung/chuoi-xung/<id>.js`: `id`, `ten`, `tenEn`, `ngan` (nhãn ngắn trên thanh chụp), `loai`, `moTaNgan`, `tuKhoa`, `noiDung`.
- `loai` (quyết định màu): `dinhvi`, `giaiphau`, `cine`, `t2`, `map`, `t2star`, `perf`, `stress`, `ege`, `lge`, `flow`, `angio`, `tag`.
- Danh sách protocol hiện có: P1 Chức năng + LGE · P2 Nhồi máu cấp · P3 Tưới máu gắng sức · P4 Dobutamine · P5 Mô học (viêm, thâm nhiễm) · P6 HCM · P7 Quá tải sắt · P8 Màng ngoài tim · P9 Khối · P10 Van · P11 Bẩm sinh/tim phải · P12 Động mạch chủ · P13 ARVC · P14 Mạch vành bất thường.
- Lưu ý: bản bàn giao ban đầu có các “module M1–M11”; khi làm web đã bỏ lớp module, protocol ghép trực tiếp từ chuỗi xung cho dễ sửa.

## Thêm một bệnh mới — quy trình
1. Đọc chương tương ứng trong sách (dùng mục lục: S2 có bookmark chương; S1 có mục lục ở trang 2–3).
2. Tạo `noi-dung/benh/<id>.js` theo mẫu trên, đủ các mục có trong sách, mỗi ý quan trọng có `(S1, tr. …)` hoặc `(S2, tr. …)`.
3. Lấy hình: `python cong-cu-noi-bo/lay-hinh.py s1 <trang in> <id>` (ca bệnh trong Pocket Guide) hoặc `python cong-cu-noi-bo/lay-hinh.py ds <trang in>` rồi `… s2 <trang in> <id> <chỉ số>` (Textbook). **Mở ảnh ra xem** trước khi viết chú thích; chú thích bằng tiếng Việt, dịch từ chú thích hình trong sách.
4. Thêm dòng `"benh/<id>.js",` vào nhóm Bệnh trong `noi-dung/danh-muc.js`.
5. Nếu cần, thêm chỉ định vào `noi-dung/chi-dinh.js` và liên kết từ các trang bệnh liên quan (mục Chẩn đoán phân biệt).
6. Chạy `node cong-cu-noi-bo/kiem-tra.js`, sửa hết lỗi.

## Kiểm tra trước khi báo xong
- `node cong-cu-noi-bo/kiem-tra.js` không có lỗi.
- Mở `index.html`, vào trang vừa sửa, kiểm tra Console (F12) không có lỗi đỏ.
- Nhắc người dùng lưu phiên bản bằng Git (commit) sau mỗi thay đổi lớn.

## Git và GitHub
- `.gitignore` đã loại các file PDF (file Textbook 107 MB vượt giới hạn 100 MB của GitHub) và thư mục `tai-lieu/`.
- Commit message tiếng Việt, ngắn: “Thêm trang bệnh Fabry”, “Sửa chẩn đoán phân biệt viêm cơ tim”.
- Web có ảnh chụp từ sách: chỉ nên để repository ở chế độ **Private**. Xem HUONG-DAN.md phần GitHub trước khi bật GitHub Pages.
