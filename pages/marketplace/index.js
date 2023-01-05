import { BaseLayout } from "@components/ui/layout";
import { CourseCard, CourseList } from "@components/ui/course";
import { getAllCourses } from "@content/courses/fetcher";
import { useWalletInfo } from "@components/hooks/web3";
import { Button } from "@components/ui/common";
import { OrderModal } from "@components/ui/order";
import { useState } from "react";
import { MarketHeader } from "@components/ui/marketplace";

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const {canPurchase} = useWalletInfo()

  return (
    <>
      <div className="py-4">
        <MarketHeader/>  
      </div>
      <CourseList courses={courses}>
        {(course) => (
          <CourseCard
            key={course.id}
            course={course}
            disabled={!canPurchase}
            Footer={() => (
              <div className="mt-4">
                <Button 
                  disabled={!canPurchase}
                  onClick = {() => setSelectedCourse(course)}
                  variant="lightPurple">Purchase
                </Button>
              </div>
            )}
          />
        )}
      </CourseList>
      {
        selectedCourse && 
        <OrderModal 
          course={selectedCourse}
          onClose= {() => setSelectedCourse(null)}
        />
      }
      
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
