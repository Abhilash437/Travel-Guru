import axios from 'axios';



export const getPlacesData = async (type,sw,ne) =>{
    try{
        type = type.toLowerCase();
        console.log(type);
        if(type==="resturants")
            type = "restaurants"
        const URL = 'https://travel-advisor.p.rapidapi.com/'+type+'/list-in-boundary'
        const {data:{data}} = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng
            },
            headers: {
              'X-RapidAPI-Key': 'f1e3b6cb95mshe6249c40abcce80p1fc857jsnf31428aeaa50',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    }catch(e){
        console.log(e);
    }
}