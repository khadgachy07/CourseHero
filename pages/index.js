import { BaseLayout } from "@components/layout";
import { CourseList } from "@components/course"
import {  Hero } from "@components/common";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({courses}) {
  return (
        <>
            <Hero />
            <CourseList courses={courses} />
        </>
       
  );
}

export function getStaticProps() {
  const {data} = getAllCourses()
  return{
    props : {
      courses: data
    }
  }
}

Home.Layout = BaseLayout