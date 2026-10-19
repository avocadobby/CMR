/* Chuỗi xung. Sửa phần noiDung (Markdown). loai: dinhvi, giaiphau, cine, t2, map, t2star, perf, stress, ege, lge, flow, angio, tag. */
CMR.xung({
  id: "t1-ecv",
  ten: "T1 sau tiêm và ECV",
  tenEn: "Post-contrast T1 mapping / extracellular volume",
  ngan: "T1 sau tiêm / ECV",
  loai: "map",
  moTaNgan: "T1 sau tiêm ≥ 15 phút + hematocrit → ECV (%).",
  tuKhoa: ["ECV", "extracellular volume", "post-contrast T1", "hematocrit", "thể tích ngoại bào"],
  noiDung: `
## Mục đích
Thể tích ngoại bào (ECV) phản ánh khoảng kẽ: tăng trong xơ hóa lan tỏa, sẹo, phù, amyloid (thường > 40%); giảm nhẹ trong Fabry và tim vận động viên (S1, tr. 19, 44, 100).

## Cách chụp
1. Tiêm Gd 0,1–0,2 mmol/kg.
2. Chờ **ít nhất 15 phút** sau tiêm rồi chụp T1 cùng vị trí với T1 native.
3. Lấy máu làm công thức máu để có hematocrit (S1, tr. 17).

## Công thức
ECV = (1 − Hct) × (ΔR1 cơ tim / ΔR1 máu), với R1 = 1/T1. Xem [máy tính ECV](#/cong-cu/may-tinh).

## Mẹo
Không đổi FOV và kích thước voxel giữa trước và sau tiêm (S1, tr. 17).
`,
});
