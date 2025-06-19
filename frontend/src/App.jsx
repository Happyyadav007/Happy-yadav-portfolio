import React, { useState, useEffect } from "react";
// import { Navbar, Footer, BackToTopButton } from "./components/layout";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackToTopButton } from "./components/layout/BackToTopButton";
import { HomePage } from "./components/pages/Home/HomePage";
import { ServicesPage } from "./components/pages/Services/ServicesPage";
import { ProjectListPage } from "./components/pages/Projects/ProjectListPage";
import { ProjectDetailPage } from "./components/pages/Projects/ProjectDetailPage"; 
import { ResumePage } from "./components/pages/Resumes/ResumePage";
import { TestimonialsPage } from "./components/pages/Testimonials/TestimonialsPage";
import { SkillsPage } from "./components/pages/Skills/SkillsPage";  
import { BlogListPage } from "./components/pages/Blog/BlogListPage";
import { BlogPostPage } from "./components/pages/Blog/BlogPostPage";
import { ContactPage } from "./components/pages/Contact/ContactPage";
import { CursorLightEffect } from "./components/common/CursorLightEffect";

function App() {
  const [currentPage, setCurrentPage] = useState("HomePage"); 
  const [pageProps, setPageProps] = useState({});

  const navigateTo = (page, props = {}) => {
    setCurrentPage(page);
    setPageProps(props);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const timer = setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(".fade-in-section");
      elementsToObserve.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const elementsToObserve = document.querySelectorAll(".fade-in-section");
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "HomePage":
        return <HomePage navigateTo={navigateTo} />;
      case "ServicesPage":
        return <ServicesPage navigateTo={navigateTo} />;
      case "ProjectListPage":
        return <ProjectListPage navigateTo={navigateTo} />;
      case "ProjectDetailPage":
        return (
          <ProjectDetailPage
            navigateTo={navigateTo}
            projectId={pageProps.projectId}
          />
        );
      case "ResumePage":
        return <ResumePage navigateTo={navigateTo} />;
      case "TestimonialsPage":
        return <TestimonialsPage navigateTo={navigateTo} />;
      case "SkillsPage":
        return <SkillsPage navigateTo={navigateTo} />;
      case "BlogListPage":
        return <BlogListPage navigateTo={navigateTo} />;
      case "BlogPostPage":
        return (
          <BlogPostPage navigateTo={navigateTo} postId={pageProps.postId} />
        );
      case "ContactPage":
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <>
    {/* <CursorLightEffect/> */}
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      {renderPage()}
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
