import Skills from "@/components/Skills";
const people = {
    name: 'Jason Ledezma',
    email: 'ja.ledezsa21@gmail.com',
    image:
    "https://avatars.githubusercontent.com/u/110749419?s=400&v=4",
  }
export default function Home() {


  return (
    <>
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="flex h-auto w-auto justify-center flex-col">
          <img className="h-40 w-40 lg:h-60 lg:w-60 justify-self-center rounded-full" src={people.image} alt="" />
          <div className="flex items-center justify-center flex-col">
            <p className="text-sb font-medium text-gray-900 justify-self-start">{people.name}</p>
            <p className="text-sb text-gray-500">{people.email}</p>
          </div>
        </div>
        <Skills/>

      </div>
    </>
  );
}
