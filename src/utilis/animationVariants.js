// Xuất (export) hàm fadeIn để có thể sử dụng ở các file khác
export const fadeIn = (direction, delay) => {
  return {
    // Trạng thái ban đầu của animation (ẩn đi)
    hidden: {
      // Thiết lập vị trí theo trục Y (dọc)
      // Nếu direction là 'up' thì dịch xuống 40px (tức là sẽ trượt lên khi hiện ra)
      // Nếu direction là 'down' thì dịch lên -40px (tức là sẽ trượt xuống)
      // Ngược lại thì không dịch chuyển theo Y
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,

      // Thiết lập vị trí theo trục X (ngang)
      // Nếu direction là 'left' thì dịch sang phải 40px (trượt từ phải qua trái)
      // Nếu direction là 'right' thì dịch sang trái -40px (trượt từ trái qua phải)
      // Ngược lại thì không dịch chuyển theo X
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,

      // Độ mờ: 0 nghĩa là hoàn toàn trong suốt
      opacity: 0,
    },

    // Trạng thái khi animation hiển thị
    show: {
      // Đưa về đúng vị trí ban đầu
      y: 0,
      x: 0,

      // Làm hiện rõ (không còn trong suốt)
      opacity: 1,

      // Cấu hình hiệu ứng chuyển động
      transition: {
        type: "tween", // Kiểu chuyển động tween (mượt mà, dễ kiểm soát hơn spring)
        duration: 1.2, // Thời gian thực hiện animation là 1.2 giây
        delay: delay, // Độ trễ animation, được truyền từ đối số hàm
        ease: [0.25, 0.25, 0.25, 0.75], // Đường cong easing (tùy chỉnh chuyển động mượt)
      },
    },
  };
};
