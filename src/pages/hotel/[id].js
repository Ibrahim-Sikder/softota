function HotelDetails({ data }){
 console.log("post", data)
     return (
          <div>
               <h2>Detail hotel booking</h2>
               <h2>{data.title} </h2>
              <p> {data.body}</p>
          </div>
     )

}



export async function getStaticProps(ctx){
     const {params}= ctx

     const response = await fetch(`https://jsonplaceholder.typicode.com/${params.id}`)
     const data = await response.json()
     return{
          props:{
               data: data,
          },
     }
}

export async function getStaticPaths(){
     return{
          paths: [
               {params: {id: "1"}},
               {params: {id: "2"}},
               {params: {id: "3"}},
          ],
          fallback: true
     }
}


export default HotelDetails;