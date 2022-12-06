import "../styles/elements/_my-trips.scss";
import {useNavigate, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function MyTripsShowTrip() {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let {data: post, error} = await supabase
        .from("post")
        .select("*")
        .eq("id", id);

      if (!error) {
        setPost(post);
      }
    };

    fetchPost();
  }, []);

  useEffect(() => {
    // document.location.reload(false);
    console.log(id);
  }, [id]);

  //   const removePost = async (title) => {
  //     const {data, error} = await supabase
  //       .from("post")
  //       .delete()
  //       .eq("title", title);
  // };

  const removePost = async (title) => {
    try {
      const {data, error} = await supabase
        .from("post")
        .delete()
        .eq("title", title);
      setPost(post.filter((post) => post.title != title));
    } catch (error) {
      console.log("error", error);
    }
  };

  // const deleteCountry = async (countryId) => {
  //   try {
  //     await supabase.from('countries').delete().eq('id', countryId);
  //     setCountries(countries.filter((country) => country.id != countryId));
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // usuwanie wiersza
  // const { data, error } = await supabase
  // .from('post')
  // .delete()
  // .eq('some_column', 'someValue')

  return (
    <>
      {post &&
        post.map((el) => (
          <section className="my-trips-description" key={el.id}>
            <h2>{el.title}</h2>
            <h3>{el.localization}</h3>
            <p>{el.description}</p>
            <button
              className="circle-medium"
              type="remove"
              value="Remove"
              label="Remove"
              onClick={() => removePost(el.title)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </section>
        ))}
    </>
  );
}
