import express from "express";
import{
createMovies,
deleteMovieById,
getMoviesById,
getMovies,
UpdateMovieById,
} from "../helper.js";
const router = express.Router();


router.get("/movies", async (request, response) => {
    console.log(request.query);
    const filter = request.query;
    console.log(filter);
    if(filter.rating){
    filter.rating = parseInt(filter.rating);
    }
  //const {Language, rating} = request.query;
    const filterMovies = await client.db("b28wd").collection("movies").find({}).toArray();
    console.log(filterMovies);
/*

    console.log(Language, rating);


if(Language){

    filterMovies = movies.filter((mv) => mv.Language === Language);
    response.send(filterMovies);
}

if (rating){

   filterMovies = movies.filter((mv) => mv.rating === parseInt(rating));
}

*/
    response.send(filterMovies);
});

router.post('/movies', async (request, response) =>
{
const data = request.body;
console.log(data);
const result = await client   
.db("b28wd")
.collection("movies")
.insertMany(data);
response.send(result);
})




router.get("/movies:id", async (request, response) => {
        console.log(request.params);
        const { id } = request.params;
    //  const movie = movies.find((mv) => mv.id === id);
        const movie = await client
       .db("b28wd")
       .collection("movies")
       .findOne({ id:id });
    console.log(movie);
    movie
        ? response.send(movie)
        : response.status(404).send({message: "no matching movie"});
        });
        
        router.delete("/movies:id", async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
//  const movie = movies.find((mv) => mv.id === id);
    const result = await client
   .db("b28wd")
   .collection("movies")
   .deleteOne({ id:id });
result.deletedCount>0
    ? response.send(result)
    : response.status(404).send({message: "no matching movie"});
    });



    router.put("/movies:id", async (request, response) => {
        console.log(request.params);
        const { id } = request.params;
        const data = request.body;
    //  const movie = movies.find((mv) => mv.id === id);
       // const result = await client
      // .db("b28wd")
      // .collection("movies")
      // .updateOne({ id:id }, {$set:data});

const result = await updateMovieById(id, data);
const movie = await getMoviesById(id);
response.send(movie);
    });
