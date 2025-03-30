"use client";
import { useRef } from 'react';
import './page.scss';
// import { Button } from '@/components/core/Button'
// import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link';
import { Carousel, Rate } from 'antd';
import { useScroll, motion, useTransform } from 'framer-motion';
import Button from '@/components/core/Button/Button';

const HomePage = () => {
  // const { user } = useAuth()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Dữ liệu đánh giá khách hàng
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thị Hồng",
      rating: 5,
      comment: "Dâu tây ngon ngọt, tươi mới, giao hàng nhanh chóng. Tôi rất hài lòng!",
      avatar: "/images/avatar1.jpg"
    },
    {
      id: 2,
      name: "Trần Văn Nam",
      rating: 4,
      comment: "Chất lượng tốt, giá cả hợp lý. Sẽ ủng hộ cửa hàng dài lâu.",
      avatar: "/images/avatar2.jpg"
    },
    {
      id: 3,
      name: "Lê Thị Mai",
      rating: 5,
      comment: "Dâu đẹp như hình, ăn rất thơm ngon. Cảm ơn shop!",
      avatar: "/images/avatar3.jpg"
    }
  ]

  // Dữ liệu hình ảnh slide
  const images = [
    "/images/strawberry1.jpg",
    "/images/strawberry2.jpg",
    "/images/strawberry3.jpg",
    "/images/strawberry4.jpg"
  ]

  return (
    <div className="home-page" ref={sectionRef}>
      {/* Hero Section với video background */}
      <section className="hero-section">
        {/* Video background */}
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/video/dautay.webm" type="video/webm" />
            <source src="/video/dautay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        {/* Nội dung hero với hiệu ứng parallax */}
        <motion.div
          className="hero-content"
          style={{ y: yBg }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dâu Tây Đà Lạt Tươi Ngon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hương vị thiên nhiên, chất lượng vượt trội
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* {user ? (
              <Link href="/order">
                <Button type="primary" size="large">Đặt hàng ngay</Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button type="primary" size="large">Đăng nhập để đặt hàng</Button>
              </Link>
            )} */}
            <Link href="/login">
              <Button type="primary" size="large">Đăng nhập để đặt hàng</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Về Dâu Tây Đà Lạt</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Dâu tây Đà Lạt được trồng trên vùng đất đỏ bazan màu mỡ, với khí hậu mát mẻ quanh năm tạo nên hương vị đặc trưng khó quên.
              </p>
              <p>
                Chúng tôi cam kết mang đến cho khách hàng những trái dâu tươi ngon nhất, không chất bảo quản, đảm bảo an toàn vệ sinh thực phẩm.
              </p>
              <ul>
                <li>100% tự nhiên</li>
                <li>Không chất bảo quản</li>
                <li>Thu hoạch hàng ngày</li>
                <li>Giao hàng tận nơi</li>
              </ul>
            </div>
            <div className="about-image">
              <Carousel autoplay effect="fade">
                {images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Dâu tây Đà Lạt ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="container">
          <h2>Tại sao chọn chúng tôi?</h2>
          <div className="features">
            <motion.div
              className="feature"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="feature-icon">🌱</div>
              <h3>Canh tác hữu cơ</h3>
              <p>Phương pháp trồng tự nhiên, không thuốc trừ sâu</p>
            </motion.div>
            <motion.div
              className="feature"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="feature-icon">🏆</div>
              <h3>Chất lượng cao</h3>
              <p>Dâu tây được chọn lọc kỹ càng trước khi đến tay khách hàng</p>
            </motion.div>
            <motion.div
              className="feature"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="feature-icon">🚚</div>
              <h3>Giao hàng nhanh</h3>
              <p>Giao hàng trong ngày tại Đà Lạt, 1-2 ngày với các tỉnh khác</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2>Đánh giá của khách hàng</h2>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="content">
                  <h4>{testimonial.name}</h4>
                  <Rate disabled defaultValue={testimonial.rating} />
                  <p>{testimonial.comment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage