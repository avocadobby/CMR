/* Trang tham khảo. Sửa noiDung (Markdown). */
CMR.thamKhao({
  id: "anh-gia",
  ten: "Ảnh giả và chụp bệnh nhân khó",
  moTa: "Gấp ảnh, bóng ma, mất tín hiệu do dòng chảy, viền tối, kim loại; bệnh nhân nín thở kém, loạn nhịp.",
  thuTu: 8,
  tuKhoa: ["artefact", "artifact", "ảnh giả", "wrap", "ghosting", "dark rim", "metal", "nín thở kém", "loạn nhịp", "arrhythmia"],
  noiDung: `
## Bệnh nhân nín thở kém (S1, tr. 12)
| Cách | Ghi chú |
| --- | --- |
| Giảm số lát mỗi lần nín thở | Tăng tổng thời gian |
| Giảm số bước mã hóa pha: half-scan, tăng kích thước voxel, parallel imaging | Giảm SNR / độ phân giải, có thể ảnh giả |
| Navigator hô hấp | Tăng thời gian |
| Chụp ở thì hít vào | Vị trí lát thay đổi nhiều hơn giữa các lần |
| Cân nhắc gây mê | — |

## Loạn nhịp (S1, tr. 12)
| Cách | Ghi chú |
| --- | --- |
| Kiểm soát nhịp/tần số trước chụp | Chẹn beta, thuốc chống loạn nhịp |
| Arrhythmia rejection | Tăng thời gian nín thở |
| Prospective triggering | Giảm SNR; không thu được cuối tâm trương |
| Chụp thời gian thực | Giảm độ phân giải không gian, thời gian, SNR |

## Ảnh giả thường gặp (S1, tr. 13–14)
| Ảnh giả | Cách khắc phục |
| --- | --- |
| Gấp ảnh (wrap) | Tăng FOV, tăng bước mã hóa pha (oversampling), đổi hướng pha – tần số, dải bão hòa, chỉ chọn phần tử cuộn cần |
| Bóng ma do thở | Nín thở + tăng tốc, navigator, đổi hướng pha, dải bão hòa thành bụng trước |
| Bóng ma do dòng chảy | Đồng bộ ECG, bù dòng, dải bão hòa máu, đổi hướng pha |
| Mất tín hiệu do dòng xoáy | Giảm TE, bù dòng, chuỗi không cân bằng |
| Nhiễu RF | Tìm nguồn nhiễu (đóng cửa phòng máy) |
| Dịch chuyển hóa học | So sánh với chuỗi khác |
| Dòng chậm | Thường trên T2; tăng độ dày lát xung máu đen |
| Viền tối (tưới máu) | Giảm liều/tốc độ thuốc, tăng độ phân giải |
| Kim loại | Spin echo ít hơn gradient echo; tránh bSSFP |

![Ảnh giả gấp, bóng ma](hinh/tham-khao/s1-13.jpg)

![Ảnh giả dòng chảy, RF, dịch chuyển hóa học, dòng chậm, viền tối, kim loại](hinh/tham-khao/s1-14.jpg)
`,
});
