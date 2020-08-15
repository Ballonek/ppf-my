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
  { number: 1, icon: seo },
  { number: 2, icon: covid },
  { number: 3, icon: typewriter },
  { number: 4, icon: accessibility },
]

const Blog = ({ t }) => {
  return (
    <Container className="blog-wrapper" id="blog">
      <div className="header-text">{ReactHtmlParser(t("blog.title"))}</div>
      <div className="header">{ReactHtmlParser(t("blog.subtitle"))}</div>
      <Carousel
        // infinite
        arrows
        className="blog-carousel"
        // autoPlay={4000}
        // animationSpeed={1000}
        breakpoints={{
          1366: {
            slidesPerPage: 3,
          },
          1130: {
            slidesPerPage: 2,
          },
          767: {
            slidesPerPage: 1,
          },
        }}
        slidesPerPage={3}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.number}
            title={t(`blog.blog${blog.number}.title`)}
            shortText={t(`blog.blog${blog.number}.shortText`)}
            longText={t(`blog.blog${blog.number}.longText`)}
            icon={blog.icon}
            blue={blog.blue}
          ></BlogCard>
        ))}
      </Carousel>
    </Container>
  )
}

export default withTranslation(Blog)
