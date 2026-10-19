"""Trích hình minh họa từ 2 quyển sách vào thư mục hinh/.
Cần: Python 3 và PyMuPDF (pip install pymupdf).  Chạy từ thư mục gốc của web.

  python cong-cu-noi-bo/lay-hinh.py s1 <trang in> <thư mục bệnh>
      -> chụp nguyên trang Pocket Guide (bỏ thanh tiêu đề), lưu hinh/<thư mục bệnh>/s1-<trang>.jpg
  python cong-cu-noi-bo/lay-hinh.py s2 <trang in> <thư mục bệnh> [chỉ số ảnh, ví dụ 0 hoặc 0,1]
      -> cắt hình trong EACVI Textbook (giữ nhãn trong hình, bỏ chữ thân bài), lưu hinh/<thư mục bệnh>/s2-<trang>[-chỉ số].jpg
  python cong-cu-noi-bo/lay-hinh.py ds <trang in>
      -> liệt kê các ảnh trên trang của Textbook (chỉ số, vị trí) để chọn

"Trang in" là số trang in trong sách. S1: trang PDF = trang in + 1. S2: trang PDF = trang in + 19.
"""
import sys, os, glob
import pymupdf as fitz
GOC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def tim(mau):
    for thu_muc in (GOC, os.path.join(GOC, "tai-lieu")):
        f = glob.glob(os.path.join(thu_muc, mau))
        if f: return f[0]
    sys.exit("Không tìm thấy file sách: " + mau)
S1 = lambda: tim("CMR_guide*.pdf")
S2 = lambda: tim("The EACVI Textbook*.pdf")

def la_nhan(b):
    spans = [s for l in b["lines"] for s in l["spans"] if s["text"].strip()]
    if not spans: return True
    if spans[0]["text"].strip().startswith("Fig."): return False
    return all("Minion" not in s["font"] and s["size"] < 8.8 for s in spans)

def s1(trang, ra):
    page = fitz.open(S1())[trang]
    r = page.rect
    clip = fitz.Rect(r.x0, r.y0 + r.height * 0.165, r.x1, r.y1 - r.height * 0.035)
    page.get_pixmap(dpi=170, clip=clip).save(ra, jpg_quality=82)

def s2(trang, ra, chon="all"):
    page = fitz.open(S2())[trang + 18]
    anh = [i for i in page.get_image_info() if i["bbox"][2] - i["bbox"][0] > 40 and i["bbox"][3] - i["bbox"][1] > 40]
    if chon != "all": anh = [anh[int(k)] for k in chon.split(",")]
    R = fitz.Rect(anh[0]["bbox"])
    for i in anh[1:]: R |= fitz.Rect(i["bbox"])
    khoi = [b for b in page.get_text("dict")["blocks"] if b["type"] == 0]
    gan = fitz.Rect(R.x0 - 14, R.y0 - 3, R.x1 + 14, R.y1 + 14)
    for b in khoi:
        if fitz.Rect(b["bbox"]).intersects(gan) and la_nhan(b): R |= fitz.Rect(b["bbox"])
    for b in khoi:
        if fitz.Rect(b["bbox"]).intersects(R) and not la_nhan(b): page.add_redact_annot(fitz.Rect(b["bbox"]), fill=(1, 1, 1))
    page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE, graphics=fitz.PDF_REDACT_LINE_ART_NONE)
    page.get_pixmap(dpi=200, clip=fitz.Rect(R.x0 - 2, R.y0 - 2, R.x1 + 2, R.y1 + 2)).save(ra, jpg_quality=84)

if __name__ == "__main__":
    a = sys.argv
    if len(a) < 3: sys.exit(__doc__)
    if a[1] == "ds":
        page = fitz.open(S2())[int(a[2]) + 18]
        for k, i in enumerate(page.get_image_info()): print(k, [round(x) for x in i["bbox"]])
        sys.exit()
    loai, trang, thu_muc = a[1], int(a[2]), a[3]
    os.makedirs(os.path.join(GOC, "hinh", thu_muc), exist_ok=True)
    chon = a[4] if len(a) > 4 else "all"
    ten = f"{loai}-{trang}" + ("" if chon == "all" else "-" + chon.replace(",", "_")) + ".jpg"
    ra = os.path.join(GOC, "hinh", thu_muc, ten)
    (s1(trang, ra) if loai == "s1" else s2(trang, ra, chon))
    print("Đã lưu:", os.path.relpath(ra, GOC).replace(os.sep, "/"))
