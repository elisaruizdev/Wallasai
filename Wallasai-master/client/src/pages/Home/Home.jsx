import "./Home.scss"
import { Link } from "react-router-dom";

const Home = () => {
  
  return (


<section>
{/* <h2 class="titleBlog">Blog</h2> */}
<div class="presentation">
<div className="conten_wallasai">
<div>
<h1 class="titleWhat">¿Qué es Wallasai?</h1>
<h2 className="p_home">Somos las primera plataforma de compra-venta de plantas exóticas.
  Ponemos en contacto a personas de todo el mundo. 
</h2>
</div>
<div>
 <img className="img_home" src="https://i.imgur.com/GdJVGwp.png"></img>
 </div>
</div>

</div>

<div className="blog">


<figure class="snip1477">
  <img src="https://i.imgur.com/tLhy4LS.jpg" alt="sample38" />
  <div class="title">
    <div>
      <h2>10 Tips</h2>
      <h4>Cuida tus cactus</h4>
    </div>
  </div>
  <figcaption>
    <p>Si bien la familia de las cactáceas es enorme, existe una clasificación que marca los Tipos de Cactus y cada una, con sus diferencias. ¡Descúbrelas Ahora!</p>
  </figcaption>
  <a href="tipscactus"></a>
</figure>



<figure class="snip1477">
  <img src="https://i.imgur.com/obcQyt5.jpg" alt="sample91" />
  <div class="title">
    <div>
      <h2>Bonsais</h2>
      <h4>Nutrición y cuidados</h4>
    </div>
  </div>
  <figcaption>
    <p>Abonar regularmente su Bonsái durante la temporada de crecimiento es crucial ... ir renovando el contenido nutricional de la poca tierra de la que disponen</p>
  </figcaption>
  <a href="tipsbonsai"></a>
</figure>



<figure class="snip1477">
  <img src="https://i.imgur.com/LbpcFp7.jpg" alt="sample35" />
  <div class="title">
    <div>
      <h2>Árboles</h2>
      <h4>5 Tips de regado</h4>
    </div>
  </div>
  <figcaption>
    <p>Riega los árboles recién plantados una vez al día durante las primeras dos semanas después de plantar </p>
  </figcaption>
  <a href="tipsarbol"></a>
</figure>


</div>
</section>
  );
  };


export default Home;
