// Kiểm tra toàn bộ nội dung: lỗi cú pháp, liên kết hỏng, ảnh thiếu, mã protocol/chuỗi xung sai.
// Chạy: node cong-cu-noi-bo/kiem-tra.js   (cần Node.js)
const fs = require("fs"), vm = require("vm"), path = require("path");
const R = path.join(__dirname, "..") + path.sep;
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(R + "assets/app.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync(R + "noi-dung/danh-muc.js", "utf8"), ctx);
let err = 0;
const coTrongDanhMuc = new Set(ctx.DANH_MUC);
for (const f of ctx.DANH_MUC) {
  if (!fs.existsSync(R + "noi-dung/" + f)) { console.log("Thiếu file trong danh mục:", f); err++; continue; }
  try { vm.runInContext(fs.readFileSync(R + "noi-dung/" + f, "utf8"), ctx, { filename: f }); }
  catch (e) { console.log("LỖI CÚ PHÁP", f, "-", e.message); err++; }
}
for (const thuMuc of ["benh", "protocol", "chuoi-xung", "tham-khao"])
  for (const f of fs.readdirSync(R + "noi-dung/" + thuMuc)) if (f.endsWith(".js") && !coTrongDanhMuc.has(thuMuc + "/" + f)) { console.log("File chưa khai báo trong danh-muc.js:", thuMuc + "/" + f); err++; }
const C = ctx.CMR, ids = { benh: C.benhDS, protocol: C.protocolDS, xung: C.xungDS, "tham-khao": C.thamKhaoDS };
const quet = (nguon, txt) => {
  for (const m of String(txt || "").matchAll(/\(#\/(benh|protocol|xung|tham-khao)\/([^)#?\s]+)\)/g)) if (!ids[m[1]][m[2]]) { console.log("Liên kết hỏng:", nguon, "→", m[1] + "/" + m[2]); err++; }
  for (const m of String(txt || "").matchAll(/\]\((hinh\/[^)]+)\)/g)) if (!fs.existsSync(R + m[1])) { console.log("Ảnh thiếu:", nguon, m[1]); err++; }
};
const maXung = (x) => (typeof x === "string" ? x : x.x);
for (const b of Object.values(C.benhDS)) {
  quet("benh/" + b.id, b.noiDung); (b.dauHieu || []).forEach((d) => quet("benh/" + b.id, d)); Object.values(b.tomTat || {}).forEach((v) => quet("benh/" + b.id, v));
  (b.protocol || []).forEach((p) => { if (!C.protocolDS[p]) { console.log("Protocol không có:", b.id, p); err++; } });
  (b.chuoiXung || []).forEach((x) => { if (!C.xungDS[maXung(x)]) { console.log("Chuỗi xung không có:", b.id, maXung(x)); err++; } });
  (b.hinh || []).forEach((h) => { if (!fs.existsSync(R + h.src)) { console.log("Ảnh thiếu:", b.id, h.src); err++; } });
  if (!C.nhomDS.find((n) => n.id === b.nhom)) { console.log("Nhóm không có:", b.id, b.nhom); err++; }
}
for (const p of Object.values(C.protocolDS)) { quet("protocol/" + p.ma, p.noiDung); p.buoc.forEach((x) => { if (!C.xungDS[maXung(x)]) { console.log("Chuỗi xung không có:", p.ma, maXung(x)); err++; } }); }
for (const x of Object.values(C.xungDS)) quet("xung/" + x.id, x.noiDung);
for (const t of Object.values(C.thamKhaoDS)) quet("tham-khao/" + t.id, t.noiDung);
for (const c of C.chiDinhDS) { if (!C.protocolDS[c.protocol]) { console.log("Chỉ định có protocol sai:", c.id); err++; } (c.benh || []).forEach((b) => { if (!C.benhDS[b]) { console.log("Chỉ định trỏ tới bệnh không có:", c.id, b); err++; } }); quet("chi-dinh/" + c.id, c.ghi); }
console.log(`Bệnh: ${Object.keys(C.benhDS).length} · Protocol: ${Object.keys(C.protocolDS).length} · Chuỗi xung: ${Object.keys(C.xungDS).length} · Tham khảo: ${Object.keys(C.thamKhaoDS).length} · Chỉ định: ${C.chiDinhDS.length}`);
console.log(err ? `CÓ ${err} LỖI` : "Không có lỗi.");
process.exit(err ? 1 : 0);
