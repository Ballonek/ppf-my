import React from "react"
import { withTranslation } from "react-multi-lang"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import BlogCard from "./BlogCard"
import ReactHtmlParser from "react-html-parser"
import "./style.scss"
import { Container } from "reactstrap"
import { accessibility, covid, seo, typewriter } from "../../assets/blog"

const blogs = [
  { number: 1, img: seo },
  { number: 2, img: covid, blue: true },
  { number: 3, img: typewriter },
  { number: 4, img: accessibility, blue: true },
]

const Blog = ({ t }) => {
  return (
    <Container className="blog-wrapper">
      <div className="header-text">{ReactHtmlParser(t("blog.title"))}</div>
      <div className="header">{ReactHtmlParser(t("blog.subtitle"))}</div>
      <Carousel
        infinite
        arrows
        className="blog-carousel"
        slidesPerPage="3"
        autoPlay={4000}
        animationSpeed={1000}
        breakpoints={{
          1130: {
            slidesPerPage: 2,
          },
          756: {
            slidesPerPage: 1,
          },
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.number}
            title={t(`blog.blog${blog.number}.title`)}
            shortText={t(`blog.blog${blog.number}.shortText`)}
            longText={t(`blog.blog${blog.number}.longText`)}
            image={blog.img}
            blue={blog.blue}
          ></BlogCard>
        ))}
      </Carousel>
    </Container>
  )
}

export default withTranslation(Blog)
