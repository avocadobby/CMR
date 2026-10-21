/* =====================================================================
   Web tra cứu MRI tim — phần chương trình (không cần sửa khi thêm nội dung)
   Nội dung nằm trong thư mục noi-dung/, khai báo trong noi-dung/danh-muc.js
   ===================================================================== */
(function () {
  "use strict";

  const CMR = (window.CMR = {
    nhomDS: [], taiLieuDS: [], xungDS: {}, protocolDS: {}, benhDS: {}, thamKhaoDS: {}, chiDinhDS: [],
    loiTai: [],
  });

  /* ---------- Hàm khai báo dùng trong các file nội dung ---------- */
  CMR.nhom = (ds) => { CMR.nhomDS = ds; };
  CMR.taiLieu = (ds) => { CMR.taiLieuDS = ds; };
  CMR.xung = (o) => { CMR.xungDS[o.id] = o; };
  CMR.protocol = (o) => { CMR.protocolDS[o.ma] = o; };
  CMR.benh = (o) => { CMR.benhDS[o.id] = o; };
  CMR.thamKhao = (o) => { CMR.thamKhaoDS[o.id] = o; };
  CMR.chiDinh = (ds) => { CMR.chiDinhDS = CMR.chiDinhDS.concat(ds); };

  /* ---------- Từ điển cố định ---------- */
  const LOAI_XUNG = {
    dinhvi: "Định vị", giaiphau: "Giải phẫu (black blood)", cine: "Cine (chức năng)", t2: "T2 / phù",
    map: "Mapping T1 / ECV", t2star: "T2*", perf: "Tưới máu", stress: "Stress", ege: "Ngấm sớm (EGE)",
    lge: "Ngấm muộn (LGE)", flow: "Dòng chảy (PC)", angio: "Mạch máu (MRA)", tag: "Tagging",
  };

  // Dấu hiệu dùng cho công cụ "Tra ngược từ dấu hiệu"
  const DAU_HIEU = [
    { nhom: "Ngấm thuốc muộn (LGE)", ds: [
      ["lge-khong", "Không có LGE"],
      ["lge-duoi-noi-mac", "Dưới nội mạc, theo vùng mạch vành"],
      ["lge-xuyen-thanh", "Xuyên thành, theo vùng mạch vành"],
      ["lge-giua-thanh", "Giữa thành (mid-wall)"],
      ["lge-duoi-thuong-tam-mac", "Dưới thượng tâm mạc"],
      ["lge-lan-toa-duoi-noi-mac", "Dưới nội mạc lan tỏa, không theo mạch vành"],
      ["lge-diem-noi", "Điểm nối thất phải – vách"],
      ["lge-dom", "Dạng đốm / mảng rải rác"],
      ["lge-that-phai", "Ở thành thất phải"],
      ["lge-noi-mac-mom", "Nội mạc vùng mỏm (dấu V)"],
      ["lge-mang-ngoai-tim", "Màng ngoài tim ngấm thuốc"],
      ["lge-khong-xoa-nen", "Khó xóa nền cơ tim (khó null)"],
    ]},
    { nhom: "Mapping / mô học", ds: [
      ["t2-tang", "T2 / STIR tăng (phù)"],
      ["t1-tang", "T1 native tăng"],
      ["t1-giam", "T1 native giảm"],
      ["ecv-tang", "ECV tăng"],
      ["ecv-giam", "ECV giảm"],
      ["t2star-giam", "T2* giảm"],
      ["mo", "Tín hiệu mỡ (T1 cao, xóa khi xóa mỡ)"],
      ["mvo", "Tắc nghẽn vi mạch (MVO)"],
    ]},
    { nhom: "Hình thái và chức năng", ds: [
      ["day-that-trai", "Dày thành thất trái"],
      ["gian-that-trai", "Giãn thất trái"],
      ["giam-ef", "Giảm EF thất trái"],
      ["rlvd-vung", "Rối loạn vận động vùng"],
      ["phinh-mom", "Phình / bóng mỏm thất trái"],
      ["gian-that-phai", "Giãn thất phải"],
      ["rlvd-that-phai", "Rối loạn vận động thất phải"],
      ["nhi-gian", "Giãn hai nhĩ"],
      ["be-co", "Bè cơ tăng (trabeculation)"],
      ["sam", "SAM / tắc nghẽn đường ra thất trái"],
      ["tran-dich-mnt", "Tràn dịch màng ngoài tim"],
      ["mnt-day", "Màng ngoài tim dày"],
      ["vach-nay", "Vách liên thất nảy / di động nghịch"],
      ["khoi", "Khối trong tim / cạnh tim"],
      ["huyet-khoi", "Huyết khối"],
      ["shunt", "Luồng thông (Qp/Qs ≠ 1)"],
      ["gian-dmc", "Giãn động mạch chủ"],
    ]},
  ];
  const TEN_DAU = {};
  DAU_HIEU.forEach((g) => g.ds.forEach(([k, v]) => (TEN_DAU[k] = v)));

  /* ---------- Tiện ích ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const boDau = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  const slug = (s) => boDau(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const nhomCua = (id) => CMR.nhomDS.find((n) => n.id === id) || { ten: id, mau: "#678" };
  const luu = {
    doc(k, macDinh) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : macDinh; } catch (e) { return macDinh; } },
    ghi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } },
  };

  function md(text) {
    if (!text) return "";
    let html = window.marked ? window.marked.parse(String(text).replace(/^\n+/, "")) : "<pre>" + esc(text) + "</pre>";
    // trích dẫn nguồn (S1, tr. 65) -> chữ nhỏ có liên kết
    html = html.replace(/\(((?:S|G|B)\d+[^()<]{0,60})\)/g, '<a class="src" href="#/tai-lieu" title="Xem tài liệu tham khảo">($1)</a>');
    return html;
  }
  function gắnIdTieuDe(root) {
    const dung = {};
    root.querySelectorAll("h2, h3").forEach((h) => {
      let id = slug(h.textContent) || "muc";
      while (dung[id]) id += "-1";
      dung[id] = 1; h.id = id;
    });
  }

  /* ---------- Chuẩn hóa bước chụp ---------- */
  const buoc = (b) => (typeof b === "string" ? { x: b } : b);
  function cacBuoc(benh) {
    if (benh.chuoiXung && benh.chuoiXung.length) return benh.chuoiXung.map(buoc);
    const p = CMR.protocolDS[(benh.protocol || [])[0]];
    return p ? p.buoc.map(buoc) : [];
  }

  /* ---------- Thanh chụp ---------- */
  function thanhChup(ds, chuThich = true, mo = null) {
    if (!ds || !ds.length) return "";
    const loaiDung = new Set();
    const khoi = ds.map(buoc).map((b) => {
      const x = CMR.xungDS[b.x] || { ten: b.x, ngan: b.x, loai: "giaiphau" };
      loaiDung.add(x.loai);
      return `<a class="blk c-${x.loai}${b.tuyChon ? " opt" : ""}${mo && mo.has(b.x) ? " dim" : ""}" href="#/xung/${esc(b.x)}" title="${esc(x.ten + (b.ghi ? " — " + b.ghi : "") + (b.tuyChon ? " (tùy chọn)" : ""))}">` +
        (b.gd ? `<span class="gd">${esc(b.gd === true ? "Tiêm Gd" : b.gd)}</span>` : "") +
        `${esc(x.ngan || x.ten)}${b.ghi ? `<small>${esc(b.ghi)}</small>` : ""}</a>`;
    }).join("");
    const legend = chuThich ? `<div class="scan-legend">${[...loaiDung].map((l) => `<span><i class="c-${l}"></i>${esc(LOAI_XUNG[l] || l)}</span>`).join("")}<span><i style="background:repeating-linear-gradient(135deg,#999,#999 3px,#ccc 3px,#ccc 6px)"></i>Tùy chọn</span></div>` : "";
    return `<div class="scan"><div class="scan-row">${khoi}</div>${legend}</div>`;
  }

  /* ---------- Sơ đồ 17 vùng AHA ---------- */
  const TEN_VUNG = ["", "Đáy trước", "Đáy trước vách", "Đáy dưới vách", "Đáy dưới", "Đáy dưới bên", "Đáy trước bên",
    "Giữa trước", "Giữa trước vách", "Giữa dưới vách", "Giữa dưới", "Giữa dưới bên", "Giữa trước bên",
    "Mỏm trước", "Mỏm vách", "Mỏm dưới", "Mỏm bên", "Đỉnh mỏm"];
  function bullseye(vung = [], ghi = "") {
    const cx = 100, cy = 100, on = new Set(vung);
    const pt = (r, a) => [cx + r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)];
    const cung = (r1, r2, a1, a2) => {
      const [x1, y1] = pt(r2, a1), [x2, y2] = pt(r2, a2), [x3, y3] = pt(r1, a2), [x4, y4] = pt(r1, a1);
      return `M${x1} ${y1}A${r2} ${r2} 0 0 0 ${x2} ${y2}L${x3} ${y3}A${r1} ${r1} 0 0 1 ${x4} ${y4}Z`;
    };
    let s = "";
    const vong = (r1, r2, n, bd, so0) => {
      for (let i = 0; i < n; i++) {
        const tam = bd + (360 / n) * i, a1 = tam - 180 / n, a2 = tam + 180 / n, so = so0 + i;
        const [tx, ty] = pt((r1 + r2) / 2, tam);
        s += `<path class="${on.has(so) ? "on" : ""}" d="${cung(r1, r2, a1, a2)}"><title>${so}. ${TEN_VUNG[so]}</title></path><text x="${tx}" y="${ty}" class="${on.has(so) ? "on" : ""}">${so}</text>`;
      }
    };
    vong(68, 94, 6, 90, 1); vong(44, 68, 6, 90, 7); vong(20, 44, 4, 90, 13);
    s += `<circle cx="100" cy="100" r="20" class="${on.has(17) ? "on" : ""}" style="fill:${on.has(17) ? "var(--x-lge)" : "var(--panel-2)"};stroke:var(--panel);stroke-width:1.5"><title>17. Đỉnh mỏm</title></circle><text x="100" y="100" class="${on.has(17) ? "on" : ""}">17</text>`;
    return `<div class="bull"><svg viewBox="0 0 200 200" role="img" aria-label="Sơ đồ 17 vùng AHA">${s}</svg><div class="lab">${ghi ? esc(ghi) + "<br>" : ""}<span class="small">Đáy (ngoài) → giữa → mỏm (trong); vùng 1 ở trên = thành trước, vách ở bên trái.</span></div></div>`;
  }

  /* ---------- Tìm kiếm ---------- */
  let chiMuc = [];
  function taoChiMuc() {
    chiMuc = [];
    Object.values(CMR.benhDS).forEach((b) => chiMuc.push({
      loai: "Bệnh", url: "#/benh/" + b.id, ten: b.ten, phu: [b.tenEn, nhomCua(b.nhom).ten].filter(Boolean).join(" · "),
      chinh: boDau([b.ten, b.tenEn, (b.vietTat || []).join(" "), (b.tuKhoa || []).join(" ")].join(" ")),
      phuChu: boDau([(b.dauHieu || []).join(" "), (b.dau || []).map((d) => TEN_DAU[d]).join(" "), b.noiDung].join(" ")),
    }));
    Object.values(CMR.protocolDS).forEach((p) => chiMuc.push({
      loai: "Protocol", url: "#/protocol/" + p.ma, ten: p.ma + " — " + p.ten, phu: p.chiDinhNgan || "",
      chinh: boDau([p.ma, p.ten, (p.tuKhoa || []).join(" ")].join(" ")), phuChu: boDau([p.chiDinhNgan, p.noiDung].join(" ")),
    }));
    Object.values(CMR.xungDS).forEach((x) => chiMuc.push({
      loai: "Chuỗi xung", url: "#/xung/" + x.id, ten: x.ten, phu: x.tenEn || "",
      chinh: boDau([x.ten, x.tenEn, x.ngan, (x.tuKhoa || []).join(" ")].join(" ")), phuChu: boDau(x.noiDung || ""),
    }));
    Object.values(CMR.thamKhaoDS).forEach((t) => chiMuc.push({
      loai: "Tham khảo", url: "#/tham-khao/" + t.id, ten: t.ten, phu: t.moTa || "",
      chinh: boDau([t.ten, (t.tuKhoa || []).join(" ")].join(" ")), phuChu: boDau(t.noiDung || ""),
    }));
  }
  function tim(q) {
    const tu = boDau(q).split(/\s+/).filter(Boolean);
    if (!tu.length) return [];
    return chiMuc.map((m) => {
      let d = 0;
      for (const t of tu) {
        const a = m.chinh.includes(t), b = m.phuChu.includes(t);
        if (!a && !b) return null;
        d += a ? (new RegExp("(^|\\s)" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(m.chinh) ? 10 : 6) : 1;
      }
      if (m.loai === "Bệnh") d += 2;
      const cau = tu.join(" "), tenKD = boDau(m.ten);
      if (tenKD.startsWith(cau)) d += 25; else if (tenKD.includes(cau)) d += 15; else if (m.chinh.includes(cau)) d += 8;
      return { m, d };
    }).filter(Boolean).sort((a, b) => b.d - a.d).slice(0, 14).map((x) => x.m);
  }
  function ganTimKiem() {
    const o = $("#q"), r = $("#qres");
    let chon = -1, kq = [];
    const ve = () => {
      if (!o.value.trim()) { r.hidden = true; return; }
      kq = tim(o.value);
      r.innerHTML = kq.length ? kq.map((m, i) => `<a href="${m.url}" class="${i === chon ? "on" : ""}"><span class="k">${esc(m.loai)}</span><div class="t">${esc(m.ten)}</div><div class="s">${esc(m.phu)}</div></a>`).join("")
        : `<div class="empty">Không tìm thấy “${esc(o.value)}”. Thử từ khác, tên tiếng Anh hoặc viết tắt (ví dụ: HCM, LGE).</div>`;
      r.hidden = false;
    };
    o.addEventListener("input", () => { chon = -1; ve(); });
    o.addEventListener("focus", ve);
    o.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { chon = Math.min(chon + 1, kq.length - 1); ve(); e.preventDefault(); }
      else if (e.key === "ArrowUp") { chon = Math.max(chon - 1, 0); ve(); e.preventDefault(); }
      else if (e.key === "Enter") { const m = kq[chon < 0 ? 0 : chon]; if (m) { location.hash = m.url; o.blur(); r.hidden = true; } }
      else if (e.key === "Escape") { r.hidden = true; o.blur(); }
    });
    document.addEventListener("click", (e) => { if (!e.target.closest(".search")) r.hidden = true; });
    r.addEventListener("click", () => { r.hidden = true; o.value = ""; });
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); o.focus(); }
    });
  }

  /* ---------- Các trang ---------- */
  const main = () => $("#main");
  const tieuDe = (t) => { document.title = t ? t + " · MRI tim" : "Tra cứu MRI tim"; };
  const crumbs = (ds) => `<div class="crumbs">${ds.map(([t, u]) => (u ? `<a href="${u}">${esc(t)}</a>` : esc(t))).join(" › ")}</div>`;
  const dsBenhNhom = (id) => Object.values(CMR.benhDS).filter((b) => b.nhom === id).sort((a, b) => (a.thuTu ?? 99) - (b.thuTu ?? 99) || a.ten.localeCompare(b.ten, "vi"));

  // bỏ định dạng markdown + trích nguồn để hiện gọn trên một dòng
  const tron = (s) => String(s || "").replace(/\*\*|__/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s*\((?:S|G|B)\d[^)]*\)/g, "").trim();
  const thanhNho = (bs) => `<span class="mini">${bs.map((x) => { const xx = CMR.xungDS[x.x] || {}; return `<i class="c-${xx.loai || "giaiphau"}${x.tuyChon ? " opt" : ""}" title="${esc(xx.ten || x.x)}"></i>`; }).join("")}</span>`;

  // Bảng bệnh: mỗi bệnh một dòng — tên · protocol · dấu hiệu chính · thanh xung
  function bangBenh() {
    return `<div class="dz-filter noprint">
        <input id="loc" type="search" placeholder="Lọc nhanh theo tên bệnh…" autocomplete="off" aria-label="Lọc danh mục bệnh">
        <div class="chips" id="locnhom"><button class="chip on" data-n="">Tất cả</button>${CMR.nhomDS.filter((n) => dsBenhNhom(n.id).length).map((n) => `<button class="chip" data-n="${n.id}" style="--gc:${n.mau}"><i></i>${esc(n.ten)}</button>`).join("")}</div>
      </div>
      <div class="dzt" id="dzt">
        <div class="dzt-h"><span>Bệnh</span><span>Protocol</span><span>Dấu hiệu MRI chính</span><span>Chuỗi xung</span></div>
        ${CMR.nhomDS.map((n) => {
          const ds = dsBenhNhom(n.id);
          if (!ds.length) return "";
          return `<section class="dzt-g" id="${n.id}" data-n="${n.id}" style="--gc:${n.mau}"><h2>${esc(n.ten)} <small>${ds.length}</small></h2>${ds.map((b) => `
            <a class="dzt-r" href="#/benh/${b.id}" data-k="${esc(boDau([b.ten, b.tenEn, (b.vietTat || []).join(" "), (b.tuKhoa || []).join(" ")].join(" ")))}">
              <span class="c-ten"><b>${esc(b.ten)}</b>${b.tenEn ? `<small>${esc(b.tenEn)}</small>` : ""}</span>
              <span class="c-pr">${(b.protocol || []).map((m) => `<em>${esc(m)}</em>`).join("")}</span>
              <span class="c-dh">${esc(tron((b.dauHieu || [])[0] || b.moTaNgan))}</span>
              <span class="c-x">${thanhNho(cacBuoc(b))}</span>
            </a>`).join("")}</section>`;
        }).join("")}
        <p class="muted small" id="dzt-rong" hidden>Không có bệnh nào khớp. Thử từ khác hoặc viết tắt (HCM, ARVC…).</p>
      </div>`;
  }
  function ganLocBenh() {
    const o = $("#loc"); if (!o) return;
    let nhom = "";
    const loc = () => {
      const q = boDau(o.value.trim());
      let con = 0;
      document.querySelectorAll(".dzt-g").forEach((g) => {
        let n = 0;
        g.querySelectorAll(".dzt-r").forEach((r) => { const ok = (!nhom || g.dataset.n === nhom) && (!q || r.dataset.k.includes(q)); r.hidden = !ok; if (ok) n++; });
        g.hidden = !n; con += n;
      });
      $("#dzt-rong").hidden = !!con;
    };
    o.addEventListener("input", loc);
    $("#locnhom").addEventListener("click", (e) => {
      const c = e.target.closest("button[data-n]"); if (!c) return;
      nhom = c.dataset.n;
      document.querySelectorAll("#locnhom .chip").forEach((x) => x.classList.toggle("on", x === c));
      loc();
    });
  }

  function trangChu() {
    tieuDe("");
    const ganDay = luu.doc("cmr-gan-day", []).map((id) => CMR.benhDS[id]).filter(Boolean);
    const soBenh = Object.keys(CMR.benhDS).length, soP = Object.keys(CMR.protocolDS).length;
    main().innerHTML = `
      <section class="home-head">
        <h1>Tra cứu MRI tim</h1>
        <p class="muted">${soBenh} bệnh · ${soP} protocol · đi theo đúng thứ tự công việc: chọn protocol trước khi chụp, rồi tra dấu hiệu khi đọc phim.</p>
      </section>
      <section class="flow">
        <div class="step">
          <div class="step-h"><span class="no">1</span><h2>Trước chụp</h2></div>
          <p>Có câu hỏi lâm sàng hoặc bệnh nghi ngờ → chụp những xung nào, theo thứ tự nào.</p>
          <a class="go" href="#/cong-cu/chon-protocol"><b>Chọn protocol theo chỉ định</b><span>Lâm sàng, siêu âm, men tim → protocol + lưu ý an toàn</span></a>
          <a class="go" href="#/protocol"><b>Danh sách ${soP} protocol</b><span>Thứ tự xung, thời điểm tiêm thuốc, thời gian</span></a>
        </div>
        <div class="step">
          <div class="step-h"><span class="no">2</span><h2>Đọc phim</h2></div>
          <p>Thấy dấu hiệu trên phim → nghĩ đến bệnh nào, phân biệt bằng gì.</p>
          <a class="go" href="#/cong-cu/tra-nguoc"><b>Tra ngược từ dấu hiệu</b><span>Kiểu LGE, mapping, hình thái → bệnh phù hợp</span></a>
          <a class="go" href="#/cong-cu/so-sanh"><b>So sánh bệnh</b><span>Đặt 2–3 bệnh cạnh nhau, cùng mục cùng hàng</span></a>
        </div>
        <div class="step ref">
          <div class="step-h"><span class="no">+</span><h2>Tham khảo nhanh</h2></div>
          <p>Số liệu cần khi viết kết quả.</p>
          <a class="go" href="#/tham-khao/gia-tri-binh-thuong"><b>Giá trị bình thường</b><span>Thể tích, EF, khối cơ, T1/T2/ECV</span></a>
          <a class="go" href="#/cong-cu/may-tinh"><b>Máy tính</b><span>ECV, BSA, Qp/Qs, phân suất hở, T2*</span></a>
        </div>
      </section>
      ${ganDay.length ? `<div class="recent"><b>Xem gần đây</b>${ganDay.map((b) => `<a class="chip" href="#/benh/${b.id}">${esc(b.ten)}</a>`).join("")}</div>` : ""}
      <div class="sec-title"><h2>Danh mục bệnh</h2><span class="muted small">Mỗi bệnh một dòng; bấm để xem chi tiết</span></div>
      ${bangBenh()}`;
    ganLocBenh();
  }

  function trangDsBenh() {
    tieuDe("Bệnh");
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Danh mục bệnh"]]) + `<h1>Danh mục bệnh</h1>
      <p class="muted">Mỗi bệnh một dòng: protocol dùng, dấu hiệu MRI chính và các chuỗi xung theo thứ tự chụp (màu theo loại xung).</p>` + bangBenh();
    ganLocBenh();
    const h = location.hash.split("#")[2];
    if (h) { const el = document.getElementById(h); if (el) el.scrollIntoView(); }
  }

  function trangBenh(id) {
    const b = CMR.benhDS[id];
    if (!b) return khongThay("bệnh", id);
    tieuDe(b.ten);
    const gd = luu.doc("cmr-gan-day", []).filter((x) => x !== id); gd.unshift(id); luu.ghi("cmr-gan-day", gd.slice(0, 8));
    const n = nhomCua(b.nhom);
    const ps = (b.protocol || []).map((m) => CMR.protocolDS[m]).filter(Boolean);
    const hinh = (b.hinh || []).map((h) => `<figure><img loading="lazy" src="${esc(h.src)}" alt="${esc(h.chuThich)}" data-cap="${esc(h.chuThich + (h.nguon ? " (" + h.nguon + ")" : ""))}"><figcaption>${esc(h.chuThich)}${h.nguon ? ` <span class="src">(${esc(h.nguon)})</span>` : ""}</figcaption></figure>`).join("");

    // Chia nội dung theo mục ## : 4 mục đầu là "Trước chụp", còn lại là "Đọc phim"
    const tam = document.createElement("div");
    tam.innerHTML = md(b.noiDung);
    const TRUOC = ["tong quan", "dac diem lam sang", "chi dinh", "protocol"];
    const muc = { truoc: "", doc: "" };
    let dang = "truoc", dau = "";
    [...tam.childNodes].forEach((nd) => {
      if (nd.nodeName === "H2") dang = TRUOC.some((t) => boDau(nd.textContent).startsWith(t)) ? "truoc" : "doc";
      const html = nd.outerHTML || (nd.textContent.trim() ? esc(nd.textContent) : "");
      if (nd.nodeName !== "H2" && !muc.truoc && !muc.doc && dang === "truoc") dau += html; else muc[dang] += html;
    });
    if (hinh) muc.doc += `<h2>Hình ảnh minh họa</h2><div class="figs">${hinh}</div>`;
    const tab = new URLSearchParams(location.hash.split("?")[1] || "").get("tab") || luu.doc("cmr-tab", "truoc");
    const bat = tab === "doc" ? "doc" : "truoc";

    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Danh mục bệnh", "#/benh"], [n.ten, "#/benh#" + n.id], [b.ten]]) + `
      <div class="dz-head">
        <div><h1>${esc(b.ten)}</h1><p class="en">${esc(b.tenEn || "")}${b.vietTat && b.vietTat.length ? " · " + esc(b.vietTat.join(", ")) : ""}</p></div>
        <div class="dz-tools noprint">
          <a class="btn alt small" href="#/cong-cu/so-sanh?ds=${id}">So sánh</a>
          <button class="btn alt small" onclick="window.print()">In / PDF</button>
        </div>
      </div>
      <div class="factbar">
        <span class="fb-g" style="--gc:${n.mau}"><i></i>${esc(n.ten)}</span>
        ${ps.length ? `<span><b>Protocol</b> ${ps.map((p) => `<a href="#/protocol/${p.ma}" title="${esc(p.ten)}">${esc(p.ma)} · ${esc(p.ten)}</a>`).join(", ")}</span>` : ""}
        ${b.thoiGian ? `<span><b>Thời gian</b> ${esc(b.thoiGian)}</span>` : ""}
        ${b.tuongPhan === null ? "" : `<span class="pill ${b.tuongPhan === false ? "" : "yes"}">${b.tuongPhan === false ? "Không cần thuốc Gd" : "Cần thuốc Gd"}</span>`}
        ${b.stress ? `<span class="pill yes">Stress: ${esc(b.stress)}</span>` : ""}
      </div>
      ${dau ? `<div class="md lead">${dau}</div>` : ""}
      <div class="tabs noprint" role="tablist">
        <button role="tab" data-tab="truoc" aria-selected="${bat === "truoc"}"><span class="no">1</span>Trước chụp<small>lâm sàng · chỉ định · protocol</small></button>
        <button role="tab" data-tab="doc" aria-selected="${bat === "doc"}"><span class="no">2</span>Đọc phim<small>dấu hiệu · chẩn đoán · phân biệt · kết luận</small></button>
      </div>
      <section class="tp${bat === "truoc" ? " on" : ""}" data-tp="truoc">
        <div class="panel scanpanel">
          <h3>Thứ tự chụp</h3>
          ${thanhChup(cacBuoc(b))}
        </div>
        <nav class="toc" aria-label="Mục lục"></nav>
        <article class="md">${muc.truoc}</article>
      </section>
      <section class="tp${bat === "doc" ? " on" : ""}" data-tp="doc">
        <div class="keygrid${b.lgeVung ? "" : " one"}">
          <div class="panel"><h3>Dấu hiệu MRI then chốt</h3>
            <ul class="keysigns">${(b.dauHieu || []).map((d) => `<li>${md(d).replace(/^<p>|<\/p>\s*$/g, "")}</li>`).join("")}</ul></div>
          ${b.lgeVung ? `<div class="panel"><h3>Vị trí LGE điển hình <span class="muted small">(17 vùng AHA)</span></h3>${bullseye(b.lgeVung, b.lgeGhi)}</div>` : ""}
        </div>
        <nav class="toc" aria-label="Mục lục"></nav>
        <article class="md">${muc.doc}</article>
      </section>
      ${b.nguon && b.nguon.length ? `<div class="md refs"><h2>Tài liệu tham khảo</h2><ul>${b.nguon.map((x) => `<li>${md(x).replace(/^<p>|<\/p>\s*$/g, "")}</li>`).join("")}</ul></div>` : ""}`;

    document.querySelectorAll(".tp").forEach((tp) => hoanThienBaiViet(tp));
    $(".tabs").addEventListener("click", (e) => {
      const nut = e.target.closest("button[data-tab]"); if (!nut) return;
      const t = nut.dataset.tab;
      luu.ghi("cmr-tab", t);
      document.querySelectorAll(".tabs button").forEach((x) => x.setAttribute("aria-selected", x === nut));
      document.querySelectorAll(".tp").forEach((x) => x.classList.toggle("on", x.dataset.tp === t));
    });
  }

  // Gắn id cho tiêu đề, dựng thanh mục lục ngang (nav.toc) phía trên bài viết
  function hoanThienBaiViet(vung) {
    const goc = vung || main();
    const nd = goc.querySelector("article.md");
    if (!nd) return;
    gắnIdTieuDe(nd);
    const toc = goc.querySelector("nav.toc");
    const ds = [...nd.querySelectorAll("h2")];
    if (toc) {
      if (ds.length < 2) toc.remove();
      else {
        toc.innerHTML = ds.map((h) => `<a href="#" data-to="${h.id}">${esc(h.textContent.replace(/\s*\((?:S|G|B)\d[^)]*\)/g, "").trim())}</a>`).join("");
        toc.addEventListener("click", (e) => {
          const a = e.target.closest("a[data-to]"); if (!a) return;
          e.preventDefault(); document.getElementById(a.dataset.to).scrollIntoView({ behavior: "smooth" });
        });
      }
    }
    // ảnh trong nội dung -> phóng to
    goc.querySelectorAll("img").forEach((img) => { if (!img.dataset.z) { img.dataset.z = 1; img.addEventListener("click", () => phongTo(img)); } });
    // liên kết ngoài mở tab mới
    nd.querySelectorAll('a[href^="http"]').forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
  }
  function phongTo(img) {
    const d = document.createElement("div");
    d.className = "lightbox";
    d.innerHTML = `<img src="${esc(img.src)}" alt=""><p>${esc(img.dataset.cap || img.alt || "")}</p>`;
    d.addEventListener("click", () => d.remove());
    document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { d.remove(); document.removeEventListener("keydown", k); } });
    document.body.appendChild(d);
  }

  function trangDsProtocol() {
    tieuDe("Protocol");
    const ds = Object.values(CMR.protocolDS).sort((a, b) => parseInt(a.ma.slice(1)) - parseInt(b.ma.slice(1)));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Protocol"]]) + `<h1>Danh sách protocol</h1>
      <p class="muted">Mỗi protocol một dòng, các khối là chuỗi xung theo thứ tự chụp. Khối sọc = tùy chọn; giọt vàng = thời điểm tiêm thuốc Gd. Bấm tên protocol để xem chi tiết từng bước.</p>
      <div class="prt">${ds.map((p) => `<div class="prt-r">
        <a class="prt-ma" href="#/protocol/${p.ma}">${esc(p.ma)}</a>
        <div class="prt-t"><a href="#/protocol/${p.ma}"><b>${esc(p.ten)}</b></a><span>${esc(p.chiDinhNgan || "")}</span>${p.thoiGian ? `<span class="tg">${esc(p.thoiGian)}</span>` : ""}</div>
        <div class="prt-x">${thanhChup(p.buoc, false)}</div></div>`).join("")}</div>
      <div class="scan-legend standalone">${Object.keys(LOAI_XUNG).filter((l) => Object.values(CMR.xungDS).some((x) => x.loai === l)).map((l) => `<span><i class="c-${l}"></i>${esc(LOAI_XUNG[l])}</span>`).join("")}</div>`;
  }
  function trangProtocol(ma) {
    const p = CMR.protocolDS[ma];
    if (!p) return khongThay("protocol", ma);
    tieuDe(p.ma + " " + p.ten);
    const benh = Object.values(CMR.benhDS).filter((b) => (b.protocol || []).includes(ma));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Protocol", "#/protocol"], [p.ma]]) + `
      <div class="dz-head"><div><h1>${esc(p.ma)} · ${esc(p.ten)}</h1><p class="en">${esc(p.chiDinhNgan || "")}</p></div>
      <div class="dz-tools noprint"><button class="btn alt small" onclick="window.print()">In checklist</button></div></div>
      <div class="factbar">${p.thoiGian ? `<span><b>Thời gian</b> ${esc(p.thoiGian)}</span>` : ""}
        ${benh.length ? `<span><b>Dùng cho</b> ${benh.map((b) => `<a href="#/benh/${b.id}">${esc(b.ten)}</a>`).join(", ")}</span>` : ""}</div>
      <div class="panel scanpanel"><h3>Thứ tự chụp</h3>${thanhChup(p.buoc)}</div>
      <div class="dz-body"><nav class="toc" aria-label="Mục lục"></nav>
      <article class="md" id="nd">
        <h2>Các bước chụp</h2>
        <table class="steps-t"><thead><tr><th>#</th><th>Chuỗi xung</th><th>Để đánh giá</th><th>Ghi chú</th></tr></thead><tbody>
        ${p.buoc.map(buoc).map((b, i) => { const x = CMR.xungDS[b.x] || { ten: b.x }; return `<tr><td><span class="sw c-${x.loai || "giaiphau"}"></span>${i + 1}</td><td><a href="#/xung/${b.x}">${esc(x.ten)}</a>${b.tuyChon ? " <span class='pill'>tùy chọn</span>" : ""}${b.gd ? " <span class='pill yes'>" + esc(b.gd === true ? "tiêm Gd trước bước này" : b.gd) + "</span>" : ""}</td><td class="small">${esc(x.moTaNgan || "")}</td><td class="small">${esc(b.ghi || "")}</td></tr>`; }).join("")}
        </tbody></table>
        ${md(p.noiDung)}
      </article></div>`;
    hoanThienBaiViet();
  }

  function trangDsXung() {
    tieuDe("Chuỗi xung");
    const nhom = {};
    Object.values(CMR.xungDS).forEach((x) => (nhom[x.loai] = nhom[x.loai] || []).push(x));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Chuỗi xung"]]) + `<h1>Thư viện chuỗi xung</h1>
      <p class="muted">Nguyên lý, cách đặt, mẹo kỹ thuật và ảnh giả (artifact) của từng chuỗi xung.</p>` +
      Object.keys(LOAI_XUNG).filter((l) => nhom[l]).map((l) => `<section class="list-group" style="--gc:var(--x-${l})"><h2>${esc(LOAI_XUNG[l])}</h2><div class="cards">${nhom[l].map((x) => `<a class="card" href="#/xung/${x.id}"><div class="t">${esc(x.ten)}</div><div class="s">${esc(x.tenEn || "")}</div>${x.moTaNgan ? `<div class="d">${esc(x.moTaNgan)}</div>` : ""}</a>`).join("")}</div></section>`).join("");
  }
  function trangXung(id) {
    const x = CMR.xungDS[id];
    if (!x) return khongThay("chuỗi xung", id);
    tieuDe(x.ten);
    const dung = Object.values(CMR.protocolDS).filter((p) => p.buoc.map(buoc).some((b) => b.x === id));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Chuỗi xung", "#/xung"], [x.ten]]) + `
      <h1>${esc(x.ten)}</h1><p class="en muted">${esc(x.tenEn || "")} <span class="chip x c-${x.loai}">${esc(LOAI_XUNG[x.loai])}</span></p>
      ${dung.length ? `<p class="small"><b>Có trong protocol:</b> ${dung.map((p) => `<a href="#/protocol/${p.ma}">${p.ma}</a>`).join(", ")}</p>` : ""}
      <div class="dz-body"><nav class="toc" aria-label="Mục lục"></nav><article class="md" id="nd">${md(x.noiDung)}</article></div>`;
    hoanThienBaiViet();
  }

  /* ---------- Tham khảo ---------- */
  function trangDsThamKhao() {
    tieuDe("Tham khảo");
    const ds = Object.values(CMR.thamKhaoDS).sort((a, b) => (a.thuTu ?? 99) - (b.thuTu ?? 99));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Tham khảo"]]) + `<h1>Tham khảo</h1>
      <div class="cards">${ds.map((t) => `<a class="card" href="#/tham-khao/${t.id}"><div class="t">${esc(t.ten)}</div>${t.moTa ? `<div class="d">${esc(t.moTa)}</div>` : ""}</a>`).join("")}
      <a class="card" href="#/tai-lieu"><div class="t">Tài liệu nguồn</div><div class="d">Sách và hướng dẫn dùng để viết nội dung, kèm mã trích dẫn.</div></a></div>`;
  }
  function trangThamKhao(id) {
    const t = CMR.thamKhaoDS[id];
    if (!t) return khongThay("trang tham khảo", id);
    tieuDe(t.ten);
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Tham khảo", "#/tham-khao"], [t.ten]]) + `<h1>${esc(t.ten)}</h1>
      ${t.moTa ? `<p class="muted">${esc(t.moTa)}</p>` : ""}
      <div class="dz-body"><nav class="toc" aria-label="Mục lục"></nav><article class="md" id="nd">${md(t.noiDung)}</article></div>`;
    hoanThienBaiViet();
  }
  function trangTaiLieu() {
    tieuDe("Tài liệu nguồn");
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Tham khảo", "#/tham-khao"], ["Tài liệu nguồn"]]) + `<h1>Tài liệu nguồn</h1>
      <p class="muted">Trong bài, nguồn ghi dạng (S1, tr. 65) = tài liệu S1, trang in số 65 trong sách.</p>
      <table class="plain"><thead><tr><th>Mã</th><th>Tài liệu</th><th>Loại</th><th>Ghi chú</th></tr></thead><tbody>
      ${CMR.taiLieuDS.map((t) => `<tr><td><b>${esc(t.ma)}</b></td><td>${esc(t.ten)}</td><td>${esc(t.loai)}</td><td class="small muted">${esc(t.ghiChu || "")}</td></tr>`).join("")}
      </tbody></table>`;
  }

  /* ---------- Công cụ ---------- */
  function trangCongCu() {
    tieuDe("Công cụ");
    const ds = [
      ["chon-protocol", "Chọn protocol theo chỉ định", "Chọn câu hỏi lâm sàng và tình trạng bệnh nhân → protocol, bước thêm/bớt, lưu ý an toàn."],
      ["tra-nguoc", "Tra ngược từ dấu hiệu", "Chọn kiểu LGE, mapping, hình thái → danh sách bệnh phù hợp."],
      ["so-sanh", "So sánh bệnh", "Đặt 2–3 bệnh cạnh nhau để phân biệt."],
      ["may-tinh", "Máy tính", "ECV, BSA, Qp/Qs, phân suất hở van, thể tích nhĩ trái, T2* → mức quá tải sắt."],
    ];
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Công cụ"]]) + `<h1>Công cụ</h1><div class="tools">${ds.map(([u, t, d]) => `<a class="card" href="#/cong-cu/${u}"><div class="t">${t}</div><div class="d">${d}</div></a>`).join("")}
      ${CMR.thamKhaoDS["gia-tri-binh-thuong"] ? `<a class="card" href="#/tham-khao/gia-tri-binh-thuong"><div class="t">Giá trị bình thường</div><div class="d">Thể tích, EF, khối cơ, nhĩ, gốc động mạch chủ, T1/T2/ECV.</div></a>` : ""}</div>`;
  }

  // Tình trạng bệnh nhân -> lời khuyên điều chỉnh
  const TINH_TRANG = [
    ["egfr30", "eGFR < 30 ml/phút/1,73m²", "Chống chỉ định thuốc Gd nhóm mạch thẳng (linear). Cân nhắc kỹ lợi ích; nếu cần, dùng thuốc vòng (macrocyclic) liều thấp nhất. Ưu tiên chuỗi không thuốc: cine, T2/STIR, T1 native, PC flow, MRA không thuốc (3D whole-heart). Suy thận nặng: cân nhắc lọc máu trong vòng 2 giờ sau tiêm (S1, tr. 112)."],
    ["egfr60", "eGFR 30–60", "Chọn thuốc Gd an toàn nhất (vòng, macrocyclic), dùng thận trọng (S1, tr. 112)."],
    ["thietbi", "Có thiết bị cấy (máy tạo nhịp, ICD, van, stent…)", "Kiểm tra nhãn MR safe / MR conditional và điều kiện chụp của thiết bị (www.mrisafety.com). Phần lớn máy tạo nhịp/ICD đời cũ là MR unsafe; stent mạch vành, van cơ học thường MR conditional. Giảm artifact: tránh bSSFP gần thiết bị (dùng cine GRE spoiled), dùng LGE băng thông rộng (wideband) nếu có (S1, tr. 14, 113; S2, tr. 70–76)."],
    ["nintho", "Nín thở kém", "Giảm số lát cắt mỗi lần nín thở, giảm số bước mã hóa pha (half-scan, tăng kích thước voxel), dùng parallel imaging, navigator hô hấp, hoặc cine/LGE thời gian thực (real-time), single-shot; chấp nhận chụp ở thì hít vào (S1, tr. 12)."],
    ["loannhip", "Rối loạn nhịp (rung nhĩ, ngoại tâm thu)", "Kiểm soát tần số trước chụp nếu được; dùng arrhythmia rejection, prospective triggering, hoặc chụp real-time; LGE thu mỗi 2–3 nhịp; LGE single-shot khi nhịp rất không đều (S1, tr. 12, 24)."],
    ["chongstress", "Chống chỉ định thuốc giãn mạch (hen phế quản nặng, block nhĩ thất độ II–III, dị ứng)", "Không dùng adenosine/regadenoson/dipyridamole; cân nhắc dobutamine stress (P4) hoặc phương pháp khác (S1, tr. 28)."],
    ["caffeine", "Đã dùng caffeine trong 12–24 giờ", "Caffeine làm giảm tác dụng của adenosine → nguy cơ âm tính giả; nên hẹn lại hoặc dùng liều adenosine cao hơn, kiểm tra dấu hiệu “splenic switch-off” (S1, tr. 28)."],
    ["thai", "Có thai", "Tránh thuốc Gd trừ khi thật cần thiết; ưu tiên 1,5T và protocol không thuốc."],
    ["tre", "Trẻ nhỏ / không hợp tác", "Rút gọn protocol, dùng chuỗi xung thở tự do (navigator, real-time, nhiều lần lấy trung bình), cân nhắc gây mê; chỉnh độ phân giải theo kích thước tim (S2, tr. 496–501)."],
    ["sohai", "Sợ không gian kín", "Giải thích trước, cho nghe nhạc, chụp nằm sấp/đưa chân vào trước nếu được, cân nhắc an thần nhẹ; rút gọn protocol."],
  ];

  function trangChonProtocol() {
    tieuDe("Chọn protocol");
    const nhomCD = {};
    CMR.chiDinhDS.forEach((c) => (nhomCD[c.nhom] = nhomCD[c.nhom] || []).push(c));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Trước chụp"], ["Chọn protocol"]]) + `<h1>Chọn protocol theo chỉ định</h1>
      <p class="muted">Dựa trên lâm sàng, siêu âm tim, men tim… chọn câu hỏi cần trả lời; kết quả hiện ở cột bên phải.</p>
      <div class="split">
        <ol class="steps">
          <li><h3>Câu hỏi lâm sàng hoặc bệnh nghi ngờ</h3>
            ${Object.entries(nhomCD).map(([g, ds]) => `<details class="cdg" open><summary>${esc(g)} <span class="muted small">${ds.length}</span></summary><div class="opts">${ds.map((c) => `<label class="opt"><input type="radio" name="cd" value="${c.id}"><span>${esc(c.ten)}</span></label>`).join("")}</div></details>`).join("")}
          </li>
          <li><h3>Tình trạng bệnh nhân <span class="muted small">(chọn nếu có)</span></h3>
            <div class="opts">${TINH_TRANG.map(([k, t]) => `<label class="opt"><input type="checkbox" name="tt" value="${k}"><span>${esc(t)}</span></label>`).join("")}</div>
          </li>
        </ol>
        <div class="split-r"><div class="sticky"><h3 class="kq-h"><span class="no">3</span>Kết quả</h3><div id="kq" class="muted">Chọn chỉ định ở bước 1.</div></div></div>
      </div>`;
    const cap = () => {
      document.querySelectorAll("label.opt").forEach((l) => l.classList.toggle("sel", l.querySelector("input").checked));
      const cd = CMR.chiDinhDS.find((c) => c.id === ($('input[name="cd"]:checked') || {}).value);
      const tt = [...document.querySelectorAll('input[name="tt"]:checked')].map((i) => i.value);
      if (!cd) { $("#kq").innerHTML = "Chọn chỉ định ở bước 1."; return; }
      const p = CMR.protocolDS[cd.protocol];
      const benh = (cd.benh || []).map((i) => CMR.benhDS[i]).filter(Boolean);
      let html = `<div class="panel"><h3 style="margin-top:0">${p ? `<a href="#/protocol/${p.ma}">${p.ma} · ${esc(p.ten)}</a>` : esc(cd.protocol)}</h3>
        ${p ? thanhChup(cd.buoc || p.buoc) : ""}
        ${cd.ghi ? `<div class="md" style="margin-top:12px">${md(cd.ghi)}</div>` : ""}
        ${benh.length ? `<p class="small" style="margin-top:10px"><b>Xem trang bệnh:</b> ${benh.map((b) => `<a href="#/benh/${b.id}">${esc(b.ten)}</a>`).join(", ")}</p>` : ""}</div>`;
      if (tt.length) {
        html += `<h3 style="margin:18px 0 8px">Điều chỉnh và lưu ý an toàn</h3>` + tt.map((k) => { const t = TINH_TRANG.find((x) => x[0] === k); return `<div class="warn"><b>${esc(t[1])}:</b> ${md(t[2]).replace(/^<p>|<\/p>\s*$/g, "")}</div>`; }).join("");
        if (tt.includes("chongstress") && p && /stress|tưới máu/i.test(p.ten)) html += `<div class="warn"><b>Lưu ý:</b> protocol này dùng thuốc giãn mạch; xem phương án <a href="#/protocol/P4">P4 · Dobutamine</a>.</div>`;
      }
      html += `<p class="small" style="margin-top:12px"><button class="btn alt small noprint" onclick="window.print()">In checklist</button></p>`;
      $("#kq").innerHTML = html; $("#kq").classList.remove("muted");
    };
    main().addEventListener("change", cap);
  }

  function trangTraNguoc() {
    tieuDe("Tra ngược từ dấu hiệu");
    const chon = new Set((new URLSearchParams(location.hash.split("?")[1] || "").get("d") || "").split(",").filter(Boolean));
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Đọc phim"], ["Tra ngược"]]) + `<h1>Tra ngược từ dấu hiệu hình ảnh</h1>
      <p class="muted">Chọn các dấu hiệu thấy trên phim. Danh sách bệnh xếp theo số dấu hiệu trùng khớp. Đây là gợi ý để đọc tiếp, không thay thế đánh giá lâm sàng.</p>
      <div class="split">
        <div>${DAU_HIEU.map((g) => `<h3>${esc(g.nhom)}</h3><div class="opts">${g.ds.map(([k, t]) => `<label class="opt"><input type="checkbox" value="${k}" ${chon.has(k) ? "checked" : ""}><span>${esc(t)}</span></label>`).join("")}</div>`).join("")}
        <p style="margin-top:14px"><button class="btn alt small" id="xoa">Bỏ chọn tất cả</button></p></div>
        <div class="split-r"><div class="sticky"><h3 class="kq-h">Bệnh phù hợp</h3><div id="kq" class="muted">Chưa chọn dấu hiệu.</div></div></div>
      </div>`;
    const cap = () => {
      document.querySelectorAll("label.opt").forEach((l) => l.classList.toggle("sel", l.querySelector("input").checked));
      const ds = [...document.querySelectorAll("label.opt input:checked")].map((i) => i.value);
      history.replaceState(null, "", "#/cong-cu/tra-nguoc" + (ds.length ? "?d=" + ds.join(",") : ""));
      if (!ds.length) { $("#kq").innerHTML = "Chưa chọn dấu hiệu."; $("#kq").classList.add("muted"); return; }
      const kq = Object.values(CMR.benhDS).map((b) => {
        const co = ds.filter((d) => (b.dau || []).includes(d));
        const nguoc = ds.filter((d) => (b.dauKhong || []).includes(d));
        const uuTien = co.filter((d) => (b.dau || []).indexOf(d) < 3).length * 0.3;
        return { b, co, diem: co.length + uuTien - nguoc.length * 1.5 };
      }).filter((x) => x.co.length && x.diem > 0).sort((a, b) => b.diem - a.diem || a.b.ten.localeCompare(b.b.ten, "vi")).slice(0, 15);
      $("#kq").classList.remove("muted");
      $("#kq").innerHTML = kq.length ? kq.map((x) => `<a class="card" style="margin-bottom:8px" href="#/benh/${x.b.id}"><div class="match"><span class="t">${esc(x.b.ten)}</span><span class="small muted">${x.co.length}/${ds.length}</span></div>
        <div class="d">${x.co.map((d) => esc(TEN_DAU[d])).join(" · ")}</div><div class="bar"><i style="width:${Math.round((x.co.length / ds.length) * 100)}%"></i></div></a>`).join("")
        : "Không có bệnh nào khớp. Thử bỏ bớt dấu hiệu.";
    };
    main().addEventListener("change", cap);
    $("#xoa").addEventListener("click", () => { document.querySelectorAll("label.opt input").forEach((i) => (i.checked = false)); cap(); });
    cap();
  }

  function trangSoSanh() {
    tieuDe("So sánh bệnh");
    const ids = (new URLSearchParams(location.hash.split("?")[1] || "").get("ds") || "").split(",").slice(0, 3).map((i) => (CMR.benhDS[i] ? i : ""));
    while (ids.length < 2) ids.push("");
    const tatCa = Object.values(CMR.benhDS).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
    const chonO = (v, i) => `<select class="sel" data-i="${i}" aria-label="Chọn bệnh ${i + 1}"><option value="">— chọn bệnh —</option>${CMR.nhomDS.map((n) => `<optgroup label="${esc(n.ten)}">${tatCa.filter((b) => b.nhom === n.id).map((b) => `<option value="${b.id}" ${b.id === v ? "selected" : ""}>${esc(b.ten)}</option>`).join("")}</optgroup>`).join("")}</select>`;
    const bs = ids.map((i) => CMR.benhDS[i] || null);
    const co = bs.filter(Boolean);
    // chuỗi xung chung cho mọi bệnh đã chọn -> làm mờ, chỉ nổi phần khác nhau
    const tapXung = co.map((b) => new Set(cacBuoc(b).map((x) => x.x)));
    const chung = tapXung.length > 1 ? new Set([...tapXung[0]].filter((x) => tapXung.every((t) => t.has(x)))) : null;
    const gon = (v) => md(v).replace(/^<p>|<\/p>\s*$/g, "");
    const hang = [
      ["Protocol", (b) => { const khac = cacBuoc(b).filter((x) => !chung || !chung.has(x.x)).map((x) => (CMR.xungDS[x.x] || { ten: x.x }).ten);
        return `<div class="small">${(b.protocol || []).map((m) => `<a href="#/protocol/${m}">${esc(m)}</a>`).join(", ")}${b.thoiGian ? " · " + esc(b.thoiGian) : ""}</div>${thanhChup(cacBuoc(b), false, chung)}
          ${chung ? `<div class="small diff">${khac.length ? `<b>Khác:</b> ${[...new Set(khac)].map(esc).join(", ")}` : "Không có xung riêng."}</div>` : ""}`; }],
      ["Lâm sàng", (b) => (b.tomTat || {}).lamSang && gon(b.tomTat.lamSang)],
      ["Hình thái / chức năng", (b) => (b.tomTat || {}).hinhThai && gon(b.tomTat.hinhThai)],
      ["Ngấm thuốc muộn (LGE)", (b) => (b.tomTat || {}).lge && gon(b.tomTat.lge)],
      ["Mapping / mô học", (b) => (b.tomTat || {}).mapping && gon(b.tomTat.mapping)],
      ["Điểm phân biệt", (b) => (b.tomTat || {}).phanBiet && gon(b.tomTat.phanBiet)],
      ["Dấu hiệu then chốt", (b) => (b.dauHieu || []).length && `<ul class="keysigns">${b.dauHieu.map((d) => `<li>${gon(d)}</li>`).join("")}</ul>`],
      ["Vị trí LGE", (b) => b.lgeVung && bullseye(b.lgeVung)],
    ];
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["So sánh bệnh"]]) + `<h1>So sánh bệnh</h1>
      <p class="muted">Cùng một mục của các bệnh nằm trên cùng hàng. Ở hàng Protocol, các xung chung được làm mờ để thấy ngay xung khác nhau. Gợi ý: HCM – amyloidosis – Fabry; viêm cơ tim – NMCT – Takotsubo.</p>
      <div class="cmpwrap"><table class="cmpt" style="--n:${ids.length}">
        <thead><tr><th class="lab"></th>${ids.map((v, i) => `<th>${chonO(v, i)}${bs[i] ? `<a class="small" href="#/benh/${bs[i].id}">Mở trang bệnh</a>` : ""}</th>`).join("")}
          ${ids.length < 3 ? `<th class="add"><button class="btn alt small" id="them">+ Thêm bệnh</button></th>` : ""}</tr></thead>
        <tbody>${co.length ? hang.map(([ten, f]) => {
          const o = bs.map((b) => (b ? f(b) || "" : ""));
          if (!o.some(Boolean)) return "";
          return `<tr><th class="lab" scope="row">${ten}</th>${o.map((x) => `<td>${x || '<span class="muted">—</span>'}</td>`).join("")}${ids.length < 3 ? "<td></td>" : ""}</tr>`;
        }).join("") : `<tr><td colspan="${ids.length + 2}" class="muted">Chọn ít nhất một bệnh ở hàng trên.</td></tr>`}</tbody>
      </table></div>`;
    const doi = () => {
      const v = [...document.querySelectorAll("select.sel")].map((s) => s.value);
      location.hash = "#/cong-cu/so-sanh?ds=" + v.join(",");
    };
    document.querySelectorAll("select.sel").forEach((s) => s.addEventListener("change", doi));
    const them = $("#them"); if (them) them.addEventListener("click", () => { location.hash = "#/cong-cu/so-sanh?ds=" + ids.join(",") + ",-"; });
  }

  function trangMayTinh() {
    tieuDe("Máy tính");
    const o = (id, nhan, goiY = "") => `<label class="field">${nhan}<input id="${id}" type="number" step="any" inputmode="decimal" placeholder="${goiY}"></label>`;
    main().innerHTML = crumbs([["Trang chủ", "#/"], ["Máy tính"]]) + `<h1>Máy tính</h1>
      <p class="muted">Chọn phép tính ở cột trái; chỉ phép tính đang chọn được hiển thị.</p>
      <div class="calc"><nav class="calcnav" aria-label="Chọn phép tính"></nav><div class="calcp">
        <div class="panel"><h3 style="margin-top:0">Thể tích ngoại bào (ECV)</h3>
          <p class="small muted">ECV = (1 − Hct) × (1/T1 cơ tim sau − 1/T1 cơ tim trước) / (1/T1 máu sau − 1/T1 máu trước). T1 tính bằng ms; T1 sau tiêm đo ≥ 15 phút (S1, tr. 17).</p>
          <div class="form-row">${o("hct", "Hematocrit (%)", "40")}${o("m1", "T1 cơ tim trước", "1000")}${o("m2", "T1 cơ tim sau", "450")}${o("b1", "T1 máu trước", "1600")}${o("b2", "T1 máu sau", "300")}</div>
          <div class="result" id="r-ecv">Nhập đủ 5 giá trị.</div></div>
        <div class="panel"><h3 style="margin-top:0">Diện tích da (BSA) và chỉ số hóa</h3>
          <p class="small muted">Công thức Mosteller: BSA = √(cao × nặng / 3600).</p>
          <div class="form-row">${o("cao", "Chiều cao (cm)", "165")}${o("nang", "Cân nặng (kg)", "60")}${o("gt", "Giá trị cần chỉ số hóa (ml, g…)", "150")}</div>
          <div class="result" id="r-bsa">Nhập chiều cao và cân nặng.</div></div>
        <div class="panel"><h3 style="margin-top:0">Tỉ lệ luồng thông Qp/Qs</h3>
          <p class="small muted">Qp = lưu lượng động mạch phổi, Qs = lưu lượng động mạch chủ (đo bằng PC, ml/nhịp). Qp/Qs &gt; 1,5 thường có ý nghĩa; &gt; 1,8 là “cờ đỏ” trong thông liên nhĩ (S1, tr. 104).</p>
          <div class="form-row">${o("qp", "Lưu lượng ĐMP (ml)", "110")}${o("qs", "Lưu lượng ĐMC (ml)", "70")}</div>
          <div class="result" id="r-qp">Nhập 2 giá trị.</div></div>
        <div class="panel"><h3 style="margin-top:0">Hở van hai lá (phương pháp gián tiếp)</h3>
          <p class="small muted">Thể tích hở = SV thất trái (cine) − lưu lượng thuận ĐMC (PC). Phân suất hở = thể tích hở / SV thất trái. RegV &gt; 55 ml và RegF &gt; 40% dự báo tiến triển triệu chứng (S1, tr. 75).</p>
          <div class="form-row">${o("lvsv", "SV thất trái (ml)", "120")}${o("aof", "Lưu lượng thuận ĐMC (ml)", "70")}</div>
          <div class="result" id="r-mr">Nhập 2 giá trị.</div></div>
        <div class="panel"><h3 style="margin-top:0">Hở van động mạch chủ (đo trực tiếp)</h3>
          <p class="small muted">Phân suất hở = thể tích dòng ngược / dòng thuận × 100. RegF &gt; 33% dự báo tiến triển và chỉ định phẫu thuật (S1, tr. 78).</p>
          <div class="form-row">${o("fw", "Dòng thuận (ml)", "80")}${o("bw", "Dòng ngược (ml)", "30")}</div>
          <div class="result" id="r-ar">Nhập 2 giá trị.</div></div>
        <div class="panel"><h3 style="margin-top:0">Thể tích nhĩ (phương pháp diện tích – chiều dài, hai mặt phẳng)</h3>
          <p class="small muted">V = 0,85 × A(4CH) × A(2CH) / L. Nhĩ trái bình thường 26–52 ml/m² (nam), 27–53 ml/m² (nữ) (S1, tr. 110).</p>
          <div class="form-row">${o("a4", "Diện tích 4CH (cm²)", "20")}${o("a2", "Diện tích 2CH (cm²)", "20")}${o("ll", "Chiều dài ngắn nhất (cm)", "5")}</div>
          <div class="result" id="r-la">Nhập 3 giá trị.</div></div>
        <div class="panel"><h3 style="margin-top:0">T2* → mức quá tải sắt</h3>
          <p class="small muted">Theo bảng phân loại (S1, tr. 50). R2* = 1000 / T2*.</p>
          <div class="form-row">${o("t2c", "T2* cơ tim (ms)", "16")}${o("t2g", "T2* gan (ms)", "3")}</div>
          <div class="result" id="r-fe">Nhập ít nhất 1 giá trị.</div></div>
      </div></div>`;
    // mỗi phép tính một nút; chỉ hiện phép tính đang chọn
    const panels = [...document.querySelectorAll(".calcp > .panel")];
    const nav = $(".calcnav");
    nav.innerHTML = panels.map((pn, i) => `<button data-i="${i}">${esc(pn.querySelector("h3").textContent)}</button>`).join("");
    const chonPT = (i) => {
      panels.forEach((pn, j) => (pn.hidden = j !== i));
      nav.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-current", j === i));
      luu.ghi("cmr-may-tinh", i);
    };
    nav.addEventListener("click", (e) => { const b = e.target.closest("button[data-i]"); if (b) { chonPT(+b.dataset.i); const o = panels[+b.dataset.i].querySelector("input"); if (o) o.focus(); } });
    chonPT(Math.min(luu.doc("cmr-may-tinh", 0), panels.length - 1));
    const v = (id) => { const x = parseFloat(($("#" + id) || {}).value); return isFinite(x) ? x : null; };
    const f = (x, d = 1) => x.toLocaleString("vi-VN", { maximumFractionDigits: d, minimumFractionDigits: d });
    const tinh = () => {
      const [hct, m1, m2, b1, b2] = ["hct", "m1", "m2", "b1", "b2"].map(v);
      if ([hct, m1, m2, b1, b2].every((x) => x)) {
        const ecv = (1 - hct / 100) * ((1 / m2 - 1 / m1) / (1 / b2 - 1 / b1)) * 100;
        $("#r-ecv").innerHTML = `ECV = <b class="big">${f(ecv)}%</b> · ${ecv < 22 ? "thấp" : ecv <= 30 ? "trong giới hạn thường gặp ở người bình thường (khoảng 25 ± 4%, phụ thuộc máy)" : ecv <= 40 ? "tăng (xơ hóa / phù / thâm nhiễm)" : "tăng rõ (> 40%: gợi ý amyloidosis nếu bệnh cảnh phù hợp)"}`;
      }
      const [cao, nang, gt] = ["cao", "nang", "gt"].map(v);
      if (cao && nang) { const bsa = Math.sqrt((cao * nang) / 3600); $("#r-bsa").innerHTML = `BSA = <b class="big">${f(bsa, 2)} m²</b>${gt ? ` · giá trị chỉ số hóa = <b>${f(gt / bsa)}</b> /m²` : ""}`; }
      const [qp, qs] = ["qp", "qs"].map(v);
      if (qp && qs) { const r = qp / qs; $("#r-qp").innerHTML = `Qp/Qs = <b class="big">${f(r, 2)}</b> · ${r >= 1.5 ? "luồng thông trái → phải có ý nghĩa" : r < 0.9 ? "Qp < Qs: cân nhắc luồng thông phải → trái hoặc sai số đo" : "không có luồng thông đáng kể"}`; }
      const [lvsv, aof] = ["lvsv", "aof"].map(v);
      if (lvsv && aof) { const rv = lvsv - aof, rf = (rv / lvsv) * 100; $("#r-mr").innerHTML = `Thể tích hở = <b class="big">${f(rv, 0)} ml</b> · phân suất hở = <b class="big">${f(rf, 0)}%</b>${rv > 55 || rf > 40 ? " · vượt ngưỡng dự báo tiến triển" : ""}<br><span class="small muted">Không dùng khi có thông liên thất hoặc hở nhiều van.</span>`; }
      const [fw, bw] = ["fw", "bw"].map(v);
      if (fw && bw !== null) { const rf = (bw / fw) * 100; $("#r-ar").innerHTML = `Phân suất hở = <b class="big">${f(rf, 0)}%</b>${rf > 33 ? " · vượt ngưỡng 33%" : ""}`; }
      const [a4, a2, ll] = ["a4", "a2", "ll"].map(v);
      if (a4 && a2 && ll) { const vol = (0.85 * a4 * a2) / ll; $("#r-la").innerHTML = `Thể tích = <b class="big">${f(vol, 0)} ml</b>${cao && nang ? ` · ${f(vol / Math.sqrt((cao * nang) / 3600), 0)} ml/m²` : " (nhập chiều cao, cân nặng ở ô BSA để chỉ số hóa)"}`; }
      const [t2c, t2g] = ["t2c", "t2g"].map(v);
      if (t2c || t2g) {
        const c = t2c ? (t2c >= 20 ? "không" : t2c >= 14 ? "nhẹ" : t2c >= 10 ? "trung bình" : "nặng") : null;
        const nguyCo = t2c ? (t2c > 20 ? "nguy cơ suy tim thấp" : t2c >= 10 ? "nguy cơ trung bình" : "nguy cơ cao") : "";
        const g = t2g ? (t2g >= 15.4 ? "không" : t2g >= 4.5 ? "nhẹ" : t2g >= 2.1 ? "trung bình" : "nặng") : null;
        $("#r-fe").innerHTML = (c ? `Cơ tim: T2* ${f(t2c)} ms (R2* ${f(1000 / t2c, 0)} Hz) → quá tải sắt <b>${c}</b>, ${nguyCo}.<br>` : "") + (g ? `Gan: T2* ${f(t2g)} ms (R2* ${f(1000 / t2g, 0)} Hz) → quá tải sắt <b>${g}</b>.` : "");
      }
    };
    main().addEventListener("input", tinh);
  }

  function khongThay(loai, id) {
    tieuDe("Không tìm thấy");
    main().innerHTML = `<h1>Không tìm thấy ${esc(loai)} “${esc(id)}”</h1><p>Trang này chưa có hoặc đã đổi tên. Thử ô tìm kiếm phía trên, hoặc <a href="#/">về trang chủ</a>.</p>`;
  }

  /* ---------- Điều hướng ---------- */
  function dieuHuong() {
    const h = (location.hash || "#/").replace(/^#/, "");
    const [duong] = h.split("?");
    const p = duong.split("#")[0].split("/").filter(Boolean);
    // tô sáng mục menu: khớp đúng "nhóm/trang" trước, sau đó khớp theo nhóm
    const khoa1 = p.slice(0, 2).join("/"), khoa0 = p[0] === "tai-lieu" ? "tham-khao" : p[0];
    const links = [...document.querySelectorAll(".mainnav a")];
    const trung = links.find((a) => a.dataset.nav === khoa1) || links.find((a) => a.dataset.nav === khoa0);
    links.forEach((a) => { a.classList.toggle("on", a === trung); if (a === trung) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    dongMenu();
    const r = {
      "": trangChu,
      benh: () => (p[1] ? trangBenh(decodeURIComponent(p[1])) : trangDsBenh()),
      protocol: () => (p[1] ? trangProtocol(p[1]) : trangDsProtocol()),
      xung: () => (p[1] ? trangXung(p[1]) : trangDsXung()),
      "tham-khao": () => (p[1] ? trangThamKhao(p[1]) : trangDsThamKhao()),
      "tai-lieu": trangTaiLieu,
      "cong-cu": () => ({ "chon-protocol": trangChonProtocol, "tra-nguoc": trangTraNguoc, "so-sanh": trangSoSanh, "may-tinh": trangMayTinh }[p[1]] || trangCongCu)(),
    };
    // thay main để bỏ các bộ lắng nghe sự kiện cũ
    const cu = $("#main"), moi = cu.cloneNode(false); cu.replaceWith(moi);
    try { (r[p[0] || ""] || (() => khongThay("trang", p[0])))(); }
    catch (e) { console.error(e); main().innerHTML = `<h1>Lỗi hiển thị</h1><p>${esc(e.message)}</p><p class="muted">Có thể một file nội dung bị sai cú pháp. Mở Console (F12) để xem chi tiết.</p>`; }
    if (!location.hash.includes("#", 1)) window.scrollTo(0, 0);
  }

  /* ---------- Giao diện sáng/tối ---------- */
  function ganGiaoDien() {
    const t = luu.doc("cmr-giao-dien", null);
    if (t) document.documentElement.dataset.theme = t;
    $("#theme").addEventListener("click", () => {
      const toi = document.documentElement.dataset.theme
        ? document.documentElement.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      const moi = toi ? "light" : "dark";
      document.documentElement.dataset.theme = moi; luu.ghi("cmr-giao-dien", moi);
    });
    $("#menu").addEventListener("click", () => {
      const mo = !$("#side").classList.contains("open");
      $("#side").classList.toggle("open", mo); $("#scrim").classList.toggle("open", mo);
      $("#menu").setAttribute("aria-expanded", mo);
    });
    $("#scrim").addEventListener("click", dongMenu);
  }
  function dongMenu() {
    $("#side").classList.remove("open"); $("#scrim").classList.remove("open");
    $("#menu").setAttribute("aria-expanded", "false");
  }

  /* ---------- Tải các file nội dung theo danh mục ---------- */
  CMR.khoiDong = function () {
    ganGiaoDien();
    const ds = window.DANH_MUC || [];
    // Tải song song mọi file cùng lúc (nhanh hơn nhiều khi chạy trên mạng);
    // async = false giữ đúng thứ tự chạy như trong danh mục.
    let conLai = ds.length;
    const tiep = () => {
      if (!conLai) return xong();
      ds.forEach((f) => {
        const s = document.createElement("script");
        s.src = "noi-dung/" + f;
        s.async = false;
        const het = () => { if (--conLai === 0) xong(); };
        s.onload = het;
        s.onerror = () => { CMR.loiTai.push(s.src); het(); };
        document.body.appendChild(s);
      });
    };
    const xong = () => {
      taoChiMuc(); ganTimKiem();
      window.addEventListener("hashchange", dieuHuong);
      dieuHuong();
      if (CMR.loiTai.length) console.warn("Không tải được:", CMR.loiTai);
    };
    tiep();
  };
})();
