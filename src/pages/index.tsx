import { trpc } from "../utils/trpc"

export default function Home(){

  const {data,isLoading} = trpc.useQuery(["hello"])
  if(isLoading){
    return <div>loading</div>
  }
  if (data){
    return <div>{data!.greeting}</div>
  }


  return <div className="h-screen w-screen flex flex-col justify-center items-center">

    <div className="text-2xl- text-center">Which pokemon is roundest</div>
    <div className="p-2"></div>
    <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
    <div className="w-16 h-16 bg-red-200"></div>
    <div className="p-8">Vs</div>
    <div className="w-16 h-16 bg-red-200"></div>

    </div>

  </div>
}
