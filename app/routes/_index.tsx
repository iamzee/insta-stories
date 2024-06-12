import type { MetaFunction } from "@remix-run/node";
import {faker} from '@faker-js/faker';



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-20">
      <div className="flex space-x-10">
        {[...Array(20)].map((_, index) => <StoryThumbnail key={index} />)}
      </div>
    </div>
  );
}

export const StoryThumbnail = () => {
  return (
    <div className="w-[66px] h-[66px] relative flex-[1_0_auto]">
      <div className="absolute inset-0 w-full h-full rounded-full" style={{
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      }}></div>
      <img src={faker.image.url()} alt="" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[62px] h-[62px] rounded-full object-cover border-2 border-white" />
    </div>
  )
}
