import flights from '../api/flight.json'

function Flightdetails () {

    let datas = [];
    for (let i = 0 ; i <= 4000 ; i++){
        datas.push(flights[i]);
    }

    return (
        <div className=''> 

        <div>
            <th className='flex text-lg justify-around bg-slate-800 text-gray-400 text-center py-5'>
                <td className='px-1 w-28'>ID</td>
                <td className='px-1 w-64'>NAME</td>
                <td className='px-6 w-64'>EMAIL</td>
                <td className='px-10 w-28'>FLYING ORIGIN</td>
                <td className='px-1 w-28'>FLYING DESTINATION</td>
                <td className='px-1 w-36 mx-5'>DEPARTURE DATE</td>
                <td className='px-1 w-32 mx-7'>RETURN DATE</td>
            </th>
        </div>

         {flights.map(data => (
            <th className="bg-slate-600 flex text-xs justify-around  text-black"key={data.id}>
                <td className=' w-16'>{data.id}</td>
                <td className=' w-60'>{data.name}</td>
                <td className=' w-60'>{data.email}</td>
                <td className=' w-16'>{data.flying_origin}</td>
                <td className=' w-16'>{data.flying_destination}</td>
                <td className=' w-36'>{data.departure_date}</td>
                <td className=' w-36'>{data.return_date}</td>
            </th>
         ))}
        </div>
    )
}

export default Flightdetails