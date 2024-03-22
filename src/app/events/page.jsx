import React from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import Event from "@/components/Event";
import Hero from "@/components/Hero";

function Events() {
  return (
    <Layout>
      <Hero />
      <Event />
      <div className=" w-full h-full">
        <h1 className="text-center text-3xl ">All Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-6">
          <EventCard />
        </div>
      </div>
    </Layout>
  );
}

export default Events;
// import React from "react";
// import Heroz from "@/components/Heroz";
// import Event from "@/components/Event";
// import Layout from "@/components/Layout";
// import EventCard from "@/components/EventCard";

// function Events() {
//   return (
//     <Layout>
//       {/* <Heroz /> */}
//       {/* <Event /> */}
//       <div className=" w-full h-full">
//         <h1 className="text-center text-3xl ">All Events</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-6">
//           {/* <EventCard /> */}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Events;
